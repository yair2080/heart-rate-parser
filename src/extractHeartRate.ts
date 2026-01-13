export function extractHeartRates(input: string): number[] {
  const regex = /HeartRate\s*=\s*([0-9]+)/gi
  const result: number[] = []

  let match
  while ((match = regex.exec(input)) !== null) {
    result.push(Number(match[1]))
  }

  return result
}
