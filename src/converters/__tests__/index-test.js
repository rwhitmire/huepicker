import {
  hsvToRgb,
  rgbToHsv,
  rgbToHex,
  hexToRgb
} from '../index'

test('rgbToHsv', () => {
  const hsv = rgbToHsv([ 255, 0, 0 ])
  expect(hsv).toEqual([ 0, 100, 100 ])
})

test('hsvToRgb', () => {
  const rgb = hsvToRgb([ 0, 100, 100 ])
  expect(rgb).toEqual([ 255, 0, 0 ])
})

test('rgbToHex', () => {
  const hex = rgbToHex([ 84, 63, 191 ])
  expect(hex).toEqual('543FBF')
})

test('hexToRgb', () => {
  const rgb = hexToRgb('543FBF')
  expect(rgb).toEqual([ 84, 63, 191 ])
})
