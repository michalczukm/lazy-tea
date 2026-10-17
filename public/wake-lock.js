export function keepScreenAwake() {
  if (!navigator.wakeLock) return

  let lock
  let pending = false
  let retry = false

  async function acquire() {
    if (document.visibilityState !== 'visible' || (lock && !lock.released)) return
    if (pending) {
      retry = true
      return
    }

    pending = true
    retry = false
    try {
      const acquired = await navigator.wakeLock.request('screen')
      if (document.visibilityState !== 'visible') {
        await acquired.release()
        return
      }
      lock = acquired
      acquired.addEventListener('release', () => {
        if (lock === acquired) {
          lock = undefined
          void acquire()
        }
      })
    } catch {
      // Browser policy or power saving can deny a lock. Retry on the next return.
    } finally {
      pending = false
      if (retry) void acquire()
    }
  }

  document.addEventListener('visibilitychange', acquire)
  window.addEventListener('pageshow', acquire)
  void acquire()
}
