import type { RankingWeek } from "@/lib/types";

function MovementBadge({ movement }: { movement: RankingWeek["entries"][number]["movement"] }) {
  if (movement === "new") {
    return <span className="text-xs font-semibold text-gold">NEW</span>;
  }
  if (movement === "-" || movement === 0) {
    return <span className="text-ink-faint">&mdash;</span>;
  }
  const isUp = movement > 0;
  return (
    <span
      className={`text-xs font-semibold ${isUp ? "text-moss" : "text-brick"}`}
    >
      {isUp ? "↑" : "↓"} {Math.abs(movement)}
    </span>
  );
}

export default function RankingTable({ week }: { week: RankingWeek }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {week.season} &middot; {week.week}
        </h2>
      </div>
      <ul className="mt-4 divide-y divide-paper-line border-t border-b border-paper-line">
        {week.entries
          .sort((a, b) => a.rank - b.rank)
          .map((entry) => (
            <li
              key={entry.rank}
              className="flex items-start gap-4 py-4"
            >
              <span className="w-6 shrink-0 font-display text-xl text-gold">
                {entry.rank}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-medium text-ink">{entry.team}</span>
                  <span className="text-xs text-ink-faint">
                    {entry.owner}
                  </span>
                  <MovementBadge movement={entry.movement} />
                </div>
                {entry.commentary ? (
                  <p className="mt-1 text-sm text-ink-muted">
                    {entry.commentary}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
