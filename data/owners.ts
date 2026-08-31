import type { Owner } from "@/lib/types";

// `facts` and `pcmCrew` are private editorial context for writing issues —
// personality notes, friendships, rivalries, running jokes. They are not
// rendered on the public site. See the Owner type for details.
export const owners: Owner[] = [
  {
    slug: "jacob-loughman",
    ownerName: "Jacob Loughman",
    teamName: "The Dog",
    pcmCrew: false,
    founding: true,
    facts: [
      "Active and competitive.",
      "Not part of the original PCM high school group.",
      "Won the 2025 championship over Deco.",
    ],
  },
  {
    slug: "evan-decovich",
    ownerName: 'Evan "Deco" DeCovich',
    teamName: "Drunken Monkeys",
    pcmCrew: false,
    founding: true,
    facts: [
      "Close friends with much of the league.",
      "Took over another owner's team around 2023.",
      "Built one of the strongest current rosters.",
      "Won the 2023 championship over Jacob.",
      "Lost the 2024 championship to Dalton.",
      "Lost the 2025 championship to Jacob.",
      "Has appeared in three straight championship games.",
    ],
  },
  {
    slug: "hutch-burns",
    ownerName: "Hutch Burns",
    teamName: "hburns",
    pcmCrew: true,
    founding: true,
    facts: [
      "Tries hard.",
      "Long-running reputation for not being especially good at fantasy football.",
      "Very close with the league.",
    ],
  },
  {
    slug: "joel-wiggins",
    ownerName: "Joel Wiggins",
    teamName: "Amon Ra Doggin",
    pcmCrew: true,
    founding: true,
    facts: [
      "Commissioner.",
      "Very active.",
      "Constantly introduces polls, rule ideas, and ways to keep the league interesting.",
      "Won the 2020 championship over Sam.",
    ],
  },
  {
    slug: "alex-amadeo",
    ownerName: "Alex Amadeo",
    teamName: "Domestic Abusers",
    pcmCrew: true,
    founding: true,
    facts: [
      "Known for taking forever to do almost anything.",
      "Generally a good fantasy football player.",
      "Brandon and Alex tend to fight like brothers.",
    ],
  },
  {
    slug: "kyle-lucas",
    ownerName: "Kyle Lucas",
    teamName: "Kylelucas28",
    pcmCrew: false,
    founding: true,
    facts: [
      "Infamously drafted Baker Mayfield in the first round of the founding dynasty startup draft.",
      "Has never lived it down.",
      "Often associated with questionable fantasy decisions.",
      "Generally laid-back.",
    ],
  },
  {
    slug: "matt-choice",
    ownerName: "Matt Choice",
    teamName: "'21",
    pcmCrew: false,
    founding: true,
    facts: [
      "Very active.",
      "Loves trades.",
      "Constantly makes moves.",
      "Won the 2021 championship over Joel by less than one point.",
    ],
  },
  {
    slug: "dalton-speers",
    ownerName: "Dalton Speers",
    teamName: "3rdDownConversionTherapy",
    pcmCrew: false,
    founding: true,
    facts: [
      "Newsletter author.",
      "Former co-commissioner.",
      "Still consulted by Joel on league changes.",
      "Very active in league chat.",
      "Won championships in 2019 and 2024.",
      "Huge Packers fan.",
    ],
  },
  {
    slug: "josh-paul",
    ownerName: "Josh Paul",
    teamName: "#TrustTheProcess",
    pcmCrew: false,
    founding: true,
    facts: ["Founding league member.", "Active."],
  },
  {
    slug: "brandon-reeve",
    ownerName: "Brandon Reeve",
    teamName: "brandonreeve",
    pcmCrew: true,
    founding: true,
    facts: [
      "Frequently gets teased.",
      "Known for verbally agreeing to trades and then coming back asking for more.",
      "Can be fiery and easy to rile up.",
      "Huge Chiefs fan.",
    ],
  },
  {
    slug: "sam-munson",
    ownerName: "Sam Munson",
    teamName: "King Henry Hill",
    pcmCrew: true,
    founding: true,
    facts: [
      "Major trash talker.",
      "Historically a strong fantasy player.",
      "Currently in more of a rebuilding phase.",
      "Won the 2022 championship over Joel.",
      "Huge Chiefs fan.",
    ],
  },
  {
    slug: "jordan-vanroekel",
    ownerName: 'Jordan "Slyk" VanRoekel',
    teamName: "jordo41",
    pcmCrew: true,
    founding: true,
    facts: [
      "Trash talker.",
      "Huge Raiders fan.",
      "Farmer in small-town Iowa.",
      "Limited fantasy success historically.",
      "Never won a championship.",
    ],
  },
];

export function getOwnerBySlug(slug: string) {
  return owners.find((owner) => owner.slug === slug);
}
