# Vision

## Guiding question
Can an engineer build and maintain small personal software with an AI agent, understanding every part of it, while the people it's built for use it, and even extend it, safely without needing to understand it?

## Two audiences
- **The builder** (an engineer) reads and understands every change. The process must be legible, reviewable and teach as it goes.
- **Everyone else** uses it and can ask for changes without learning how it works. Safety reaches them as convenience, never as advice.

## Principles
- **The right way is the lazy way.** The easiest path is the safe one.
- **Rules live in the tooling, not in anyone's memory.** Checks and guardrails are carried by the tooling and the agent.
- **Invisible by default, inspectable on demand.** Users never need the machinery; the builder can always see what happened and why.
- **A stable core plus a sandboxed extension layer with one-tap undo.** Requested changes can't break the core and can be reverted in one step.

## Constraints
Time is limited. Work comes in small, finishable slices, each usable end to end.
Non-developer extension comes after the app is in daily use by its builder.

## Non-goals for now
- A general platform. The process may become a template after a second app uses it.
