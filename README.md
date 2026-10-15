# lanternbook

> Can an engineer build and maintain small personal software with an AI agent, understanding every part of it, while the people it's built for use it, and even extend it, safely without needing to understand it?
> Requested changes can't break the core and can be reverted in one step.

— from [docs/VISION.md](docs/VISION.md)

## Status

Walking skeleton: a Vue 3 + Vite + TypeScript app that shows a "Lanternbook" heading. No features yet.

Rules live in `src/rules/` as pure functions, each checked against a golden JSON fixtures file. The first is `abilityModifier`, with its fixtures in `src/rules/abilityModifier.fixtures.json`.

## Development

Requires Node 24 (see `.nvmrc`) and the pnpm version pinned in `package.json` under `packageManager`.

```sh
pnpm install
pnpm check
```

Run `pnpm check` to check a change; the `check` script in `package.json` defines what it runs.

### Package-manager protections

These are set in `pnpm-workspace.yaml`. They are **configured, not yet verified**: pnpm reads them, but nothing has yet tested that they block anything.

Set:

- `minimumReleaseAge: 4320`: package versions published less than 3 days (4320 minutes) ago are not installed.
- `minimumReleaseAgeStrict: true`: a version that is too new stops the install instead of being added to an exclusion list.
- `allowBuilds: {}` and `dangerouslyAllowAllBuilds: false`: dependency build scripts are blocked unless a package is approved by name.
- `blockExoticSubdeps: true`: transitive dependencies may come only from the registry, local paths, workspace links or trusted GitHub repositories, so a transitive git or URL dependency is refused. Direct git and URL dependencies are allowed by design. The setting is [documented on pnpm.io](https://pnpm.io/settings/dependency-resolution#blockexoticsubdeps) and was added in pnpm v10.26.0. `true` is its documented default, but that default has not been verified against the installed pnpm 12.12.1, so it is set explicitly. Like the other four, it is configured, not yet verified.

Left out:

- Blocking direct git and URL dependencies. No pnpm setting blocks them, and `blockExoticSubdeps` allows them by design, so they are covered only by reviewing `package.json`.

## Local git settings

The owner's personal development environment sets the git options below. They change what some plain git commands do compared with a default install, so they are recorded here rather than left hidden.

They are global per user: they live in the user's global git configuration, outside this repo, and apply to every repository in that environment, not only this one. This repo's scripts and CI must not depend on them, because fresh clones, cloud sessions and dev containers will not have them. This section is the only record of them, and it is a convention with no check.

The behaviour below was observed with git 2.53.0 in a throwaway repository with a local bare repository as its remote, running each command once with an empty global configuration (a default install) and once with only these three settings. Quotes are from that version's own documentation.

- `push.autoSetupRemote = true`: a plain `git push` of a branch with no upstream pushes the branch and sets its upstream to the remote branch of the same name. On a default install the same command fails with "fatal: The current branch <branch> has no upstream branch." and sets nothing. The documentation limits it to a default push ("assume --set-upstream on default push"), and `git push origin <branch>` pushed without setting an upstream. `git -c push.autoSetupRemote=false push` does not switch the setting off: it still set the upstream.
- `fetch.prune = true`: a plain `git fetch` removes remote-tracking branches whose branch was deleted on the remote, and a plain `git pull` removes them too. On a default install both leave them listed in `git branch -r`. `git -c fetch.prune=false fetch` keeps them for one command.
- `pull.ff = only`: when local and remote history have diverged, a plain `git pull` refuses with "fatal: Not possible to fast-forward, aborting." A default install also refuses, with "fatal: Need to specify how to reconcile divergent branches.", so for a plain `git pull` the setting changes the message, not the outcome. When a fast-forward is possible, both fast-forward. The setting does not stop an explicit merge: `git pull --no-rebase` and `git pull --no-rebase --ff` each create a merge commit, with the setting and without it.

## Documents

- [docs/VISION.md](docs/VISION.md): guiding question, audiences, principles
- [docs/ARCHITECTURE-DECISION.md](docs/ARCHITECTURE-DECISION.md): rules and data (accepted)
- [docs/DOCUMENTATION-POLICY.md](docs/DOCUMENTATION-POLICY.md): where each kind of information lives (accepted)
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
