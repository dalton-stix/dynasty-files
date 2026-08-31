import type { Owner } from "@/lib/types";
import { championshipCounts } from "@/data/champions";

export default function OwnerCard({ owner }: { owner: Owner }) {
  const titles = championshipCounts()[owner.ownerName] ?? 0;

  return (
    <div className="flex flex-col border border-paper-line bg-paper-raised p-6">
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">
          {owner.teamName}
        </h3>
        <p className="mt-0.5 text-sm text-ink-muted">{owner.ownerName}</p>
        <p className="mt-1 text-xs text-ink-faint">
          Championships: {titles}
        </p>
      </div>
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
