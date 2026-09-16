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
    ],
  },
];
