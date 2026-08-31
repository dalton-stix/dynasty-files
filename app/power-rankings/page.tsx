import type { Metadata } from "next";
import { rankingWeeks } from "@/data/rankings";
import RankingTable from "@/components/RankingTable";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Power Rankings",
  description: "Weekly power rankings for The Dynasty Files.",
};

export default function PowerRankingsPage() {
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

      <div className="mx-auto mt-12 max-w-2xl">
        {rankingWeeks.length === 0 ? (
          <div className="border border-dashed border-paper-line px-6 py-12 text-center">
            <p className="text-ink-muted">
              Power rankings haven&rsquo;t been published yet this season.
            </p>
            <p className="mt-1 text-sm text-ink-faint">
              Check back once Week 1 is in the books.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {rankingWeeks.map((week) => (
              <RankingTable key={`${week.season}-${week.week}`} week={week} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
