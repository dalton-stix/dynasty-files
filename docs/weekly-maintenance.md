# The Dynasty Files: weekly maintenance

This guide preserves the existing publication and deployment workflow. It is based on the published 2026 preseason and Week 1 issues, the current repository, and the live league settings checked September 21, 2026. Follow newer explicit instructions from Dalton when they change this workflow.

## Project and sources

- Site: https://dynasty-files.vercel.app/
- Repository: https://github.com/dalton-stix/dynasty-files
- Production branch: `main`; existing Vercel project: `stix-marketing-advisors/dynasty-files`.
- 2026 Sleeper league ID: `1386354593331437568`. Reconfirm the league ID when a new season starts.
- Voice references: `content/issues/2026/preseason.mdx` and `content/issues/2026/week-1.mdx`, then each subsequent published issue.
- Permanent owner identities and background: `data/owners.ts`. Owner facts are internal editorial context; do not expose those fields as public profile copy.
- Championship history: `data/champions.ts`. Preserve historical team-name snapshots.
- This remains a static editorial site. Fetching public data for reporting does not require adding a live Sleeper integration to the site.

## Inputs and readiness

At the beginning of an update, establish the season/week, publication date, data cutoff in America/Chicago, and what Dalton wants covered. Read the latest published issue and its predictions before writing the next one.

On each Wednesday run, gather the week's evidence autonomously. Dalton does not need to send a new message, upload scores or prompt the task again. Identify the latest completed, unpublished week from the league's season and last-scored leg, the actual weekly matchups, and the published archive. Pull scores, historical starters, standings, transactions, FAAB, player identities and pick ownership directly from Sleeper's public API. If a fetch method fails, try another supported read-only method; Node fetch has worked in this environment. Do not mistake an unavailable web-fetch method for unavailable league data.

Use Dalton's messages, screenshots, media and desired storylines as additional context. Attempt to read current league chat through an existing authorized Sleeper browser session. Missing fresh chat or new user-supplied material alone does not block publication: state briefly that fresh chat could not be verified and write from the evidence available. Never invent quotes or represent old chatter as new. Research current injuries as described below.

If a core result remains unavailable, unfinished or materially inconsistent after retrieval attempts, preserve the prepared work and identify the specific missing fact or failed check. Do not report "no new inputs" without checking the live sources. A complete verified edition should proceed through all page updates, checks and deployment under the existing authorization.

Useful input checklist (partial inputs are welcome):

- Season/week and any timing or publishing constraint.
- Final scores/lineups for all six matchups and current standings.
- Trades, waivers/FAAB bids, pick transfers, or a request to verify public data.
- Actual chat quotes/screenshots and context for this week's running jokes.
- Specific stories, corrections, predictions, or supplied images to include.

If a required result is unfinished or a material claim conflicts with the sources, resolve it before publication. Clearly separate a draft from a complete issue. Keep raw chat captures, private screenshots, credentials, and reporting scratch files outside the public repository; publish only the selected material intended for the newsletter.

## Voice and continuity

The brand is **The Dynasty Files**. The tagline is **Same league. New receipts.** The byline is **Dalton Speers**.

Write in Dalton's first person. Use familiar, sharp friend-group banter, short conversational paragraphs, specific evidence, and well-timed punch lines. Occasional profanity fits the existing voice. Roast Dalton's team and failed predictions as readily as anyone else's. Cover every matchup without forcing every owner into the same joke or manufacturing controversy.

Dalton's September 23 editorial direction: lead with the biggest league-wide story and give all 12 teams balanced attention. Keep his team's self-roasts brief; his voice is the narrator, but his team should not dominate the headline, opening, receipts and closing by default.

Rankings and predictions can be confident opinions; label them accordingly. Keep receipts when the author is wrong. Use the archive for callbacks rather than inventing conversations, motives, injuries, league rules, or historical events. Let current results drive the story instead of repeating every running joke every week.

Existing callbacks include Joel's scoring revolution, Kyle's 2019 Baker Mayfield startup pick, Hutch's close-game luck, Matt's elaborate trades, JP's process, Sam's rebuild, and the writer's preseason ranking of himself third and Joel seventh. Check the relevant issue before using a numerical or historical claim. Reigning champions, rosters, picks, and streaks change; old copy is not proof of their current state.

## Recurring issue structure

