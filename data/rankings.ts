import type { RankingWeek } from "@/lib/types";

// No power rankings have been published yet for the 2026 season.
// Add new weeks to the front of this array as they're written —
// the Power Rankings page automatically shows the most recent week
// and lists the rest underneath.
export const rankingWeeks: RankingWeek[] = [];

export function getLatestRankingWeek(): RankingWeek | undefined {
  return rankingWeeks[0];
}
