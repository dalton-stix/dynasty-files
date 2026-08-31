import { rankingPeriods } from "@/data/rankings";
import { getOwnerBySlug } from "@/data/owners";
import type { RankingPeriod } from "./types";

export type Movement =
  | { type: "baseline" }
  | { type: "same" }
  | { type: "up"; delta: number }
  | { type: "down"; delta: number }
  | { type: "new" };

export type ComputedRankingEntry = {
  rank: number;
  ownerSlug: string;
  teamName: string;
  ownerName: string;
  movement: Movement;
  note?: string;
};

export function getPeriodId(period: RankingPeriod): string {
  return `${period.season}-${period.period}`;
}

export function getSortedPeriods(): RankingPeriod[] {
  return [...rankingPeriods].sort((a, b) =>
    a.season !== b.season ? a.season - b.season : a.order - b.order,
  );
}

export function getLatestPeriod(): RankingPeriod | undefined {
  const sorted = getSortedPeriods();
  return sorted[sorted.length - 1];
}

export function getPeriodById(id: string): RankingPeriod | undefined {
  return rankingPeriods.find((period) => getPeriodId(period) === id);
}

export function getPreviousPeriod(
  period: RankingPeriod,
): RankingPeriod | undefined {
  const sorted = getSortedPeriods();
  const index = sorted.findIndex((p) => getPeriodId(p) === getPeriodId(period));
  if (index <= 0) return undefined;
  return sorted[index - 1];
}

export function computeRankings(period: RankingPeriod): ComputedRankingEntry[] {
  const previous = getPreviousPeriod(period);

  return period.rankings.map((slot, index) => {
    const rank = index + 1;
    const owner = getOwnerBySlug(slot.ownerSlug);

    let movement: Movement;
    if (!previous) {
      movement = { type: "baseline" };
    } else {
      const previousIndex = previous.rankings.findIndex(
        (p) => p.ownerSlug === slot.ownerSlug,
      );
      if (previousIndex === -1) {
        movement = { type: "new" };
      } else {
        const previousRank = previousIndex + 1;
        if (previousRank === rank) {
          movement = { type: "same" };
        } else if (rank < previousRank) {
          movement = { type: "up", delta: previousRank - rank };
        } else {
          movement = { type: "down", delta: rank - previousRank };
        }
      }
    }

    return {
      rank,
      ownerSlug: slot.ownerSlug,
      teamName: owner?.teamName ?? slot.ownerSlug,
      ownerName: owner?.ownerName ?? slot.ownerSlug,
      movement,
      note: slot.note,
    };
  });
}
