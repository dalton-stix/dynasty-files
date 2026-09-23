import type { RankingPeriod } from "@/lib/types";

// Each entry is one published ranking period. `rankings` is the ordered list
// of slots — rank is just position in the array (index + 1).
//
// `ownerSlug` is the permanent identity used to track a person across
// periods (movement is derived from it). `teamName` is a point-in-time
// snapshot of what that team was called when THIS period was published —
// it is never re-resolved from owners.ts, so renaming a team in owners.ts
// only affects current/future display and never rewrites how a past period
// reads. An optional `note` is a short editorial blurb explaining that
// team's move; leave it out where there's nothing to say.
//
// Movement is never stored here; it's always derived by comparing a period
// against the immediately previous one (see lib/rankings.ts) so the numbers
// can't drift out of sync with the actual rankings.
//
// To publish a new week, add a new entry with the next `order` value and
// snapshot each team's current name into `teamName` as of that week.
export const rankingPeriods: RankingPeriod[] = [
  {
    season: 2026,
    period: "preseason",
    label: "Preseason",
    date: "2026-08-31",
    order: 0,
    rankings: [
      { ownerSlug: "evan-decovich", teamName: "Drunken Monkeys" },
      { ownerSlug: "jacob-loughman", teamName: "The Dog" },
      { ownerSlug: "dalton-speers", teamName: "3rdDownConversionTherapy" },
      { ownerSlug: "alex-amadeo", teamName: "Domestic Abusers" },
      { ownerSlug: "kyle-lucas", teamName: "Kylelucas28" },
      { ownerSlug: "hutch-burns", teamName: "hburns" },
      { ownerSlug: "joel-wiggins", teamName: "Amon Ra Doggin" },
      { ownerSlug: "brandon-reeve", teamName: "brandonreeve" },
      { ownerSlug: "matt-choice", teamName: "'21" },
      { ownerSlug: "josh-paul", teamName: "#TrustTheProcess" },
      { ownerSlug: "jordan-vanroekel", teamName: "jordo41" },
      { ownerSlug: "sam-munson", teamName: "King Henry Hill" },
    ],
  },
  {
    season: 2026,
    period: "week-1",
    label: "Week 1",
    date: "2026-09-16",
    order: 1,
    rankings: [
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "The defending champion posted the best score, and the veteran-heavy plan immediately worked. He gets the top spot. Everyone else gets to look at Derrick Henry and Gibbs and hope for scheduling mercy.",
      },
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "This is Jacob moving past him, not Deco doing anything wrong. A 140.98-point opener with Chase at 2.70 is a fairly strong argument against panic.",
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "Yes, four spots. He beat me badly enough that leaving him near seventh would turn an opinion into evidence of a personal problem. Walker and Javonte gave the roster a hell of an opening statement.",
      },
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "A solid win, fourth in scoring, and enough production outside the lineup to suggest options. Alex remains exactly where he usually likes to be: good enough to matter while other people create the noise.",
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "Allen, Goedert and a comfortable win. I'm keeping the probability investigation open, but this week's evidence was disappointingly legitimate.",
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy",
        note: "The preseason's third-best team has been instructed to demonstrate that ranking in public. Watson was excellent. The rest of us have received the email.",
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "Jeanty's 32.54 keeps me interested. Waddle's 0.95 keeps me grounded. The playoff prediction survives one loss; it does not come with unlimited extensions.",
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "Sixth in scoring while playing Jacob is a better opener than the record suggests. Bijan and Olave produced, and Coker gave him something worth considering. The process has submitted evidence.",
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 '21",
        note: "Congratulations on the win. Tenth in weekly scoring doesn't persuade me to move him up from ninth here. I'm sure the roster will have several opportunities to appeal through trade before November.",
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "The young talent is still interesting. The 86.47 was not. I'm revising the present, not issuing a final verdict on the rookie class.",
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "Montgomery showed up, Pitts didn't, and a three-move alternate universe isn't a win. There is enough here to be annoying. Let's try converting that into a record.",
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "Still rebuilding. Still dangerous to somebody's season eventually. For now, please get McPherson some help.",
      },
    ],
  },
  {
    season: 2026,
    period: "week-2",
    label: "Week 2",
    date: "2026-09-23",
    order: 2,
    rankings: [
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "The defending champion leads total scoring and has finished first and second in the two weekly scoring lists. Joel is close. The trophy and the 344.19 keep Jacob here.",
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "Two straight weeks above 160. Walker has started well, the veteran receivers just went off, and ranking him below second now would require me to stop looking at the results. The portrait stays.",
      },
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "Still undefeated. Still loaded. I like the depth and the ceiling enough to keep him narrowly ahead of Alex, but Joel has earned his way past. Moving down after scoring 147.60 is annoying; so is competing with this top group.",
      },
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "Third in cumulative scoring, 2–0, and JSN just delivered 41.25. He is close enough to Deco that the order deserves another look next week. For now, the next useful evidence is a matchup with unbeaten Hutch.",
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "Allen has produced 89.08 in two starts. Hutch keeps winning comfortably, even with this week's scoring dropping to sixth. Alex will give us a better read on the supporting cast.",
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "Sixth in Week 1 scoring, fifth in Week 2, and now a win to show for it. Goff, Smith and Olave earned the promotion. Beating the editor expedited the paperwork.",
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "The record is ugly; the first two opponents are a combined 4–0. Kyle is seventh in season scoring, and the quarterback decision was correct. There is enough here to keep the playoff flag planted, though the flag is taking weather damage.",
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy🏆",
        note: "Third in August. Sixth last week. Eighth today. At this rate, the rankings page will need a basement. I need a win more than another explanation of my roster's theoretical appeal.",
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 ’21",
        note: "Taylor is doing his job. The team is ninth in cumulative scoring. The 1–1 record keeps the season perfectly workable, but the points aren't asking for a promotion.",
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "An 82.79 doesn't earn a celebration. This move reflects Brandon sliding below him, plus Jordan's better two-week production. There is very little champagne involved in tenth place at 0–2.",
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "Hampton supplied a bright spot. Two straight weeks below 90 supplied the ranking. The rebuild gets patience; the weekly column gets the actual score.",
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "The score improved by 26.07. The opponent improved by 29.92. That's a brutal way to make progress. A Week 3 win over me would supply considerably more satisfying material.",
      },
    ],
  },
];
