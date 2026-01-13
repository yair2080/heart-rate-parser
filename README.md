# Heart Rate Parser

Extracts valid HeartRate values from a log string.

## Example

Input:
LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL

Output:
[72, 85]

## Run

- With Bun:  
bun run src/index.ts

- With Node:  
npm run node
