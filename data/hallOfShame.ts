import type { HallOfShameEntry } from "@/lib/types";

export const hallOfShameEntries: HallOfShameEntry[] = [
  {
    id: "baker-mayfield-2019",
    title: "The First-Round Baker Mayfield Pick",
    owner: "Kyle Lucas",
    date: "2019",
    description:
      "At the original dynasty startup draft, Kyle Lucas drafted Baker Mayfield in the first round. He has never lived it down.",
  },
  {
    id: "supreme-commissioner-2026",
    title: "The Supreme Commissioner",
    owner: "Joel Wiggins",
    date: "2026 · Week 1",
    description: [
      "Joel rewrote the scoring system. I ranked him seventh. He beat me 163.02–120.15.",
      "The Ministry of Power Rankings has since issued a correction.",
      "Six-point passing touchdowns, one-point interceptions, and a portrait worthy of the new administration. Welcome to Joel's new America.",
      "Week 2 update — September 23, 2026: Joel followed the portrait with a league-high 170.90 and an 82.02-point win over Sam. He is 2–0 and has climbed to second in the power rankings. The exhibit keeps acquiring evidence.",
      "Week 3 update — September 30, 2026: Kyle beat Joel 140.49–139.48. The regime fell by 1.01, despite Joel posting the week's third-highest score. He remains second in the power rankings. The portrait stays; the unbeaten record does not.",
    ],
    image: {
      src: "/images/joel-supreme-commissioner.png",
      alt: "Satirical league meme depicting Joel Wiggins as Kim Jong Un at a podium.",
    },
    links: [
      {
        label: "The Commissioner Would Like His Apology",
        href: "/issues/2026/week-1",
      },
      {
        label: "Week 2: Five Correct Picks. One Personal Problem.",
        href: "/issues/2026/week-2",
      },
      {
        label: "Week 3: The Regime Falls by 1.01.",
        href: "/issues/2026/week-3",
      },
    ],
  },
  {
    id: "joe-mixon-faab-2026",
    title: "$20 for 12 Hours of Joe Mixon",
    owner: "Dalton Speers",
    date: "2026 · Week 4",
    description: [
      "Seattle had already declined to sign Joe Mixon following a physical. Speers still won the Wednesday waiver claim for $20, dropping San Francisco's defense.",
      "At 2:06 p.m. Central that same day, Speers dropped Mixon. The transaction produced zero points, no FAAB refund and one immediate admission in league chat: ‘That was a ridiculous $20 FAAB spend.’",
      "The player is gone. The $20 is gone. The receipt is permanent.",
    ],
    links: [
      {
        label: "Week 4: The Unbeaten Table Has Two Seats.",
        href: "/issues/2026/week-4",
      },
      {
        label: "View the receipt →",
        href: "/receipts#speers-joe-mixon-faab-2026",
      },
    ],
  },
];
