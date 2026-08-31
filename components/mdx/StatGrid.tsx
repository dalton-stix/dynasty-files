import type { ReactNode } from "react";

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="!mt-10 !mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-3">
      {children}
    </div>
  );
}

export function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-paper-raised px-4 py-6 text-center">
      <span className="font-display text-3xl font-semibold text-gold">
        {value}
      </span>
      <span className="text-xs tracking-wide text-ink-muted uppercase">
        {label}
      </span>
    </div>
  );
}
