import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Issue } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { getPreviousIssue } from "@/lib/issues";
import { mdxComponents } from "@/components/mdx-components";
import Container from "./Container";

export default function IssueView({
  issue,
  isPermalink = false,
}: {
  issue: Issue;
  isPermalink?: boolean;
}) {
  const { frontmatter } = issue;
  const previous = getPreviousIssue(issue);

  return (
    <article>
      <Container className="pt-10 sm:pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
            {frontmatter.season} Season &middot; {frontmatter.week}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink sm:text-5xl">
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle ? (
            <p className="mt-4 font-display text-lg text-ink-muted italic sm:text-xl">
              {frontmatter.subtitle}
            </p>
          ) : null}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-ink-faint uppercase">
            {frontmatter.byline ? (
              <span>By {frontmatter.byline}</span>
            ) : null}
            {frontmatter.byline ? <span aria-hidden>&middot;</span> : null}
            <time dateTime={frontmatter.date}>
              {formatDate(frontmatter.date)}
            </time>
          </div>
        </div>

        {frontmatter.placeholder ? (
          <div className="mx-auto mt-8 max-w-2xl rounded-sm border border-dashed border-gold-soft bg-paper-raised px-4 py-3 text-center text-xs tracking-wide text-gold uppercase">
            Placeholder issue &mdash; real coverage begins once the season
            kicks off
          </div>
        ) : null}

        <div className="mx-auto mt-10 h-px w-16 bg-gold-soft" />
      </Container>

      <Container className="mt-10 sm:mt-14">
        <div className="article-body mx-auto max-w-2xl">
          <MDXRemote source={issue.content} components={mdxComponents} />
        </div>
      </Container>

      <Container className="mt-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 border-t border-paper-line pt-8 text-sm sm:flex-row sm:justify-between">
          {previous ? (
            <Link
              href={`/issues/${previous.season}/${previous.slug}`}
              className="text-ink-muted transition-colors hover:text-gold"
            >
              &larr; {previous.frontmatter.title}
            </Link>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-4">
            {!isPermalink ? (
              <Link
                href={`/issues/${issue.season}/${issue.slug}`}
                className="text-ink-muted transition-colors hover:text-gold"
              >
                Permalink
              </Link>
            ) : null}
            <Link
              href="/archive"
              className="text-gold transition-colors hover:text-ink"
            >
              Full Archive &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
