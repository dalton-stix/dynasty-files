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
  pcmCrew: boolean;
  founding: boolean;
  facts: string[];
};

export type Champion = {
  year: number;
  champion: string;
  runnerUp: string;
  note?: string;
};

export type RankingEntry = {
  rank: number;
  team: string;
  owner: string;
  movement: number | "new" | "-";
  commentary?: string;
};

export type RankingWeek = {
  season: number;
  week: string;
  date: string;
  entries: RankingEntry[];
};

export type Receipt = {
  id: string;
  placeholder: boolean;
  quote: string;
  owner?: string;
  date?: string;
  context?: string;
  outcome?: string;
  issueLink?: string;
};

export type HallOfShameEntry = {
  id: string;
  title: string;
  owner?: string;
  date?: string;
  description: string;
};
