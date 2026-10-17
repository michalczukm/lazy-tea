import { TEAS, doseForVolume, durationFromParts, formatTime, BrewTimer } from './tea.js'

const $ = selector => document.querySelector(selector)
const teaById = id => TEAS.find(tea => tea.id === id)
const numberFormat = new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 2 })
let selectedId = 'green'
let volume = 350
let audioContext
let audioAvailable = true
let ticker
const timer = new BrewTimer(selectedId, teaById(selectedId).seconds)

$('#tea-table').innerHTML = TEAS.map(
  tea => `<tr data-tea-id="${tea.id}">
  <th scope="row"><button type="button" class="tea-select" data-tea-id="${tea.id}" aria-pressed="false">${tea.name}</button></th>
  <td>${tea.temperature}<span class="unit">°C</span></td>
  <td>${tea.time}<span class="unit">min</span><span class="default-time">minutnik ${formatTime(tea.seconds)}</span></td>
  <td><span data-dose></span><span class="unit">g</span></td>
</tr>`,
).join('')
$('#tea-picker').innerHTML = TEAS.map(
  tea => `<button type="button" data-tea-id="${tea.id}" aria-pressed="false">${tea.name}</button>`,
).join('')

function setText(element, text) {
  if (element.textContent !== text) element.textContent = text
}

function activeSession() {
  return timer.status === 'running' || timer.status === 'paused'
}

function closeEditor() {
  $('#time-editor').hidden = true
  $('#edit-time').setAttribute('aria-expanded', 'false')
  $('#time-error').hidden = true
}

function renderSelection() {
  const tea = teaById(selectedId)
  document.querySelectorAll('button[data-tea-id]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.teaId === selectedId))
  })
  document.querySelectorAll('tr[data-tea-id]').forEach(row => {
    row.classList.toggle('is-selected', row.dataset.teaId === selectedId)
  })
  setText($('#selected-name'), tea.name)
  setText($('#selected-temperature'), tea.temperature)
  setText($('#selected-time'), tea.time)
  setText($('#notes-name'), '· ' + tea.name)
  setText($('#tea-tip'), tea.tip)
  setText($('#tea-rebrew'), tea.rebrew)
  renderTimer()
}

function renderVolume() {
  const dose = doseForVolume(volume)
  document.querySelectorAll('[data-dose]').forEach(element => {
    setText(element, dose === null ? '—' : numberFormat.format(dose))
  })
  document.querySelectorAll('[data-volume-label]').forEach(element => {
    setText(
      element,
      dose === null ? 'nieprawidłowa objętość' : numberFormat.format(Number(volume)) + ' ml',
    )
  })
  $('#volume-error').hidden = dose !== null
  $('#custom-volume').setAttribute('aria-invalid', String(dose === null))
}

function renderTimer() {
  const tea = teaById(timer.teaId)
  const active = activeSession()
  const statusLabels = {
    idle: 'Gotowy do parzenia',
    running: 'Parzenie w toku',
    paused: 'Pauza',
    done: 'Gotowe',
  }
  setText($('#timer-tea'), tea.name)
  setText($('#timer-status'), statusLabels[timer.status])
  setText($('#countdown'), formatTime(timer.secondsLeft(Date.now())))
  setText(
    $('#start-pause'),
    { idle: 'Start', running: 'Pauza', paused: 'Wznów', done: 'Parz ponownie' }[timer.status],
  )
  $('#edit-time').disabled = active
  $('.timer').classList.toggle('is-done', timer.status === 'done')
  $('#timer-context').hidden = !active || selectedId === timer.teaId
  setText($('#timer-context'), 'Minutnik nadal odlicza parzenie: ' + tea.name + '.')
  document.title =
    timer.status === 'running'
      ? formatTime(timer.secondsLeft(Date.now())) + ' · ' + tea.name + ' — lazy-tea'
      : timer.status === 'done'
        ? 'Gotowe · ' + tea.name + ' — lazy-tea'
        : 'lazy-tea — ściąga do parzenia herbaty'
}

function setAudioUnavailable() {
  audioAvailable = false
  setText($('#audio-note'), 'Dźwięk niedostępny. Na koniec zobaczysz komunikat „Gotowe”.')
}

