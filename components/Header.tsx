import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/", label: "Latest Issue" },
  { href: "/archive", label: "Archive" },
  { href: "/league", label: "The League" },
  { href: "/champions", label: "Champions" },
  { href: "/power-rankings", label: "Power Rankings" },
  { href: "/receipts", label: "Receipts" },
  { href: "/hall-of-shame", label: "Hall of Shame" },
];

export default function Header() {
  return (
    <header className="border-b border-paper-line">
      <Container className="flex flex-col items-center gap-2 py-8 text-center sm:py-10">
        <Link href="/" className="group">
          <p className="text-[11px] tracking-[0.35em] text-ink-faint uppercase">
            Est. 2019 &middot; A dynasty fantasy football publication
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            The Dynasty Files
          </h1>
          <p className="mt-2 text-sm text-ink-muted italic">
            Same league. New receipts.
          </p>
        </Link>
      </Container>
      <div className="border-t border-paper-line bg-paper-raised">
        <Container>
          <nav className="scrollbar-none -mx-4 flex gap-6 overflow-x-auto px-4 py-3 text-sm whitespace-nowrap sm:mx-0 sm:justify-center sm:gap-8 sm:px-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-muted transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
