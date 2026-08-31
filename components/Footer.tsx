import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-paper-line py-10">
      <Container className="flex flex-col items-center gap-2 text-center">
        <p className="font-display text-lg text-ink">The Dynasty Files</p>
        <p className="text-xs text-ink-faint">
          A publication of the league, for the league. Twelve owners, one
          Sleeper league, entirely too much editorial effort.
        </p>
      </Container>
    </footer>
  );
}
