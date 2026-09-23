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
    updateLabel: "Latest update",
    updateDate: "September 23, 2026",
    context:
      'Speers ranked himself third and Joel seventh in the 2026 preseason issue, with Joel just outside his projected playoff six.',
    outcome:
      "Joel won their Week 1 matchup 163.02–120.15, a 42.87-point response. Speers moved to sixth in the Week 1 power rankings; Joel climbed to third. JP then beat Speers 135.72–103.01 in Week 2. Through two weeks, Speers is 0–2 with 223.16 points, ninth in the standings and eighth in the power rankings. That quote remains available on a website I helped create.",
    status: "Through Week 2 — season predictions still open.",
    links: [
      { label: "The 2026 Season Preview", href: "/issues/2026/preseason" },
      {
        label: "The Commissioner Would Like His Apology",
        href: "/issues/2026/week-1",
      },
      {
        label: "Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
      {
        label: "View the Supreme Commissioner →",
        href: "/hall-of-shame#supreme-commissioner-2026",
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
    updateDate: "September 23, 2026",
    context:
      "The winning preseason bid beat Jacob's $40, Deco's $28, Matt's $25 and Alex's $13.",
    outcome:
      "Lloyd scored 4.74 outside JP's Week 1 starting lineup. JP had $49 remaining after the September 16 waiver run. Lloyd added 9.08 outside the Week 2 lineup, and JP won without needing him in the starting lineup. JP has $46 remaining as of September 23 after paying $3 for Alvin Kamara. Record the numbers; leave the verdict open.",
    status: "Open — dynasty return still developing.",
    links: [
      {
        label: "The Commissioner Would Like His Apology",
        href: "/issues/2026/week-1",
      },
      {
        label: "Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
    ],
  },
  {
    id: "speers-week-2-forecast-2026",
    placeholder: false,
    quote: "Speers went 5–1 on his Week 2 picks. The only team he got wrong was his own.",
    isQuote: false,
    owner: "Dalton Speers",
    date: "September 16, 2026",
    updateLabel: "Outcome recorded",
    updateDate: "September 23, 2026",
    context:
      "The Week 1 issue picked Speers, Jacob, Joel, Hutch, Deco and Alex to win their Week 2 matchups.",
    outcome:
      "Jacob, Joel, Hutch, Deco and Alex won. JP beat Speers 135.72–103.01. The article reads other people's teams beautifully.",
    status: "Resolved — 5–1, with one personal problem.",
    links: [
      {
        label: "The original Week 2 picks",
        href: "/issues/2026/week-1",
      },
      {
        label: "Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
    ],
  },
  {
    id: "speers-adonai-mitchell-faab-2026",
    placeholder: false,
    quote: "Speers paid $25 for Adonai Mitchell. Jordan bid $5. Jacob bid $0.",
    isQuote: false,
    owner: "Dalton Speers",
    date: "September 23, 2026",
    context:
      "The post-Week-2 waiver run awarded Mitchell to Speers for $25, with Baltimore's defense dropped. His offer was $20 higher than the next bidder's. The other two claims failed and cost nothing.",
    outcome:
      "Speers also spent $1 on Spencer Shrader that morning, leaving $74 of his $100 budget. The team is 0–2; Mitchell's return is still to come. If we're keeping JP's paperwork, we're keeping mine.",
    status: "Open — long-term return still developing.",
    links: [
      {
        label: "Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
    ],
  },
];
