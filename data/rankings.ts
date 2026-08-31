import type { RankingPeriod } from "@/lib/types";

// Each entry is one published ranking period. `rankings` is the ordered list
// of slots — rank is just position in the array (index + 1). An optional
// `note` is a short editorial blurb explaining that team's move; leave it
// out where there's nothing to say.
//
// Movement is never stored here; it's always derived by comparing a period
// against the immediately previous one (see lib/rankings.ts) so the numbers
// can't drift out of sync with the actual rankings.
//
// To publish a new week, add a new entry with the next `order` value.
export const rankingPeriods: RankingPeriod[] = [
  {
    season: 2026,
    period: "preseason",
    label: "Preseason",
    date: "2026-08-31",
    order: 0,
    rankings: [
      { ownerSlug: "evan-decovich" },
      { ownerSlug: "jacob-loughman" },
      { ownerSlug: "dalton-speers" },
      { ownerSlug: "alex-amadeo" },
      { ownerSlug: "kyle-lucas" },
      { ownerSlug: "hutch-burns" },
      { ownerSlug: "joel-wiggins" },
      { ownerSlug: "brandon-reeve" },
      { ownerSlug: "matt-choice" },
      { ownerSlug: "josh-paul" },
      { ownerSlug: "jordan-vanroekel" },
      { ownerSlug: "sam-munson" },
    ],
  },
];
