import type { Champion } from "@/lib/types";

export const champions: Champion[] = [
  { year: 2019, champion: "Dalton Speers", runnerUp: "Sam Munson" },
  { year: 2020, champion: "Joel Wiggins", runnerUp: "Sam Munson" },
  {
    year: 2021,
    champion: "Matt Choice",
    runnerUp: "Joel Wiggins",
    note: "Decided by less than one point.",
  },
  { year: 2022, champion: "Sam Munson", runnerUp: "Joel Wiggins" },
  { year: 2023, champion: "Evan DeCovich", runnerUp: "Jacob Loughman" },
  { year: 2024, champion: "Dalton Speers", runnerUp: "Evan DeCovich" },
  { year: 2025, champion: "Jacob Loughman", runnerUp: "Evan DeCovich" },
];

export function championshipCounts(): Record<string, number> {
  return champions.reduce<Record<string, number>>((counts, entry) => {
    counts[entry.champion] = (counts[entry.champion] ?? 0) + 1;
    return counts;
  }, {});
}
