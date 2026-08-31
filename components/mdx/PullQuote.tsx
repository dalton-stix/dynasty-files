import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="!mt-10 !mb-10 !border-l-0 !pl-0 py-2 text-center">
      <p className="font-display text-2xl leading-snug font-medium text-gold not-italic sm:text-3xl">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}
