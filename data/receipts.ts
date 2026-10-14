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
    updateDate: "October 14, 2026",
    context:
      'Speers ranked himself third and Joel seventh in the 2026 preseason issue, with Joel just outside his projected playoff six.',
    outcome:
      "Joel won their Week 1 matchup 163.02–120.15, a 42.87-point response. Speers moved to sixth in the Week 1 power rankings; Joel climbed to third. JP then beat Speers 135.72–103.01 in Week 2. Through two weeks, Speers is 0–2 with 223.16 points, ninth in the standings and eighth in the power rankings. That quote remains available on a website I helped create. Week 3 update — September 30: Speers has his first win, a 1–2 record and 329.56 points, but sits ninth in the power rankings. Week 4 update — October 7: Speers lost 124.05–103.00 to Kyle, fell to 1–3 and remains ninth in the power rankings. The preseason quote is still doing more work than the team. Week 5 update — October 14: Speers beat Brandon 202.53–80.89, improved to 2–3 and remains ninth in the standings and power rankings. The season’s first 200-point score is a substantial counterpoint; the preseason third-place prediction remains open.",
    status: "Through Week 5 — season predictions still open.",
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
        label: "The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
      {
        label: "View the Supreme Commissioner →",
        href: "/hall-of-shame#supreme-commissioner-2026",
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5",
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
    updateDate: "October 14, 2026",
    context:
      "The winning preseason bid beat Jacob's $40, Deco's $28, Matt's $25 and Alex's $13.",
    outcome:
      "Lloyd scored 4.74 outside JP's Week 1 starting lineup. JP had $49 remaining after the September 16 waiver run. Lloyd added 9.08 outside the Week 2 lineup, and JP won without needing him in the starting lineup. JP has $46 remaining as of September 23 after paying $3 for Alvin Kamara. Record the numbers; leave the verdict open. Week 3 update — September 30: Lloyd scored 3.12 outside the starting lineup, bringing his three-week total to 16.94 with no starts for JP. Week 4 update — October 7: Lloyd scored 7.96 outside the lineup, bringing the four-week total to 24.90 with no starts. JP has $39 remaining after adding Will Shipley and Dallas's defense. Week 5 update — October 14: Lloyd scored 17.00 outside JP’s lineup, bringing his five-week total to 41.90 with no starts. JP is 2–3 with $39 remaining at the October 14 noon cutoff.",
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
      {
        label: "The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5",
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
    updateLabel: "Latest update",
    updateDate: "October 14, 2026",
    context:
      "The post-Week-2 waiver run awarded Mitchell to Speers for $25, with Baltimore's defense dropped. His offer was $20 higher than the next bidder's. The other two claims failed and cost nothing.",
    outcome:
      "Speers also spent $1 on Spencer Shrader that morning, leaving $74 of his $100 budget. After Week 2, the team was 0–2; Mitchell's return was still to come. If we're keeping JP's paperwork, we're keeping mine. Week 3 update — September 30: Mitchell scored zero outside the starting lineup. The $1 Shrader scored 19.70 inside it. Week 4 update — October 7: Mitchell supplied a second consecutive zero outside the lineup. Speers is 1–3 with $54 remaining after the Joe Mixon claim. The useful dollar has introduced itself; Mitchell's long-term return remains open. Week 5 update — October 14: Mitchell supplied a third consecutive zero outside the lineup and remains week to week after a hand procedure, per NFL reporting on October 14. Speers is 2–3 with $54 remaining. The injury does not settle the long-term return.",
    status: "Open — long-term return still developing.",
    links: [
      {
        label: "Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
      {
        label: "The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5",
      },
    ],
  },
  {
    id: "deco-ollie-gordon-faab-2026",
    placeholder: false,
    quote: "Deco paid $56 for Ollie Gordon. Matt bid $33, Jacob $15 and Brandon $13.",
    isQuote: false,
    owner: "Evan DeCovich",
    date: "September 30, 2026",
    updateLabel: "Latest update",
    updateDate: "October 14, 2026",
    context:
      "The post-Week-3 waiver run awarded Gordon to Deco, with Justice Hill dropped. His winning offer was $23 higher than the next bidder's. The other three claims failed and cost nothing.",
    outcome:
      "Deco has $39 of his $100 budget remaining. Week 4 update — October 7: Gordon scored 18.72 outside Deco's starting lineup. The production exists; the receipt still has not produced a starting point for Deco. Week 5 update — October 14: Gordon scored 16.24 in Deco’s starting lineup, his first starting return since the claim. Deco is 4–1 and has $37 remaining after a $2 Kansas City defense claim. The purchase is now producing starting points; the long-term verdict stays open.",
    status: "Open — dynasty return still developing.",
    links: [
      {
        label: "The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5",
      },
    ],
  },
  {
    id: "kyle-ends-joel-unbeaten-run-week-3-2026",
    placeholder: false,
    quote: "Kyle beat Joel 140.49–139.48. The regime fell by 1.01.",
    isQuote: false,
    owner: "Kyle Lucas / Joel Wiggins",
    date: "2026 · Week 3",
    updateLabel: "Outcome recorded",
    updateDate: "September 30, 2026",
    context:
      "Joel entered Week 3 at 2–0 after scoring 163.02 and 170.90. Kyle entered at 0–2 after opening against Alex and Deco.",
    outcome:
      "Kyle earned his first win by 1.01. Joel scored the third-highest total of Week 3 and still lost. He remains second in the power rankings, but the unbeaten record is gone.",
    status: "Resolved — Kyle's first win, Joel's first loss.",
    links: [
      {
        label: "The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
      {
        label: "View the Supreme Commissioner →",
        href: "/hall-of-shame#supreme-commissioner-2026",
      },
    ],
  },
  {
    id: "speers-week-4-picks-2026",
    placeholder: false,
    quote: "The Week 4 picks went 4–2, moving the published 2026 record to 13–5.",
    isQuote: false,
    owner: "Dalton Speers",
    date: "2026 · Week 4",
    updateLabel: "Outcome recorded",
    updateDate: "October 7, 2026",
    context:
      "The Week 3 issue picked Jacob, Deco, Joel, JP, Jordan and Kyle to win their Week 4 matchups.",
    outcome:
      "Deco, Joel, JP and Kyle won. Alex beat the Jacob pick by 9.53, and Matt beat the Jordan pick by 78.25. The published season record moves from 9–3 to 13–5.",
    status: "Resolved — 4–2 for the week, 13–5 for the season.",
    links: [
      {
        label: "The Week 4 picks",
        href: "/issues/2026/week-3",
      },
      {
        label: "The Unbeaten Table Has Two Seats.",
        href: "/issues/2026/week-4",
      },
    ],
  },
  {
    id: "speers-joe-mixon-faab-2026",
    placeholder: false,
    quote: "Speers paid $20 for Joe Mixon and dropped him about 12 hours later.",
    isQuote: false,
    owner: "Dalton Speers",
    date: "October 7, 2026",
    updateLabel: "Outcome recorded",
    updateDate: "October 7, 2026",
    context:
      "Seattle had already declined to sign Mixon following a physical. Speers won the Wednesday waiver claim anyway, dropping San Francisco's defense.",
    outcome:
      "Speers dropped Mixon at 2:06 p.m. Central the same day. Mixon scored zero points for the roster, and the $20 FAAB was not refunded. Speers added Dohnte Meyers for free one minute later.",
    status: "Resolved — zero points, zero roster days and $20 gone.",
    links: [
      {
        label: "The Unbeaten Table Has Two Seats.",
        href: "/issues/2026/week-4",
      },
      {
        label: "View the Hall of Shame →",
        href: "/hall-of-shame#joe-mixon-faab-2026",
      },
    ],
  },
  {
    id: "speers-week-5-picks-2026",
    placeholder: false,
    quote: "The Week 5 picks went 4–2, moving the published 2026 record to 17–7.",
    isQuote: false,
    owner: "Dalton Speers",
    date: "2026 · Week 5",
    updateLabel: "Outcome recorded",
    updateDate: "October 14, 2026",
    context: "The Week 4 issue picked Kyle, JP, Joel, Alex, Speers and Jacob to win their Week 5 matchups.",
    outcome: "Kyle, Alex, Speers and Jacob won. Matt beat the JP pick by 40.12, and Hutch beat the Joel pick by 35.04. The published season record moves from 13–5 to 17–7.",
    status: "Resolved — 4–2 for the week, 17–7 for the season.",
    links: [
      {
        label: "The Week 5 picks",
        href: "/issues/2026/week-4"
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5"
      }
    ]
  },
  {
    id: "speers-season-funeral-week-5-2026",
    placeholder: false,
    quote: "My season is fucked anyways",
    owner: "Dalton Speers",
    date: "October 7, 2026",
    updateLabel: "Outcome recorded",
    updateDate: "October 14, 2026",
    context: "Speers posted this in league chat after spending $20 on Joe Mixon and dropping him the same day. The Week 4 issue preserved the quote.",
    outcome: "The next completed matchup produced 202.53 points and a 121.64-point win over Brandon. Speers is still 2–3 and ninth in the standings. The receipt resolves the four-day funeral, not the season’s eventual outcome.",
    status: "Resolved — premature funeral; season still open.",
    links: [
      {
        label: "The original chat receipt",
        href: "/issues/2026/week-4"
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5"
      }
    ]
  },
  {
    id: "matt-two-week-rebound-2026",
    placeholder: false,
    quote: "Matt followed 159.39 with 158.97 and won both games.",
    isQuote: false,
    owner: "Matt Choice",
    date: "2026 · Weeks 4–5",
    updateLabel: "Latest update",
    updateDate: "October 14, 2026",
    context: "Matt ranked eleventh in total scoring after three weeks, with 280.63 points. Week 4’s 159.39 and 78.25-point win prompted an upward correction.",
    outcome: "Week 5 added 158.97 and a 40.12-point win over JP. The two-week total is a league-high 318.36. Matt is 3–2 and rises to fifth in the Week 5 power rankings, while his season point total remains ninth.",
    status: "Open — two-week rebound established; season continues.",
    links: [
      {
        label: "The Week 4 correction",
        href: "/issues/2026/week-4"
      },
      {
        label: "The Unbeaten Table Has One Seat.",
        href: "/issues/2026/week-5"
      }
    ]
  },
];
