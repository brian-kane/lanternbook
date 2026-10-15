# Documentation Policy: Where Information Lives
Status: Accepted
Date: 2026-10-14

## Principle
- Each fact has exactly one home. Other places link to it and never copy it.
- Facts that must outlive a review are promoted from PR text, issue discussion or agent reports into a commit message, a document or a decision record.

## Context
- This repo merges pull requests by rebase, so each commit on a branch lands on main as written.
- Commit messages therefore enter git history; the PR description never does.
- A fact left only in a PR description, an issue or an agent report is lost to anyone reading the code through `git log` or `git blame`.

## Homes
| Home | Answers | Lifetime | Rule of thumb |
| --- | --- | --- | --- |
| Code and tests | What and how | As long as the code | The executable spec. |
| Code comments | Why something is non-obvious | As long as the line | Never say what the next line does. |
| Commit message | Why the change was made, and what changed at a high level | Permanent; tied to lines by `git blame` | Format is in [CLAUDE.md](../CLAUDE.md). |
| Decision record | Why X was chosen over Y | Permanent | The body is never edited; a changed decision gets a new record. Only the Status line may change, with a pointer to the replacing record when there is one. |
| README and docs/ | The current truth | Until the code changes | docs/ holds two kinds of file. Current-truth documents change in the same commit as the code. Decision records, identified by a Status line at the top, follow the decision-record rule instead. |
| Issue | The work wanted: intent and acceptance criteria | Until closed | Promote anything still true after closing. |
| PR description | Context for the reviewer of this change: what, why, how it was tested, where to look | One review; not in git history | Short; link instead of copying. |
| Agent report | Evidence for one review | One review | Summarised into the PR description. |
| Wiki | Nothing that must stay true to the code | Not versioned | Not used for anything that must stay true to the code, because it does not version with the code. |

## Enforcement
- Added by this change: `.github/pull_request_template.md`, which offers the sections Summary, Verified, Not verified, Review focus and Links for a new PR description. It is the only mechanism this change adds. It prompts; it does not check that any section is filled in. Whether GitHub fills it in has not been verified yet.
- Written rules with no check yet: the commit-message format and "docs ship in the same commit as the change they describe", both in [CLAUDE.md](../CLAUDE.md). They are followed by convention, and the author reads `git log` to confirm them.
- Convention only: the one-home principle itself. Nothing detects a copied fact.
- Not recorded in the repo: the rebase-merge setting. It lives in the hosting service's repository settings, and nothing here checks it.
- Not built: a commit-message format check, a check that docs change in the same commit as the code they describe, and a script that generates the PR description's links.

## Revisit triggers
Reconsider this decision if: the repo moves to squash merges, or gains a second contributor.
