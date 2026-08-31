import type { Metadata } from "next";
import { champions, championshipCounts } from "@/data/champions";
import { owners } from "@/data/owners";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Champions",
  description: "The championship history of The Dynasty Files, 2019–present.",
};

export default function ChampionsPage() {
  const counts = championshipCounts();
  const repeatChampions = Object.entries(counts)
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1]);

  const reigningChampion = [...champions].sort((a, b) => b.year - a.year)[0];
  const reigningChampionTeam = owners.find(
    (owner) => owner.slug === reigningChampion.championSlug,
  )?.teamName;

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

      {repeatChampions.length > 0 ? (
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
          {repeatChampions.map(([name, count]) => (
            <span
              key={name}
              className="rounded-full border border-gold-soft px-3 py-1 text-xs text-gold"
            >
              {name} &middot; {count}&times; Champion
            </span>
          ))}
        </div>
      ) : null}

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
                  <td className="py-4 pr-4">
                    <span className="font-medium text-ink">
                      {entry.champion}
                    </span>
                    {counts[entry.champion] > 1 ? (
                      <span className="ml-2 text-xs text-ink-faint">
                        {counts[entry.champion]}&times; Champion
                      </span>
                    ) : null}
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
    </Container>
  );
}
