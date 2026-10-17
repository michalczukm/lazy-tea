export const TEAS = [
  {
    id: 'black',
    name: 'Czarna',
    temperature: '90–100',
    time: '3–5',
    seconds: 240,
    rebrew: 'Możliwe, zwykle delikatniejsze',
    tip: 'Po parzeniu wyjmij sitko lub oddziel napar od liści',
  },
  {
    id: 'earl-grey',
    name: 'Earl Grey',
    temperature: '95',
    time: '3–5',
    seconds: 240,
    rebrew: 'Możliwe, zwykle delikatniejsze',
    tip: 'Mocniejszy napar uzyskaj większą ilością liści, zamiast przedłużać parzenie',
  },
  {
    id: 'green',
    name: 'Zielona',
    temperature: '75–80',
    time: '1–3',
    seconds: 120,
    rebrew: 'Warto spróbować; dostosuj czas do smaku',
    tip: 'Gdy gorzka, spróbuj chłodniejszej wody lub krótszego czasu',
  },
  {
    id: 'white',
    name: 'Biała',
    temperature: '80–85',
    time: '3–5',
    seconds: 180,
    rebrew: 'Warto spróbować; dostosuj czas do smaku',
    tip: 'Duże liście odmierzaj wagą; łyżeczka jest mało dokładna',
  },
  {
    id: 'oolong',
    name: 'Oolong',
    temperature: '85–95',
    time: '2–4',
    seconds: 180,
    rebrew: 'Warto spróbować; dostosuj czas do smaku',
    tip: 'Zostaw liściom dużo miejsca na rozwinięcie',
  },
  {
    id: 'rooibos',
    name: 'Rooibos',
    temperature: '95–100',
    time: '5–7',
    seconds: 300,
    rebrew: 'Najlepiej zacząć od świeżej porcji',
    tip: 'Użyj drobnego sitka',
  },
]

function wholeNumber(value) {
  if (typeof value !== 'number' && typeof value !== 'string') return null
  if (String(value).trim() === '') return null
  const number = Number(value)
  return Number.isInteger(number) ? number : null
}

export function doseForVolume(value) {
  const volume = wholeNumber(value)
  return volume !== null && volume >= 1 && volume <= 10000 ? volume / 100 : null
}

export function durationFromParts(minutes, seconds) {
  const m = wholeNumber(minutes)
  const s = wholeNumber(seconds)
  if (m === null || s === null || m < 0 || m > 99 || s < 0 || s > 59) return null
  const duration = m * 60 + s
  return duration > 0 ? duration : null
}

export function formatTime(seconds) {
  const total = Math.max(0, Math.ceil(seconds))
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

export class BrewTimer {
  constructor(teaId, seconds) {
    this.reset(teaId, seconds)
  }

  configure(teaId, seconds) {
    if (this.status === 'running' || this.status === 'paused') return false
    this.reset(teaId, seconds)
    return true
  }

  reset(teaId = this.teaId, seconds = this.durationSeconds) {
    if (
      !TEAS.some(tea => tea.id === teaId) ||
      !Number.isInteger(seconds) ||
      seconds < 1 ||
      seconds > 5999
    ) {
      throw new RangeError('Invalid brew timer configuration')
    }
    this.teaId = teaId
    this.durationSeconds = seconds
    this.remainingMs = seconds * 1000
    this.deadline = null
    this.status = 'idle'
  }

  start(now) {
    if (this.status === 'running') return false
    if (this.status === 'done') this.remainingMs = this.durationSeconds * 1000
    this.deadline = now + this.remainingMs
    this.status = 'running'
    return true
  }

  pause(now) {
    if (this.status !== 'running') return false
    if (this.update(now)) return false
    this.remainingMs = Math.max(0, this.deadline - now)
    this.deadline = null
    this.status = 'paused'
    return true
  }

  update(now) {
    if (this.status !== 'running' || now < this.deadline) return false
    this.remainingMs = 0
    this.deadline = null
    this.status = 'done'
    return true
  }

  secondsLeft(now) {
    const milliseconds = this.status === 'running' ? this.deadline - now : this.remainingMs
    return Math.ceil(Math.max(0, milliseconds) / 1000)
  }
}
