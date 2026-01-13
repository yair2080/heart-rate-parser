# Heart Rate Parser

This project extracts numeric HeartRate values from a log string while ignoring invalid entries.

## Example

**Input:**
```
LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL
```

**Output:**
```
[72, 85]
```

## Installation

Make sure you have **Node.js** or **Bun** installed.

### Using Node.js

1. Install dependencies:
```
npm install
```

2. Run the script:
```
npm run node
```

### Using Bun

1. Run the script directly:
```
bun run src/index.ts
```

## Project Structure

```
heart-rate-parser/
├─ package.json
├─ tsconfig.json
├─ README.md
└─ src/
   ├─ extractHeartRate.ts
   └─ index.ts
```

## Author

Raphael
