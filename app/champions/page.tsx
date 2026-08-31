import type { Metadata } from "next";
import { champions } from "@/data/champions";
import { owners } from "@/data/owners";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Champions",
  description: "The championship history of The Dynasty Files, 2019–present.",
};

export default function ChampionsPage() {
  const reigningChampion = [...champions].sort((a, b) => b.year - a.year)[0];
  // Prefer the historical snapshot (what the team was actually called when
  // they won) so a later rename in owners.ts can't rewrite this. Falls back
  // to the owner's current team name only for older records where we never
  // recorded a snapshot — see Champion.teamNameAtTime.
  const reigningChampionTeam =
    reigningChampion.teamNameAtTime ??
    owners.find((owner) => owner.slug === reigningChampion.championSlug)
      ?.teamName;

  // Neutral per-owner title counts, ordered by each owner's first
  // championship year — not by total titles — so nobody is presented as a
  // leaderboard leader. This is a historical record, not a ranking.
  const championsBySlug = champions.reduce<
    Record<string, { name: string; firstYear: number; count: number }>
  >((acc, entry) => {
    const existing = acc[entry.championSlug];
    if (existing) {
      existing.count += 1;
      existing.firstYear = Math.min(existing.firstYear, entry.year);
    } else {
      acc[entry.championSlug] = {
        name: entry.champion,
        firstYear: entry.year,
        count: 1,
      };
    }
    return acc;
  }, {});
  const championTotals = Object.values(championsBySlug).sort(
    (a, b) => a.firstYear - b.firstYear,
  );

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          Champions
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          The Championship Ledger
        </h1>
        <p className="mt-3 text-ink-muted">
          Every title, every runner-up, since the league&rsquo;s first season
          in 2019.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl border border-gold-soft bg-paper-raised px-6 py-10 text-center">
        <p className="text-xs font-semibold tracking-[0.35em] text-gold uppercase">
          Reigning Champion
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {reigningChampion.champion}
        </h2>
        <p className="mt-2 text-ink-muted">
          {reigningChampion.year} Champion
          {reigningChampionTeam ? ` · ${reigningChampionTeam}` : ""}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-paper-line text-left text-xs tracking-wide text-ink-faint uppercase">
              <th className="py-3 pr-4 font-semibold">Year</th>
              <th className="py-3 pr-4 font-semibold">Champion</th>
              <th className="py-3 pr-4 font-semibold">Runner-Up</th>
            </tr>
          </thead>
          <tbody>
            {[...champions]
              .sort((a, b) => b.year - a.year)
              .map((entry) => (
                <tr
                  key={entry.year}
                  className="border-b border-paper-line align-top"
                >
                  <td className="py-4 pr-4 font-display text-lg text-gold">
                    {entry.year}
                  </td>
                  <td className="py-4 pr-4 font-medium text-ink">
                    {entry.champion}
                  </td>
                  <td className="py-4 pr-4 text-ink-muted">
                    {entry.runnerUp}
                    {entry.note ? (
                      <span className="mt-1 block text-xs text-ink-faint italic">
                        {entry.note}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto mt-16 max-w-2xl border-t border-paper-line pt-10">
        <h2 className="text-center font-display text-2xl font-semibold text-ink">
          Championships by Owner
        </h2>
        <ul className="mt-6 divide-y divide-paper-line border-t border-b border-paper-line">
          {championTotals.map((entry) => (
            <li
              key={entry.name}
              className="flex items-center justify-between py-3 text-sm"
            >
              <span className="text-ink">{entry.name}</span>
              <span className="text-ink-muted">{entry.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
