import type { RankingPeriod } from "@/lib/types";

// Each entry is one published ranking period. `rankings` is the ordered list
// of slots — rank is just position in the array (index + 1).
//
// `ownerSlug` is the permanent identity used to track a person across
// periods (movement is derived from it). `teamName` is a point-in-time
// snapshot of what that team was called when THIS period was published —
// it is never re-resolved from owners.ts, so renaming a team in owners.ts
// only affects current/future display and never rewrites how a past period
// reads. An optional `note` is a short editorial blurb explaining that
// team's move; leave it out where there's nothing to say.
//
// Movement is never stored here; it's always derived by comparing a period
// against the immediately previous one (see lib/rankings.ts) so the numbers
// can't drift out of sync with the actual rankings.
//
// To publish a new week, add a new entry with the next `order` value and
// snapshot each team's current name into `teamName` as of that week.
export const rankingPeriods: RankingPeriod[] = [
  {
    season: 2026,
    period: "preseason",
    label: "Preseason",
    date: "2026-08-31",
    order: 0,
    rankings: [
      { ownerSlug: "evan-decovich", teamName: "Drunken Monkeys" },
      { ownerSlug: "jacob-loughman", teamName: "The Dog" },
      { ownerSlug: "dalton-speers", teamName: "3rdDownConversionTherapy" },
      { ownerSlug: "alex-amadeo", teamName: "Domestic Abusers" },
      { ownerSlug: "kyle-lucas", teamName: "Kylelucas28" },
      { ownerSlug: "hutch-burns", teamName: "hburns" },
      { ownerSlug: "joel-wiggins", teamName: "Amon Ra Doggin" },
      { ownerSlug: "brandon-reeve", teamName: "brandonreeve" },
      { ownerSlug: "matt-choice", teamName: "'21" },
      { ownerSlug: "josh-paul", teamName: "#TrustTheProcess" },
      { ownerSlug: "jordan-vanroekel", teamName: "jordo41" },
      { ownerSlug: "sam-munson", teamName: "King Henry Hill" },
    ],
  },
];