Preserve the published Week 1 structure as the working baseline. Headings can adapt to the week's story; do not silently drop a recurring section or fill it with invented material.

1. Headline, short deck, season/week, byline, and date.
2. Opening essay / state of the league, built around the strongest story.
3. **From the Chat: [headline]** — actual attributed messages and optional supplied media. If fresh chat cannot be verified, say so briefly; proceed with the sourced issue without inventing chatter.
4. **The Damage** — all six results, both scores, and winning margins.
5. Six matchup recaps with distinct story-led headings.
6. **Where Everybody Stands** — records, points for/against, and FAAB with an explicit cutoff.
7. **Week N Power Rankings** — all 12 owners, rationale, and movement from the previous published period. Rank current team strength, not just standings or long-term dynasty value.
8. **The Wire: [headline]** — completed trades and waiver activity, bids, and reporting windows. A quiet week is a valid report.
9. **Receipts Worth Keeping** — notable calls, bad beats, schedule luck, and carefully qualified lineup/bench facts.
10. **Week N+1: [headline]** — all six upcoming matchups and explicit editorial picks.
11. **Final Thoughts** — short closing with callbacks.
12. Reporting/source notes, including data timing and limitations.

As checked September 21, 2026, the league has 12 teams, six playoff places, playoffs starting Week 15, a $100 waiver budget, and no league-median matchup. Recheck settings before using them later. A prior assistant mentioned playoff odds around Week 8, but no primary editorial instruction established that cadence; do not invent odds or treat that timing as settled.

## Reporting checks

Public league API base: `https://api.sleeper.app/v1/league/1386354593331437568`.

- League metadata/settings: the base endpoint.
- Owner mapping: `/users` and `/rosters`; reconcile IDs with the owner directory.
- Scores and starters: `/matchups/{week}`. Use that week's starters, not today's roster starters, to reconstruct a prior result.
- Standings and remaining FAAB: `/rosters`; label when pulled. Current totals cannot substitute for an older week's snapshot.
- Moves: `/transactions/{week}`. Filter completion timestamps to the stated America/Chicago reporting window; endpoint week alone is insufficient. Failed bids are not acquisitions or spending.
- Future picks: `/traded_picks`. Existing holdings are not necessarily new trades this week.
- Player IDs: `https://api.sleeper.app/v1/players/nfl`; refresh when needed.
- Season/week context: `https://api.sleeper.app/v1/state/nfl`, corroborated with the target league and actual completed games.

Check score sums, margins, record totals, standings ordering, all 12 ranking identities, ranking movement, and upcoming pairings. Keep facts separate from editorial interpretation. Current taxi/IR eligibility does not prove historical eligibility. Bench totals may include incompatible positions and taxi/IR players; never describe the sum as a legal alternative lineup. Qualify hindsight substitutions.

Use real chat messages supplied by Dalton or directly observed in an authorized league-chat session; the public Sleeper endpoints above do not prove chat content. Attribute quotes exactly. Do not infer injury causes, private intentions, or unobserved messages from low scores.

### NFL injuries and their effect on this league

Starting with the next edition after Week 2, follow Dalton's September 29 request to research major NFL injuries as part of preparing each issue. Refresh the research close to publication; do not carry last week's status or an early-week rumor forward as current fact.

- Search current official NFL/team injury reports, team announcements and credible reporting. Cite the supporting article or report and record its date and the reporting cutoff. Distinguish a confirmed injury or roster designation from an uncertain diagnosis, practice status or reported recovery estimate. If a return timetable is unknown, say so.
- Scan all 12 current Sleeper rosters and map affected players to owner identities. Consider injuries to relevant NFL teammates even when the injured player is unrostered, such as a quarterback injury affecting an owned receiver. Include backups and teammates whose opportunities may change, and verify whether they are owned, on taxi/IR or available before discussing roster depth, waiver options or trade implications.
- Explain the actual effect on our league: who loses a starter, who has a plausible replacement, which owners may benefit from increased opportunity, and any meaningful effect on upcoming matchups, power rankings or dynasty outlook. Label these judgments as analysis; do not invent a guaranteed role, return date, medical prognosis or precise fantasy impact.
- Distinguish an injury that affected the completed week's game from news that changes the following week's outlook. An injury does not prove why a player scored poorly without supporting evidence.
- Give material developments a concise injury section, or integrate them clearly into the affected matchup recaps, rankings, wire and upcoming picks. Cover the league broadly, not primarily Dalton's roster. If the current research finds no major league-relevant developments, keep the note brief rather than forcing a story.

