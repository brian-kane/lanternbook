# lanternbook

> Can an engineer build and maintain small personal software with an AI agent, understanding every part of it, while the people it's built for use it, and even extend it, safely without needing to understand it?
> Requested changes can't break the core and can be reverted in one step.

— from [docs/VISION.md](docs/VISION.md)

## Status

No app code yet. The repo holds founding documents only.

## Documents

- [docs/VISION.md](docs/VISION.md): guiding question, audiences, principles
- [docs/ARCHITECTURE-DECISION.md](docs/ARCHITECTURE-DECISION.md): rules and data (draft)
- [docs/CONTENT-POLICY.md](docs/CONTENT-POLICY.md): what may and may not be committed
- [CLAUDE.md](CLAUDE.md): working rules for the AI agent

## Glossary

- **Slice**: a thin vertical increment of functionality that cuts through every layer (UI, logic, storage) and is usable end to end on its own.
- **Walking skeleton**: the smallest end-to-end implementation of the system that can be built, tested and run, connecting all the main components before any of them is fleshed out.
- **Spike**: a short, time-boxed experiment to answer a technical question or reduce risk; its code is thrown away and its finding is what is kept.
- **Definition of done**: an agreed checklist of conditions every change must meet before it counts as complete.
- **ADR**: Architecture Decision Record; a short document recording one significant decision, its context and its consequences.
- **Golden-file test**: a test that compares output against a stored, human-reviewed expected output (the golden file); any difference fails the test.
- **Fault injection** (we call it a **planted failure**): deliberately introducing a fault to confirm that a check detects it, then removing the fault.
- **Pull-request workflow**: every change is made on a branch and proposed as a pull request, which is reviewed before it is merged into the main branch.
- **Strangler fig**: a migration pattern in which new code gradually replaces parts of an existing system behind a stable interface until the old system can be removed.
- **Local-first**: software whose primary copy of the data lives on the user's own device, so it works offline and does not depend on a server.
