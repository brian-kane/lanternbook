import { describe, expect, test } from 'vitest'
import raw from './abilityModifier.fixtures.json?raw'
import { abilityModifier } from './abilityModifier'

const THROWS = 'throws'

interface Fixture {
  name: string
  input: number
  expected: number | typeof THROWS
}

const REQUIRED_INPUTS = [1, 8, 9, 10, 11, 20, 30, 0, 31, 1.5]

function parseFixtures(text: string): Fixture[] {
  if (text.trim() === '') {
    throw new Error('fixtures file is empty')
  }
  let data: unknown
  try {
    data = JSON.parse(text)
  } catch (error) {
    throw new Error(`fixtures file is not valid JSON: ${String(error)}`)
  }
  if (!Array.isArray(data)) {
    throw new Error('fixtures file must contain a JSON array')
  }
  if (data.length === 0) {
    throw new Error('fixtures file contains an empty array')
  }
  return data.map((entry: unknown, index) => {
    if (typeof entry !== 'object' || entry === null || Array.isArray(entry)) {
      throw new Error(`fixture ${index} is not an object`)
    }
    const { name, input, expected } = entry as Record<string, unknown>
    if (typeof name !== 'string' || name === '') {
      throw new Error(`fixture ${index} needs a non-empty string "name"`)
    }
    if (typeof input !== 'number') {
      throw new Error(`fixture ${index} (${name}) needs a number "input"`)
    }
    if (typeof expected !== 'number' && expected !== THROWS) {
      throw new Error(`fixture ${index} (${name}) needs "expected" to be a number or "${THROWS}"`)
    }
    return { name, input, expected }
  })
}

let fixtures: Fixture[] = []
let loadError: Error | undefined
try {
  fixtures = parseFixtures(raw)
} catch (error) {
  loadError = error as Error
}

describe('abilityModifier fixtures file', () => {
  test('is a non-empty array of objects with name, input and expected', () => {
    expect(loadError?.message).toBeUndefined()
  })

  test.each(REQUIRED_INPUTS)('contains required input %s', (input) => {
    const inputs = fixtures.map((fixture) => fixture.input)
    expect(inputs, `required input ${input} is missing from the fixtures file`).toContain(input)
  })
})

describe('abilityModifier', () => {
  test.each(fixtures)('$name', ({ input, expected }) => {
    if (expected === THROWS) {
      expect(() => abilityModifier(input)).toThrow()
    } else {
      expect(abilityModifier(input)).toBe(expected)
    }
  })

  // NaN cannot be written in JSON, so it is covered here instead of in the fixtures file.
  test('throws on NaN', () => {
    expect(() => abilityModifier(Number.NaN)).toThrow()
  })
})
