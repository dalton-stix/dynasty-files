# The Dynasty Files

*Same league. New receipts.*

The weekly newsletter and site of record for our 12-team dynasty fantasy football league (Sleeper league ID `1386354593331437568`). Built with Next.js, TypeScript, and Tailwind CSS. No database, no CMS, no auth — just static content and MDX.

Live site: [dynasty-files.vercel.app](https://dynasty-files.vercel.app/). The complete editorial, verification, and publishing workflow is in [the weekly maintenance guide](docs/weekly-maintenance.md).

## Running locally

Use Node.js 24 for the maintenance checks; the regression tests use its built-in TypeScript support.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new weekly issue

1. Create a new `.mdx` file in `content/issues/<season>/`, e.g. `content/issues/2026/week-1.mdx`.
2. Add frontmatter at the top of the file:

   ```mdx
   ---
   title: "Week 1: Whatever Happened"
   season: 2026
   week: "Week 1"
   date: "2026-09-09"
   subtitle: "An optional one-line deck"
   description: "One-sentence summary for page metadata / link previews."
   byline: "Dalton Speers"
   tags: ["week-1"]
   published: true
   ---
   ```

3. Write the article below the frontmatter using Markdown. A few extra components are available inside the article:
   - `> blockquote` — a standard quote
   - `<PullQuote>Big editorial line.</PullQuote>` — a large centered pull quote
   - `<StatGrid><Stat label="Label" value="Value" /> ...</StatGrid>` — a row of stat callouts
   - Standard Markdown tables, lists, headings (`##`, `###`), bold, `---` dividers, etc. all render with the site's editorial styling.
4. Save the file. The homepage automatically shows the issue with the most recent `date` as the latest issue. The previous latest issue automatically drops into the archive.
5. Commit and push. Vercel redeploys automatically and the new issue is live at `/issues/<season>/<slug>` (slug = filename without `.mdx`).

That's the whole workflow — no CMS, no admin panel, just a new file.

## Updating league data

Everything that isn't a weekly article lives in `data/*.ts` as plain typed arrays:

- `data/owners.ts` — the 12 teams/owners on [The League](app/league/page.tsx) page
- `data/champions.ts` — championship history on [Champions](app/champions/page.tsx)
- `data/rankings.ts` — weekly power rankings (add a `RankingPeriod` with a unique season/period and the next chronological `order`; snapshot all 12 team names and keep the issue's ranking order consistent)
- `data/receipts.ts` — old takes/predictions for [Receipts](app/receipts/page.tsx) (replace the placeholder entries with real ones as they come up; set `placeholder: false`)
- `data/hallOfShame.ts` — infamous league moments

Edit the array, save, redeploy.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home — renders the latest issue in full
  issues/[season]/[slug]/  Permanent issue URLs
  archive/            All issues, grouped by season
  league/ champions/ power-rankings/ receipts/ hall-of-shame/
components/           Shared UI (Header, Footer, OwnerCard, IssueView, etc.)
components/mdx/       Components usable inside issue MDX (PullQuote, StatGrid)
content/issues/       MDX issue content, one file per issue
data/                 Typed league data (owners, champions, rankings, receipts)
lib/                  Content-loading helpers (lib/issues.ts) and shared types
```

## Deploying to Vercel

The existing repository is [dalton-stix/dynasty-files](https://github.com/dalton-stix/dynasty-files), with production on `main`. Its Vercel project is `dynasty-files` in `stix-marketing-advisors`. Keep using this integration; a new project or import is unnecessary.

Before pushing, run `npm test`, `npm run lint`, and `npm run build`, then inspect the rendered site and changed links. Push the reviewed commit to `main`, check that commit's Vercel status, and verify the public site. A successful local build or Git push alone is not deployment confirmation. See the maintenance guide for the full checklist and rollback process.

## Sleeper API

Not integrated yet by design (see the brief) — Version 1 is static/editorial content only. The data model is deliberately simple so a future integration (standings, rosters, transactions from the public Sleeper API) can be layered in without a rewrite.
