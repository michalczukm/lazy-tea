import test from 'node:test'
import assert from 'node:assert/strict'
import { setImmediate } from 'node:timers/promises'
import { keepScreenAwake } from '../public/wake-lock.js'

function browser(t, wakeLock, visibility = 'visible') {
  const document = new EventTarget()
  document.visibilityState = visibility
  const window = new EventTarget()
  for (const [key, value] of Object.entries({ document, window, navigator: { wakeLock } })) {
    const original = Object.getOwnPropertyDescriptor(globalThis, key)
    Object.defineProperty(globalThis, key, { value, configurable: true })
    t.after(() => {
      if (original) Object.defineProperty(globalThis, key, original)
      else delete globalThis[key]
    })
  }
  return {
    document,
    window,
    visibility(state) {
      document.visibilityState = state
      document.dispatchEvent(new Event('visibilitychange'))
    },
  }
}

function sentinel() {
  const lock = new EventTarget()
  lock.released = false
  lock.release = async () => {
    lock.released = true
    lock.dispatchEvent(new Event('release'))
  }
  return lock
}

test('requests a screen lock on a visible page without starting the timer', async t => {
  const requests = []
  browser(t, {
    request: async type => {
      requests.push(type)
      return sentinel()
    },
  })
  keepScreenAwake()
  await setImmediate()
  assert.deepEqual(requests, ['screen'])
})

test('waits for visibility, then reacquires a released lock on return and pageshow', async t => {
  const locks = []
  const page = browser(
    t,
    {
      request: async () => {
        const lock = sentinel()
        locks.push(lock)
        return lock
      },
    },
    'hidden',
  )
  keepScreenAwake()
  await setImmediate()
  assert.equal(locks.length, 0)
  page.visibility('visible')
  await setImmediate()
  assert.equal(locks.length, 1)
  page.visibility('hidden')
  await locks[0].release()
  page.visibility('visible')
  await setImmediate()
  assert.equal(locks.length, 2)
  page.visibility('hidden')
  await locks[1].release()
  page.document.visibilityState = 'visible'
  page.window.dispatchEvent(new Event('pageshow'))
  await setImmediate()
  assert.equal(locks.length, 3)
})

test('reacquires a lock released while the page is still visible', async t => {
  const locks = []
  browser(t, {
    request: async () => {
      const lock = sentinel()
      locks.push(lock)
      return lock
    },
  })
  keepScreenAwake()
  await setImmediate()
  await locks[0].release()
  await setImmediate()
  assert.equal(locks.length, 2)
  assert.equal(locks[1].released, false)
})

test('coalesces pending requests and never duplicates an active lock', async t => {
  let resolve
  let requests = 0
  const pending = new Promise(done => {
    resolve = done
  })
  const page = browser(t, {
    request: () => {
      requests++
      return pending
    },
  })
  keepScreenAwake()
  page.visibility('visible')
  page.window.dispatchEvent(new Event('pageshow'))
  assert.equal(requests, 1)
  resolve(sentinel())
  await setImmediate()
  page.window.dispatchEvent(new Event('pageshow'))
  await setImmediate()
  assert.equal(requests, 1)
})

test('releases a late grant when the page became hidden', async t => {
  let resolve
  const page = browser(t, {
    request: () =>
      new Promise(done => {
        resolve = done
      }),
  })
  keepScreenAwake()
  page.visibility('hidden')
  const lock = sentinel()
  resolve(lock)
  await setImmediate()
  assert.equal(lock.released, true)
})

test('a return during a pending rejected request still acquires a fresh lock', async t => {
  let reject
  let requests = 0
  const pending = new Promise((_, fail) => {
    reject = fail
  })
  const page = browser(t, {
    request: () => {
      requests++
      return requests === 1 ? pending : Promise.resolve(sentinel())
    },
  })
  keepScreenAwake()
  page.visibility('hidden')
  page.visibility('visible')
  reject(new DOMException('Inactive document', 'NotAllowedError'))
  await setImmediate()
  assert.equal(requests, 2)
})

test('denial does not loop, and a later visible event may retry', async t => {
  let requests = 0
  const page = browser(t, {
    request: async () => {
      requests++
      throw new DOMException('Power saving', 'NotAllowedError')
    },
  })
  keepScreenAwake()
  await setImmediate()
  await setImmediate()
  assert.equal(requests, 1)
  page.visibility('hidden')
  page.visibility('visible')
  await setImmediate()
  assert.equal(requests, 2)
})

test('unsupported browsers continue without a wake lock', async t => {
  browser(t, undefined)
  assert.doesNotThrow(keepScreenAwake)
  await setImmediate()
})
