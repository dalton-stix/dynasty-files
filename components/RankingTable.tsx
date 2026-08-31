import type { ComputedRankingEntry, Movement } from "@/lib/rankings";

function MovementIndicator({ movement }: { movement: Movement }) {
  if (movement.type === "up") {
    return (
      <span className="flex items-center gap-1 text-moss">
        <span aria-hidden>&uarr;</span>
        <span className="text-sm font-semibold">{movement.delta}</span>
        <span className="sr-only">Up {movement.delta}</span>
      </span>
    );
  }

  if (movement.type === "down") {
    return (
      <span className="flex items-center gap-1 text-brick">
        <span aria-hidden>&darr;</span>
        <span className="text-sm font-semibold">{movement.delta}</span>
        <span className="sr-only">Down {movement.delta}</span>
      </span>
    );
  }

  if (movement.type === "new") {
    return <span className="text-xs font-semibold text-gold">NEW</span>;
  }

  return (
    <span className="text-ink-faint" aria-label="No change">
      &mdash;
    </span>
  );
}

export default function RankingTable({
  entries,
}: {
  entries: ComputedRankingEntry[];
}) {
  return (
    <ol className="divide-y divide-paper-line border-t border-b border-paper-line">
      {entries.map((entry) => (
        <li
          key={entry.ownerSlug}
          className={`flex gap-4 py-4 sm:gap-6 ${
            entry.note ? "items-start" : "items-center"
          }`}
        >
          <span className="w-9 shrink-0 font-display text-2xl text-gold tabular-nums">
            {String(entry.rank).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold tracking-wide text-ink uppercase">
              {entry.teamName}
            </p>
            <p className="truncate text-xs text-ink-muted">
              {entry.ownerName}
            </p>
            {entry.note ? (
              <p className="mt-2 text-sm text-ink-muted">{entry.note}</p>
            ) : null}
          </div>
          <div className="shrink-0">
            <MovementIndicator movement={entry.movement} />
          </div>
        </li>
      ))}
    </ol>
  );
}
