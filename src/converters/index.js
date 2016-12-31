/**
 * credit: https://github.com/Qix-/color-convert
 */

export function rgbToHsv(rgb) {
  var r = rgb[0]
  var g = rgb[1]
  var b = rgb[2]
  var min = Math.min(r, g, b)
  var max = Math.max(r, g, b)
  var delta = max - min
  var h
  var s
  var v

  if (max === 0) {
    s = 0
  } else {
    s = (delta / max * 1000) / 10
  }

  if (max === min) {
    h = 0
  } else if (r === max) {
    h = (g - b) / delta
  } else if (g === max) {
    h = 2 + (b - r) / delta
  } else if (b === max) {
    h = 4 + (r - g) / delta
  }

  h = Math.min(h * 60, 360)

  if (h < 0) {
    h += 360
  }

  v = ((max / 255) * 1000) / 10

  return [h, s, v]
}

export function hsvToRgb(hsv) {
  var h = hsv[0] / 60
  var s = hsv[1] / 100
  var v = hsv[2] / 100
  var hi = Math.floor(h) % 6

  var f = h - Math.floor(h)
  var p = 255 * v * (1 - s)
  var q = 255 * v * (1 - (s * f))
  var t = 255 * v * (1 - (s * (1 - f)))
  v *= 255

  switch (hi) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, v]
    case 5:
      return [v, p, q]
  }
}

export function rgbToHex(args) {
  var integer = ((Math.round(args[0]) & 0xFF) << 16)
    + ((Math.round(args[1]) & 0xFF) << 8)
    + (Math.round(args[2]) & 0xFF)

  var string = integer.toString(16).toUpperCase()
  return '000000'.substring(string.length) + string
}

export function hexToRgb(args) {
  var match = args.toString(16).match(/[a-f0-9]{6}/i)
  if (!match) {
    return [0, 0, 0]
  }

  var integer = parseInt(match[0], 16)
  var r = (integer >> 16) & 0xFF
  var g = (integer >> 8) & 0xFF
  var b = integer & 0xFF

  return [r, g, b]
}
