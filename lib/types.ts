export type IssueFrontmatter = {
  title: string;
  season: number;
  week: string; // display label, e.g. "Preseason", "Week 1", "Championship"
  date: string; // ISO date, used for sorting
  subtitle?: string;
  description: string;
  byline?: string;
  tags?: string[];
  published: boolean;
  placeholder?: boolean;
};

export type Issue = {
  frontmatter: IssueFrontmatter;
  slug: string;
  season: number;
  content: string;
};

export type Owner = {
  slug: string;
  ownerName: string;
  teamName: string;
  // Internal editorial context only — for writing issues, not for public
  // rendering. Do not pass these fields into components that render the
  // public site; The League page shows only slug/ownerName/teamName plus a
  // derived championship count.
  pcmCrew: boolean;
  founding: boolean;
  facts: string[];
};

export type Champion = {
  year: number;
  champion: string;
  championSlug: string; // matches Owner.slug — used to link this record to the owner regardless of display-name formatting
  runnerUp: string;
  note?: string;
  // Optional historical snapshot of the champion's team name at the time
  // they won — NOT derived from Owner.teamName, which only reflects the
  // CURRENT name and can change season to season. Only set this when we
  // actually know what the team was called that year; leave it undefined
  // rather than guessing for older records. The Reigning Champion feature
  // on the Champions page prefers this field so it keeps reading correctly
  // even after the owner renames their team in a later season.
  teamNameAtTime?: string;
};

export type RankingSlot = {
  ownerSlug: string; // permanent identity — matches Owner.slug, used to track the same person across periods and calculate movement
  // Snapshot of the team name as it was displayed during THIS ranking
  // period. Owner.teamName only reflects the CURRENT name, so historical
  // periods must carry their own copy here rather than resolving it live —
  // otherwise a rename would silently rewrite past rankings.
  teamName: string;
  note?: string; // short editorial blurb explaining the ranking decision
};

export type RankingPeriod = {
  season: number;
  period: string; // machine id, e.g. "preseason", "week-1"
  label: string; // display label, e.g. "Preseason", "Week 1"
  date: string; // ISO published date
  order: number; // chronological order within the season (preseason = 0, week 1 = 1, ...)
  rankings: RankingSlot[]; // ordered — rank is derived from position (index + 1)
};

export type Receipt = {
  id: string; // stable identifier — future updates should amend the matching entry, not add a new one
  placeholder: boolean;
  quote: string; // the take itself — a direct quote, or a factual summary when isQuote is false
  isQuote?: boolean; // false = quote is a factual statement (e.g. a transaction), rendered without quotation marks. Defaults to true.
  owner?: string;
  date?: string; // when the take/transaction originally happened
  updateLabel?: string; // label for the secondary date line, e.g. "Outcome" or "Latest update"
  updateDate?: string; // the date/period tied to updateLabel, e.g. "2026 Week 1"
  context?: string;
  outcome?: string;
  status?: string; // short standing line, e.g. "Open — dynasty return still developing."
  links?: { label: string; href: string }[]; // related issues/pages this receipt ties back to
};

export type HallOfShameEntry = {
  id: string;
  title: string;
  owner?: string;
  date?: string;
  description: string;
};
