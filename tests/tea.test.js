import test from 'node:test'
import assert from 'node:assert/strict'
import { doseForVolume, durationFromParts, formatTime, BrewTimer } from '../public/tea.js'

test('dose scales with water and rejects invalid or incomplete volumes', () => {
  for (const [value, want] of [
    [250, 2.5],
    [350, 3.5],
    [500, 5],
    [125, 1.25],
    [1, 0.01],
  ]) {
    assert.equal(doseForVolume(value), want)
  }
  for (const value of ['', ' ', 0, -1, 1.5, 10001, NaN, Infinity, '250 ml']) {
    assert.equal(doseForVolume(value), null)
  }
})

test('edited duration rejects empty, zero, fractional and overflowing parts', () => {
  assert.equal(durationFromParts('2', '30'), 150)
  assert.equal(durationFromParts('0', '1'), 1)
  assert.equal(durationFromParts('99', '59'), 5999)
  for (const parts of [
    ['', '30'],
    ['0', '0'],
    ['1', '60'],
    ['-1', '0'],
    ['1.5', '0'],
    ['100', '0'],
  ]) {
    assert.equal(durationFromParts(...parts), null)
  }
  assert.equal(formatTime(150), '2:30')
  assert.equal(formatTime(0), '0:00')
  assert.equal(formatTime(7.1), '0:08')
})

test('pause and resume preserve milliseconds rather than rounding every pause', () => {
  const timer = new BrewTimer('green', 10)
  timer.start(1000)
  timer.pause(3500)
  assert.equal(timer.status, 'paused')
  assert.equal(timer.secondsLeft(100000), 8)
  timer.start(100000)
  assert.equal(timer.update(107499), false)
  assert.equal(timer.secondsLeft(107499), 1)
  assert.equal(timer.update(107500), true)
  assert.equal(timer.status, 'done')
})

test('a delayed tick finishes once and never produces negative time', () => {
  const timer = new BrewTimer('black', 240)
  timer.start(1000)
  assert.equal(timer.secondsLeft(121000), 120)
  assert.equal(timer.update(400000), true)
  assert.equal(timer.secondsLeft(500000), 0)
  assert.equal(timer.update(500000), false)
  assert.equal(timer.pause(500000), false)
})

test('changing the selection cannot reconfigure a running or paused brew', () => {
  const timer = new BrewTimer('green', 120)
  timer.start(0)
  assert.equal(timer.configure('black', 240), false)
  assert.equal(timer.teaId, 'green')
  timer.start(30000)
  assert.equal(timer.secondsLeft(60000), 60)
  timer.pause(60000)
  assert.equal(timer.configure('white', 180), false)
  assert.equal(timer.teaId, 'green')
  assert.equal(timer.secondsLeft(600000), 60)
})

test('reset clears a paused session and a completed brew can run again', () => {
  const timer = new BrewTimer('green', 90)
  timer.start(0)
  timer.pause(30000)
  timer.reset()
  assert.equal(timer.status, 'idle')
  assert.equal(timer.secondsLeft(999999), 90)
  timer.start(0)
  assert.equal(timer.update(90000), true)
  timer.start(100000)
  assert.equal(timer.status, 'running')
  assert.equal(timer.secondsLeft(100000), 90)
  timer.reset('rooibos', 300)
  assert.equal(timer.teaId, 'rooibos')
  assert.equal(timer.secondsLeft(999999), 300)
})

test('invalid timer configuration never starts a broken countdown', () => {
  for (const seconds of [0, -1, 1.5, NaN, Infinity, 6000]) {
    assert.throws(() => new BrewTimer('green', seconds), RangeError)
  }
  assert.throws(() => new BrewTimer('unknown', 10), RangeError)
})
