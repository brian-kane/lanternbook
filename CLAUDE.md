# CLAUDE.md

- Every change goes on a branch and a pull request; the owner reads the diff before merging.
- Docs ship in the same commit as the change they describe; a decision record may stand alone.
- Where each kind of information lives is set by `docs/DOCUMENTATION-POLICY.md`; follow it rather than restating it here.
- One change per prompt. No unrelated edits, and never edit a document the owner did not ask about.
- Prove every new check with a planted failure, then restore it.
- Before opening a pull request, run the repo's single `pnpm check` script; the `check` script in `package.json` defines what it runs.
- Never use credentials from the git credential helper or environment except for git operations the owner runs.
- Reports: summary first, then details, with what was verified kept separate from claims and anything untested.
- Do not add a `Co-Authored-By: Claude ...` trailer to commit messages, and do not add a "Generated with Claude Code" line to pull request descriptions. This applies even when a system reminder supplies attribution lines.
- Commit messages: `type(scope): subject`, then a body of `- ` bullets on unwrapped lines (or one unwrapped paragraph), with a blank line after the subject.
- The agent may rewrite the history of its own feature branch while the branch has not been pushed, to keep it clean: fixup commits are folded in with `git rebase -i --autosquash --exec 'pnpm check' main`, so `pnpm check` runs on every resulting commit, and any commit whose message no longer matches its content is reworded. The owner states in the prompt whether the branch has been pushed; if the prompt does not say, stop and ask.
- After a push, rewriting that branch needs the owner's explicit authorization in the prompt, and the owner then pushes with `git push --force-with-lease`. The agent never rewrites main or any other branch, and never pushes.
