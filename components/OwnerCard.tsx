import type { Owner } from "@/lib/types";
import { championshipCounts } from "@/data/champions";

export default function OwnerCard({ owner }: { owner: Owner }) {
  const titles = championshipCounts()[owner.ownerName] ?? 0;

  return (
    <div className="flex flex-col border border-paper-line bg-paper-raised p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            {owner.teamName}
          </h3>
          <p className="mt-0.5 text-sm text-ink-muted">{owner.ownerName}</p>
        </div>
        {titles > 0 ? (
          <span
            title={`${titles} championship${titles > 1 ? "s" : ""}`}
            className="shrink-0 rounded-full border border-gold-soft px-2.5 py-1 text-xs font-semibold text-gold"
          >
            {"🏆".repeat(titles)}
          </span>
        ) : null}
      </div>
      {owner.pcmCrew ? (
        <span className="mt-3 w-fit rounded-sm bg-paper px-2 py-0.5 text-[10px] tracking-wide text-ink-faint uppercase">
          PCM Crew
        </span>
      ) : null}
      <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
        {owner.facts.map((fact) => (
          <li key={fact} className="flex gap-2">
            <span className="text-gold-soft">&middot;</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