## Edit the site

1. Check the working tree, branch, and remote. Preserve unrelated changes. Fetch/check `origin/main` before editing; resolve divergence without destructive resets or force pushes.
2. Read `AGENTS.md` and applicable installed Next.js documentation before code changes.
3. Add `content/issues/<season>/week-<n>.mdx` with the existing frontmatter schema. Start with `published: false` as an actual YAML boolean. Quote dates as `"YYYY-MM-DD"`; `season` is a number. The directory season must match frontmatter. The final issue gets `published: true` only after its content is ready. Do not push a private draft to this public repository.
4. Use the existing Markdown, `PullQuote`, `StatGrid`, `Stat`, and `Figure` components. Verify supplied image paths and alt text.
5. Add the matching `RankingPeriod` to `data/rankings.ts`: unique `season`/`period`, correct `label`/`date`, next chronological `order`, and all 12 owner slugs exactly once. Snapshot each current team name. Movement is computed from the preceding period; do not store separate movement numbers.
6. Keep article rankings and the rankings page in the same order. Add/update receipts by stable ID and shame entries only when this week's evidence warrants them. Update current owner names only when verified; do not rewrite old names in historical issues, rankings, or champions.
7. Preserve old issues, scores, predictions, and permanent URLs. Correct genuine factual mistakes transparently rather than erasing the record. Keep the established visual design unless a change is requested or a verified defect needs repair.

Issue loading is cached for the running process. Restart the local server after changing issue files if the preview still shows old content. Homepage ordering uses publication date; verify the intended issue is actually latest.

## Verify before publishing

Run from the repository root:

```sh
npm test
npm run lint
npm run build
npm run start
```

Use an available local port if another server already owns the default. Inspect the rendered production build at desktop and mobile sizes. Check:

- Homepage latest issue, complete article, byline/date, tables, images, and source links.
- New permanent issue URL, archive entry, and previous-issue navigation.
- All navigation pages: archive, league, champions, power rankings, receipts, and hall of shame.
- Ranking period selection, movement, names, and consistency with the article.
- Mobile navigation/table scrolling, readable copy, keyboard links, and absence of page-wide horizontal overflow.
- Drafts remain unavailable from homepage, archive, and direct issue URLs.
- Console/runtime errors and broken internal links or image paths.

Review the final diff for accidental deletions, raw/private material, unrelated changes, unfinished placeholders, and factual drift. A successful build does not establish that the rendered article or deployment is correct.

## Publish and verify deployment

Dalton's maintenance request authorizes preparing and deploying completed, verified weekly updates through the existing setup. Honor any later preview-only or review-first instruction. Missing content, failed checks, or uncertain material facts require resolution; do not create a new approval step for every routine authorized update.

Commit only the intended files with a clear description, then push to the existing `main` branch. Do not create a replacement hosting project, change domains, rotate credentials, or force-push history as part of a weekly issue.

Vercel deploys from the GitHub integration. Check the exact pushed commit's Vercel status and deployment, then load the public site and new issue URL. Confirm the expected title/date, archive, rankings, and changed links. Record the issue URL, commit SHA, checks run, and any remaining limitations in the maintenance conversation. Never report "live" based solely on a local build or push.

For a failed deployment, inspect the build error and fix/redeploy. If a deployed maintenance commit breaks production, restore service through a reviewed Git revert of that specific commit or the existing Vercel rollback, verify the public result, and report what happened. Preserve unrelated newer commits and never use a destructive history reset.

## Recurring runs

The existing automation runs Wednesdays at 9:00 a.m. America/Chicago. Each run must read this guide and the latest published issue, fetch current Sleeper evidence and identify the next completed unpublished week without waiting for a new user message. Complete the newsletter, homepage/archive update, power rankings, warranted receipts/Hall of Shame changes, verification and deployment in the scheduled run. Recheck the archive before publishing to avoid duplicate issues. If the latest completed week is already published or there is no completed regular-season week to cover, no new issue is needed. This local workflow requires the computer to be on and the app running.

Notify Dalton when an update is complete, a check or deployment fails, or a specific input/action is needed. Stay quiet when nothing actionable has changed and the same missing-input request is already outstanding. Do not send league messages, emails, or other outreach as part of website maintenance.
