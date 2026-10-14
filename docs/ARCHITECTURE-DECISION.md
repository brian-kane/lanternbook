# Architecture Decision: Rules and Data
Status: Accepted
Date: 2026-10-14

## Rules
- Rules are pure TypeScript functions with no UI or storage inside them.
- Each rule is checked against golden JSON fixtures (input state plus expected output) that a human has reviewed.
- Each rule has exactly one home in the codebase.

## Persistence
- Local-first: data lives in browser storage behind a storage interface, so another backend can be added later.
- No server and no accounts. Export and import to a file is planned, not built.

## Revisit triggers
Reconsider this decision if: the same character is used on two devices, players need to see each other's characters, or money becomes involved (hosting costs, payments).
