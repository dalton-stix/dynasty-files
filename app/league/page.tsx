import type { Metadata } from "next";
import { owners } from "@/data/owners";
import { championshipCountsBySlug } from "@/data/champions";
import OwnerCard from "@/components/OwnerCard";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "The League",
  description: "The twelve owners and teams of The Dynasty Files.",
};

export default function LeaguePage() {
  const counts = championshipCountsBySlug();

  return (
    <Container className="max-w-5xl py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          The League
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Twelve Teams, One Sleeper League
        </h1>
        <p className="mt-3 text-ink-muted">
          Founded in 2019, this 12-team dynasty league has survived
          championships, rebuilds, questionable trades, scoring changes, bad
          beats, and enough receipts to last a lifetime. The names and team
          identities have changed over the years, but the league has become
          its own little piece of history. The Dynasty Files exists to
          document whatever happens next.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {owners.map((owner) => (
          <OwnerCard
            key={owner.slug}
            teamName={owner.teamName}
            ownerName={owner.ownerName}
            championships={counts[owner.slug] ?? 0}
          />
        ))}
      </div>
    </Container>
  );
}
