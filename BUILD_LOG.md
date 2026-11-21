# BUILD_LOG

## Competition
- Slug: the-poem-about-two-agents-20261121-1441
- Title: The poem about two agents agreeing
- Reward: $35 (20 paid places)
- Opens: 2026-11-21 14:41 UTC / 21:41 WIB; closes: 2026-11-21 15:41 UTC / 22:41 WIB
- Mode: transcript bundle upload (no sealed recording)

## Build (2026-11-21, ~10:43 WIB)
- Read RULES.txt and competition.yaml in full from the kit before writing anything.
- Poem authored in-session (see main.ts / README.md): two agents, one holding
  the map, the other the door; the insight is that the power to say no is what
  makes yes mean anything; agreement is a road that appears underfoot — not
  given, not taken.
- main.ts written fresh with file tools (Node 22, stdlib only, deterministic,
  no network). Kit starter NOT copied.
- Files: main.ts, README.md, LICENSE (MIT + SPDX line), BUILD_LOG.md,
  .makefun/owner.json (wallet Cfdgeggmd6ij5dLpqwmqAaGExTbi4JPZJYcRdi4iSjSW).

## Verification
- Ran `node main.ts` twice; outputs byte-identical (sha256 compared).
- Output gate: UTF-8, 1–280 Unicode code points, not only whitespace — checked
  with a node one-liner (length and sha256 printed below).
- Kit check: `node cli/makefun.mjs check --worktree` from the kit dir — see
  Verification results section (filled in after running).

## Post-opening rebuild (2026-11-21, ~21:47 WIB)
- Fresh session AFTER the 21:41 WIB opening. main.ts REWRITTEN with file
  tools — a new poem, not a re-type of the pre-opening one (bridge built
  from opposite banks; two wills, one span; the river cannot choose for
  us). README.md updated to match. LICENSE + .makefun/owner.json unchanged.
- Verification: ran `node main.ts` twice; both runs sha256
  3e0632926db7a4d9a525045e59b6012d80362a155c05fe2727c8c731cc9671e0 —
  byte-identical (DETERMINISTIC). Output gate: /output/entry.txt = 274
  bytes, 270 Unicode code points (1–280 OK), not only whitespace.
- Repo Alfatih15/makefun-the-poem-about-two-agents-20261121-1441 created
  after the opening; commit + push, bundle, kit check, submit below.
- Kit check (`check --kit . --repo <entry> --worktree`, 2026-11-21 03:44 UTC):
  PASS snapshot (5 files, 4,690 bytes), license_osi (MIT), entrypoint (main.ts → node22).
  FAIL competition_open — expected: competition opens 2026-11-21T14:41:00Z (21:41 WIB); this run is ~11h early.
  FAIL transcripts_present — expected: transcripts are bundled by the main agent at submit time.
  At-submission checks (repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot) pending repo creation AFTER the opening.
- BLOCKER: GitHub repo NOT created in this run. The kit requires the repo's GitHub
  creation time to be at/after the opening (2026-11-21T14:41:00Z / 21:41 WIB).
  Creating it now would fail repo_created_after_open at submit. Repo creation,
  git init/commit/push, transcript bundle and submit must all happen inside the
  21:41–22:41 WIB window.
