// Run against a locally opened app: agent-browser --session lazy-tea-app eval --stdin < tests/browser-check.js
;(async () => {
  const $ = selector => document.querySelector(selector)
  const checks = []
  function check(condition, name) {
    if (!condition) throw new Error(name)
    checks.push(name)
  }
  function edit(seconds) {
    $('#edit-time').click()
    $('#minutes').value = '0'
    $('#seconds').value = String(seconds)
    $('#time-editor').requestSubmit()
  }

  $('#reset').click()
  $('#tea-picker [data-tea-id="green"]').click()
  check($('#selected-temperature').textContent === '75–80', 'selected tea updates parameters')
  $('[data-volume="500"]').click()
  check($('[data-dose]').textContent === '5', 'preset volume recalculates grams')
  $('[data-volume="custom"]').click()
  $('#custom-volume').value = '125'
  $('#custom-volume').dispatchEvent(new Event('input', { bubbles: true }))
  check($('[data-dose]').textContent === '1,25', 'custom volume uses Polish decimals')
  $('#custom-volume').value = ''
  $('#custom-volume').dispatchEvent(new Event('input', { bubbles: true }))
  check(
    $('[data-dose]').textContent === '—' && !$('#volume-error').hidden,
    'invalid volume never leaves stale grams',
  )
  $('[data-volume="350"]').click()

  const clockTop = $('#countdown').getBoundingClientRect().top
  const startTop = $('#start-pause').getBoundingClientRect().top
  $('#edit-time').click()
  check($('#countdown').hidden, 'editing replaces the time readout')
  check(
    Math.abs($('.time-inputs').getBoundingClientRect().top - clockTop) < 2,
    'time inputs occupy the clock position',
  )
  check(
    Math.abs($('#start-pause').getBoundingClientRect().top - startTop) < 2,
    'editing does not add a panel or move the Start action',
  )
  $('#minutes').value = '9'
  $('#cancel-time').click()
  check(
    !$('#countdown').hidden && $('#countdown').textContent === '2:00',
    'cancel restores the unchanged time readout',
  )
  $('#edit-time').click()
  $('#time-editor').dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
  check($('#time-editor').hidden, 'Escape closes inline time editing')

  edit(0)
  check(!$('#time-error').hidden && !$('#time-editor').hidden, 'zero duration cannot be applied')
  $('#seconds').value = '5'
  $('#time-editor').requestSubmit()
  $('#tea-picker [data-tea-id="green"]').click()
  check($('#countdown').textContent === '0:05', 'selecting the same tea preserves edited time')
  $('#start-pause').click()
  $('#tea-picker [data-tea-id="black"]').click()
  check(
    $('#timer-tea').textContent === 'Zielona' && !$('#timer-context').hidden,
    'browsing another tea preserves the active brew',
  )
  $('#start-pause').click()
  const paused = $('#countdown').textContent
  await new Promise(resolve => setTimeout(resolve, 250))
  check(
    $('#timer-status').textContent === 'Pauza' && $('#countdown').textContent === paused,
    'pause freezes the remaining time',
  )
  $('#reset').click()
  check(
    $('#timer-tea').textContent === 'Czarna' && $('#countdown').textContent === '4:00',
    'reset adopts the browsed tea',
  )

  edit(1)
  $('#start-pause').click()
  const until = performance.now() + 1100
  while (performance.now() < until) {
    /* Intentionally delay the next interval to reproduce a stale Pause button. */
  }
  $('#start-pause').click()
  check(
    $('#timer-status').textContent === 'Gotowe',
    'late pause finishes rather than unexpectedly restarting',
  )
  await new Promise(resolve => setTimeout(resolve, 250))
  check($('#timer-status').textContent === 'Gotowe', 'completion message persists')
  $('#reset').click()
  $('#tea-picker [data-tea-id="green"]').click()
  edit(1)
  $('#start-pause').click()
  $('#tea-picker [data-tea-id="black"]').click()
  const finishAt = performance.now() + 1100
  while (performance.now() < finishAt) {
    /* Let the preserved green brew expire while black is selected. */
  }
  document.dispatchEvent(new Event('visibilitychange'))
  $('#tea-picker [data-tea-id="black"]').click()
  check(
    $('#timer-tea').textContent === 'Czarna' && $('#countdown').textContent === '4:00',
    'reselecting the browsed tea after completion loads its timer',
  )
  $('#reset').click()
  $('#tea-picker [data-tea-id="green"]').click()
  return checks
})()
