import type { Champion } from "@/lib/types";

export const champions: Champion[] = [
  {
    year: 2019,
    champion: "Dalton Speers",
    championSlug: "dalton-speers",
    runnerUp: "Sam Munson",
  },
  {
    year: 2020,
    champion: "Joel Wiggins",
    championSlug: "joel-wiggins",
    runnerUp: "Sam Munson",
  },
  {
    year: 2021,
    champion: "Matt Choice",
    championSlug: "matt-choice",
    runnerUp: "Joel Wiggins",
    note: "Decided by less than one point.",
  },
  {
    year: 2022,
    champion: "Sam Munson",
    championSlug: "sam-munson",
    runnerUp: "Joel Wiggins",
  },
  {
    year: 2023,
    champion: "Evan DeCovich",
    championSlug: "evan-decovich",
    runnerUp: "Jacob Loughman",
  },
  {
    year: 2024,
    champion: "Dalton Speers",
    championSlug: "dalton-speers",
    runnerUp: "Evan DeCovich",
  },
  {
    year: 2025,
    champion: "Jacob Loughman",
    championSlug: "jacob-loughman",
    runnerUp: "Evan DeCovich",
    teamNameAtTime: "The Dog",
  },
];

// Keyed by owner slug — used to link a championship count to an Owner record,
// since Owner.ownerName may include a nickname that champion/runnerUp strings don't.
export function championshipCountsBySlug(): Record<string, number> {
  return champions.reduce<Record<string, number>>((counts, entry) => {
    counts[entry.championSlug] = (counts[entry.championSlug] ?? 0) + 1;
    return counts;
  }, {});
}