async function unlockAudio() {
  try {
    if (!audioContext) {
      const Audio = window.AudioContext || window.webkitAudioContext
      if (!Audio) throw new Error('Audio unavailable')
      audioContext = new Audio()
    }
    await audioContext.resume()
    if (audioContext.state !== 'running') throw new Error('Audio suspended')
    audioAvailable = true
    setText($('#audio-note'), 'Na koniec: delikatny dźwięk i komunikat.')
  } catch {
    setAudioUnavailable()
  }
}

function playAlarm() {
  if (!audioAvailable || !audioContext || audioContext.state !== 'running') {
    setAudioUnavailable()
    return
  }
  try {
    const start = audioContext.currentTime
    ;[660, 880].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()
      const at = start + index * 0.28
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0, at)
      gain.gain.linearRampToValueAtTime(0.065, at + 0.025)
      gain.gain.exponentialRampToValueAtTime(0.001, at + 0.3)
      oscillator.connect(gain)
      gain.connect(audioContext.destination)
      oscillator.start(at)
      oscillator.stop(at + 0.32)
      oscillator.onended = () => {
        oscillator.disconnect()
        gain.disconnect()
      }
    })
  } catch {
    setAudioUnavailable()
  }
}

function tick() {
  const finished = timer.update(Date.now())
  renderTimer()
  if (finished) {
    clearInterval(ticker)
    ticker = undefined
    playAlarm()
  }
}

function selectTea(id) {
  tick()
  if (id === selectedId && id === timer.teaId) return
  selectedId = id
  const tea = teaById(id)
  timer.configure(id, tea.seconds)
  closeEditor()
  renderSelection()
}

$('#tea-table').addEventListener('click', event => {
  const row = event.target.closest('[data-tea-id]')
  if (row) selectTea(row.dataset.teaId)
})
$('#tea-picker').addEventListener('click', event => {
  const button = event.target.closest('button')
  if (button) selectTea(button.dataset.teaId)
})
document.querySelectorAll('[data-volume]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-volume]').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button))
    })
    const custom = button.dataset.volume === 'custom'
    $('#custom-volume-wrap').hidden = !custom
    volume = custom ? $('#custom-volume').value : Number(button.dataset.volume)
    renderVolume()
    if (custom) $('#custom-volume').focus()
  })
})
$('#custom-volume').addEventListener('input', event => {
  volume = event.target.value
  renderVolume()
})

$('#edit-time').addEventListener('click', () => {
  const opening = $('#time-editor').hidden
  $('#time-editor').hidden = !opening
  $('#edit-time').setAttribute('aria-expanded', String(opening))
  if (opening) {
    $('#minutes').value = Math.floor(timer.durationSeconds / 60)
    $('#seconds').value = timer.durationSeconds % 60
    $('#minutes').focus()
    $('#minutes').select()
  }
})
$('#time-editor').addEventListener('submit', event => {
  event.preventDefault()
  const seconds = durationFromParts($('#minutes').value, $('#seconds').value)
  const valid = seconds !== null
  $('#time-error').hidden = valid
  $('#minutes').setAttribute('aria-invalid', String(!valid))
  $('#seconds').setAttribute('aria-invalid', String(!valid))
  if (!valid) return
  timer.configure(timer.teaId, seconds)
  closeEditor()
  renderTimer()
  $('#edit-time').focus()
})
$('#start-pause').addEventListener('click', () => {
  const wasRunning = timer.status === 'running'
  tick()
  if (wasRunning) {
    if (timer.status === 'running') timer.pause(Date.now())
    clearInterval(ticker)
    ticker = undefined
  } else {
    if (!$('#time-editor').hidden) {
      $('#time-editor').requestSubmit()
      if (!$('#time-editor').hidden) return
    }
    void unlockAudio()
    timer.start(Date.now())
    clearInterval(ticker)
    ticker = setInterval(tick, 200)
  }
  closeEditor()
  renderTimer()
})
$('#reset').addEventListener('click', () => {
  clearInterval(ticker)
  ticker = undefined
  const tea = teaById(selectedId)
  timer.reset(selectedId, timer.teaId === selectedId ? timer.durationSeconds : tea.seconds)
  closeEditor()
  renderTimer()
})
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    if (audioContext?.state === 'suspended' && timer.status === 'running')
      void audioContext.resume().catch(setAudioUnavailable)
    tick()
  }
})
window.addEventListener('pageshow', tick)
renderSelection()
renderVolume()
