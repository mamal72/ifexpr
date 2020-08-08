// tslint:disable:no-expression-statement
import test from 'ava'
import { ifexpr } from './ifexpr'

test('value as return type', (t) => {
  t.is(ifexpr(true, true, false), true)
  t.is(ifexpr(false, true, false), false)

  t.is(ifexpr<number>(true, 1, 0), 1)
  t.is(ifexpr<string>(true, 'yes', 'no'), 'yes')
})

test('function as return type', (t) => {
  t.is(
    ifexpr(
      true,
      () => true,
      () => false
    ),
    true
  )
  t.is(
    ifexpr(
      false,
      () => true,
      () => false
    ),
    false
  )
  t.is(
    ifexpr(
      true,
      () => 'yes',
      () => 'no'
    ),
    'yes'
  )
})

test('literal and function call', (t) => {
  t.is(
    ifexpr(true, 'yes', () => 'no'),
    'yes'
  )
  t.is(
    ifexpr(true, () => 'yes', 'no'),
    'yes'
  )
})

test('function as condition', (t) => {
  t.is(
    ifexpr(() => true, true, false),
    true
  )
  t.is(
    ifexpr(() => false, true, false),
    false
  )
  t.is(
    ifexpr(() => true, 'yes', 'no'),
    'yes'
  )
  t.is(
    ifexpr(
      (x: number = 1) => x === 1,
      () => 'yes',
      'no'
    ),
    'yes'
  )
})
