import type { Metadata } from "next";
import { hallOfShameEntries } from "@/data/hallOfShame";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Hall of Shame",
  description:
    "The infamous moments of The Dynasty Files — bad picks, worse decisions.",
};

export default function HallOfShamePage() {
  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          Hall of Shame
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Infamy Has a Home Too
        </h1>
        <p className="mt-3 text-ink-muted">
          The moments the league won&rsquo;t let anyone forget.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-6">
        {hallOfShameEntries.map((entry) => (
          <div
            key={entry.id}
            className="border-l-2 border-brick bg-paper-raised p-6"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              {entry.title}
            </h2>
            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint uppercase">
              {entry.owner ? <span>{entry.owner}</span> : null}
              {entry.date ? (
                <>
                  <span aria-hidden>&middot;</span>
                  <span>{entry.date}</span>
                </>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-ink-muted">{entry.description}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-faint italic">
        More entries get added as the league continues to embarrass itself.
      </p>
    </Container>
  );
}
