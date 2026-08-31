import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.3em] text-brick uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
        Page Not Found
      </h1>
      <p className="mt-3 text-ink-muted">
        This one didn&rsquo;t make the final issue.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-gold underline decoration-gold-soft underline-offset-4 hover:text-ink"
      >
        Back to the latest issue
      </Link>
    </Container>
  );
}
