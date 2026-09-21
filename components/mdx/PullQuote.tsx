import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="!mt-10 !mb-10 !border-l-0 !pl-0 py-2 text-center">
      <div className="font-display text-2xl leading-snug font-medium text-gold not-italic sm:text-3xl [&>p]:m-0 [&>p]:inline [&>p]:!text-inherit">
        &ldquo;{children}&rdquo;
      </div>
    </blockquote>
  );
}
