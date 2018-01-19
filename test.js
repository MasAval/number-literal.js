import test from 'ava'
import { numberToText } from './index'

test('numberToText', t => {
  t.is(numberToText("0"), 'Cero')
  t.is(numberToText("15,26"), 'Quince coma Veintiseis')
  t.is(numberToText("125400"), 'Ciento Veinticinco mil Cuatrocientos')
  t.is(numberToText("56894230"), 'Cincuenta y Seis Millones Ochocientos Noventa y Cuatro mil Doscientos Treinta')
  t.is(numberToText("12"), 'Doce')
  t.is(numberToText("695"), 'Seiscientos Noventa y Cinco')
  t.is(numberToText("12366"), 'Doce mil Trescientos Sesenta y Seis')
  t.is(numberToText("1000200"), 'Un Millón Doscientos')
  t.is(numberToText("850000000"), 'Ochocientos Cincuenta Millones')
})
