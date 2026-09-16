import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        {hallOfShameEntries.map((entry) => {
          const paragraphs = Array.isArray(entry.description)
            ? entry.description
            : [entry.description];

          return (
            <div
              key={entry.id}
              id={entry.id}
              className="scroll-mt-24 border-l-2 border-brick bg-paper-raised p-6"
            >
              {entry.image ? (
                <div className="mb-5 flex justify-center">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={640}
                    height={640}
                    sizes="(min-width: 640px) 640px, 100vw"
                    className="w-full max-w-md rounded-sm border border-paper-line"
                  />
                </div>
              ) : null}
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
              <div className="mt-3 space-y-2 text-sm text-ink-muted">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {entry.links && entry.links.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-paper-line pt-3 text-xs">
                  {entry.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-ink-muted underline decoration-paper-line underline-offset-4 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-faint italic">
        More entries get added as the league continues to embarrass itself.
      </p>
    </Container>
  );
}
