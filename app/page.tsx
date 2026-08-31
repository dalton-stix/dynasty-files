import Link from "next/link";
import { getLatestIssue } from "@/lib/issues";
import IssueView from "@/components/IssueView";
import Container from "@/components/Container";

export default function HomePage() {
  const issue = getLatestIssue();

  if (!issue) {
    return (
      <Container className="py-24 text-center">
        <p className="font-display text-2xl text-ink">
          No issues published yet.
        </p>
        <p className="mt-2 text-ink-muted">
          Check back once the first Dynasty Files issue drops.
        </p>
      </Container>
    );
  }

  return (
    <div className="pb-16">
      <IssueView issue={issue} />
      <Container className="mt-12">
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/archive"
            className="text-sm text-ink-muted underline decoration-paper-line underline-offset-4 transition-colors hover:text-gold"
          >
            Browse every past issue in the archive
          </Link>
        </div>
      </Container>
    </div>
  );
}
