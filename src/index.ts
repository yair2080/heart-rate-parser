import { extractHeartRates } from "./extractHeartRate"

const input =
  "LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL"

const output = extractHeartRates(input)

console.log("Extracted HeartRates:", output)
