import Link from "next/link";
import type { Metadata } from "next";
import {
  computeRankings,
  getLatestPeriod,
  getPeriodById,
  getPeriodId,
  getSortedPeriods,
} from "@/lib/rankings";
import { formatDate } from "@/lib/format";
import RankingTable from "@/components/RankingTable";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Power Rankings",
  description: "Weekly power rankings for The Dynasty Files.",
};

export default async function PowerRankingsPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
}) {
  const { period: periodParam } = await searchParams;
  const latest = getLatestPeriod();
  const selected =
    (periodParam ? getPeriodById(periodParam) : undefined) ?? latest;

  if (!selected) {
    return (
      <Container className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
            Power Rankings
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
            Where Everyone Stands
          </h1>
        </div>
        <div className="mx-auto mt-12 max-w-2xl border border-dashed border-paper-line px-6 py-12 text-center">
          <p className="text-ink-muted">
            Power rankings haven&rsquo;t been published yet this season.
          </p>
          <p className="mt-1 text-sm text-ink-faint">
            Check back once Week 1 is in the books.
          </p>
        </div>
      </Container>
    );
  }

  const seasonPeriods = getSortedPeriods().filter(
    (period) => period.season === selected.season,
  );
  const entries = computeRankings(selected);

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          Power Rankings
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Where Everyone Stands
        </h1>
        <p className="mt-3 text-ink-muted">
          Updated weekly during the season, with commentary nobody asked for.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <nav
          aria-label="Ranking period"
          className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {seasonPeriods.map((period) => {
            const id = getPeriodId(period);
            const isActive = id === getPeriodId(selected);
            return (
              <Link
                key={id}
                href={`/power-rankings?period=${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-gold bg-gold text-paper font-semibold"
                    : "border-paper-line text-ink-muted hover:border-gold-soft hover:text-gold"
                }`}
              >
                {period.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {selected.season} &middot; {selected.label}
          </h2>
          <span className="text-xs text-ink-faint">
            {formatDate(selected.date)}
          </span>
        </div>
        <div className="mt-4">
          <RankingTable entries={entries} />
        </div>
      </div>
    </Container>
  );
}
