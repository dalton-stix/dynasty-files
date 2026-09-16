import type { Metadata } from "next";
import Link from "next/link";
import { receipts } from "@/data/receipts";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "Old predictions, bad takes, and quotes that aged horribly — preserved forever.",
};

export default function ReceiptsPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          Receipts
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          The League Never Forgets
        </h1>
        <p className="mt-3 text-ink-muted">
          Bold predictions, bad trades, and takes that aged like milk &mdash;
          preserved for the record.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-6">
        {receipts.map((receipt) => (
          <div
            key={receipt.id}
            className="border border-paper-line bg-paper-raised p-6"
          >
            {receipt.placeholder ? (
              <span className="mb-3 inline-block rounded-sm border border-dashed border-gold-soft px-2 py-0.5 text-[10px] tracking-wide text-gold uppercase">
                Placeholder
              </span>
            ) : null}
            {receipt.isQuote === false ? (
              <p className="font-display text-lg text-ink">
                {receipt.quote}
              </p>
            ) : (
              <p className="font-display text-lg text-ink italic">
                &ldquo;{receipt.quote}&rdquo;
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint uppercase">
              {receipt.owner ? <span>{receipt.owner}</span> : null}
              {receipt.date ? (
                <>
                  <span aria-hidden>&middot;</span>
                  <span>{receipt.date}</span>
                </>
              ) : null}
              {receipt.updateLabel && receipt.updateDate ? (
                <>
                  <span aria-hidden>&middot;</span>
                  <span>
                    {receipt.updateLabel}: {receipt.updateDate}
                  </span>
                </>
              ) : null}
            </div>
            {receipt.context ? (
              <p className="mt-4 text-sm text-ink-muted">
                <span className="text-ink-faint">Context: </span>
                {receipt.context}
              </p>
            ) : null}
            {receipt.outcome ? (
              <p className="mt-2 text-sm text-ink-muted">
                <span className="text-ink-faint">What happened: </span>
                {receipt.outcome}
              </p>
            ) : null}
            {receipt.status ? (
              <p className="mt-3 text-xs font-semibold tracking-wide text-gold uppercase">
                {receipt.status}
              </p>
            ) : null}
            {receipt.links && receipt.links.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-paper-line pt-3 text-xs">
                {receipt.links.map((link) => (
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
        ))}
      </div>
    </Container>
  );
}
