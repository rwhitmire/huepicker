import { parseInput } from '../index'

test('parse color', () => {
  const result = parseInput('red')
  expect(result).toEqual([255, 0, 0])
})

test('parse invalid color', () => {
  const result = parseInput('foofoo')
  expect(result).toBeNull()
})
