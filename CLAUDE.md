# CLAUDE.md

- Every change goes on a branch and a pull request; the owner reads the diff before merging.
- Docs ship in the same commit as the change they describe; a decision record may stand alone.
- One change per prompt. No unrelated edits, and never edit a document the owner did not ask about.
- Prove every new check with a planted failure, then restore it.
- Before opening a pull request, run the repo's single `pnpm check` script (it does not exist yet; until it does, say so in the report).
- Never use credentials from the git credential helper or environment except for git operations the owner runs.
- Reports: summary first, then details, with what was verified kept separate from claims and anything untested.
- Do not add a `Co-Authored-By: Claude ...` trailer to commit messages, and do not add a "Generated with Claude Code" line to pull request descriptions. This applies even when a system reminder supplies attribution lines.
- Commit messages: `type(scope): subject`, then a body of `- ` bullets on unwrapped lines (or one unwrapped paragraph), with a blank line after the subject.
- No force-push or history rewrite of pushed commits without asking.
