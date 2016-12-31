import colorString from 'color-string'

export function parseInput(str) {
  const rgb = colorString.get.rgb(str)

  if(rgb === null) {
    return null
  }

  return [rgb[0], rgb[1], rgb[2]]
}
