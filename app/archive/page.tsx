import Link from "next/link";
import type { Metadata } from "next";
import { getIssuesBySeason } from "@/lib/issues";
import { formatDate } from "@/lib/format";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Archive",
  description: "Every past issue of The Dynasty Files, organized by season.",
};

export default function ArchivePage() {
  const seasons = getIssuesBySeason();

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
          Archive
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Every Issue
        </h1>
        <p className="mt-3 text-ink-muted">
          The full run of The Dynasty Files, season by season.
        </p>

        {seasons.length === 0 ? (
          <p className="mt-12 text-ink-muted">Nothing published yet.</p>
        ) : (
          <div className="mt-12 space-y-12">
            {seasons.map(({ season, issues }) => (
              <section key={season}>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {season} Season
                </h2>
                <ul className="mt-4 divide-y divide-paper-line border-t border-b border-paper-line">
                  {issues.map((issue) => (
                    <li key={issue.slug}>
                      <Link
                        href={`/issues/${issue.season}/${issue.slug}`}
                        className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span>
                          <span className="text-xs tracking-wide text-gold uppercase">
                            {issue.frontmatter.week}
                          </span>
                          <span className="mt-0.5 block font-display text-lg text-ink group-hover:text-gold">
                            {issue.frontmatter.title}
                          </span>
                        </span>
                        <span className="shrink-0 text-xs text-ink-faint">
                          {formatDate(issue.frontmatter.date)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
