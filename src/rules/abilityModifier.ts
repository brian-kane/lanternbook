export function abilityModifier(score: number): number {
  if (!Number.isInteger(score)) {
    throw new RangeError(`score must be an integer, got ${score}`)
  }
  if (score < 1 || score > 30) {
    throw new RangeError(`score must be between 1 and 30, got ${score}`)
  }
  return Math.floor((score - 10) / 2)
}
