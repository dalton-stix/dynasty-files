import type { Receipt } from "@/lib/types";

// Each receipt has a stable `id` — when a receipt's status changes (e.g. a
// prediction resolves), amend the matching entry in place rather than
// adding a new one, so the record stays a single running history.
export const receipts: Receipt[] = [
  {
    id: "speers-third-place-ranking-2026",
    placeholder: false,
    quote: "Yes, I'm ranking myself third. File a complaint.",
    owner: "Dalton Speers",
    date: "August 31, 2026",
    updateLabel: "Outcome",
    updateDate: "2026 Week 1",
    context:
      'Speers ranked himself third and Joel seventh in the 2026 preseason issue, with Joel just outside his projected playoff six.',
    outcome:
      "Joel won their Week 1 matchup 163.02–120.15, a 42.87-point response. Speers moved to sixth in the Week 1 power rankings; Joel climbed to third.",
    status: "Week 1 receipt — season predictions still open.",
    links: [
      { label: "The 2026 Season Preview", href: "/issues/2026/preseason" },
      {
        label: "The Commissioner Would Like His Apology",
        href: "/issues/2026/week-1",
      },
    ],
  },
  {
    id: "jp-marshawn-lloyd-faab-2026",
    placeholder: false,
    quote: "JP paid $51 of his $100 FAAB budget for MarShawn Lloyd.",
    isQuote: false,
    owner: "Josh Paul",
    date: "September 2, 2026",
    updateLabel: "Latest update",
    updateDate: "September 16, 2026",
    context:
      "The winning preseason bid beat Jacob's $40, Deco's $28, Matt's $25 and Alex's $13.",
    outcome:
      "Lloyd scored 4.74 outside JP's Week 1 starting lineup. JP had $49 remaining after the September 16 waiver run.",
    status: "Open — dynasty return still developing.",
    links: [
      {
        label: "The Commissioner Would Like His Apology",
        href: "/issues/2026/week-1",
      },
    ],
  },
];
