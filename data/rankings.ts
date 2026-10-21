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
  {
    season: 2026,
    period: "week-3",
    label: "Week 3",
    date: "2026-09-30",
    order: 3,
    rankings: [
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "Three wins, two weekly highs and 491.39 total points. Gibbs just supplied 40.50, and Jacob is 32–1 in all-play. The defending champion keeps making the evidence irritatingly easy to interpret.",
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "The week's third-best score lost by 1.01. That hurts the record, but 473.40 total points still rank second. Kyle interrupted the administration; he didn't make this roster stop being good.",
      },
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "Still 3–0, with 421.23 total points and enough receiving talent to survive uneven weeks. The $56 Ollie Gordon purchase adds a possible backfield option. The workload still has to justify the invoice.",
      },
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "Three wins, and JSN has supplied 75.11 over the last two weeks. Burrow and Purdy cover the quarterback position without Dart, but Hall and Puka's availability needs watching. Now comes unbeaten Jacob, who is considerably less accommodating than the standings page.",
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "The 140.49 was second in weekly scoring and enough to end Joel's unbeaten start. Kyle's first three opponents are a combined 8–1; he caused the one loss. Reed's season-ending injury hurts the depth, but Bowers and Cook give this team a real argument.",
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "Bijan delivered 38.62, but 120.68 wasn't enough against Jordan. Fifth in cumulative scoring still gives the 1–2 team a case. Fannin's unused 22.35 offers a lineup discussion, not a reason to dismantle the process.",
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "The record is still 2–1. The 83.01 and 340.91 season total make the supporting-cast question harder to dodge. When Allen scores 20.60 instead of nearly 48, somebody else has to answer the phone.",
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "A 133.82-point first win, with Garrett Wilson and Juwan Johnson doing real work. Baker's injury complicates the next assignment, but Geno Smith is already on the roster. Jordan has an actual replacement to go with the draft-pick portfolio.",
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy🏆",
        note: "The first win arrived with the week's ninth-best score. Achane's season-ending injury now removes a major piece of the lineup. The record improved; the next few weeks got harder.",
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "The 0–3 remains ugly, but 118.89 was a 37.97-point improvement. London, Love and Skattebo gave the young roster something useful to show. One better week earns a step up, not a victory parade.",
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 ’21",
        note: "Scores of 108.26, 93.88 and 78.49 have left Matt eleventh in total points at 280.63. The transactions remain lively. The starting lineup needs to participate in the activity.",
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "Darnold supplied 38.74 and the team still finished at 89.33. Getting the week's best starting-quarterback score should buy more relief than this. At 0–3, the rest of the lineup needs to turn a big individual day into a win.",
      },
    ],
  },
  {
    season: 2026,
    period: "week-4",
    label: "Week 4",
    date: "2026-10-07",
    order: 4,
    rankings: [
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "Four wins, 581.15 points and 159.92 in a week when Chase barely contributed. The bench produced enough raw points to frighten several starting lineups. Chase's concussion matters; the depth keeps Deco on top while we wait.",
      },
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "Alex beat the defending champion and moved to 4–0. Burrow, Puka, Higgins and LaPorta all cleared 20. The running backs remain the obvious soft spot, but the receiver and quarterback depth has been strong enough to cover it.",
      },
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "One 9.53-point loss does not erase a league-high 622.77 or a 38–6 all-play record. The reigning champion is still the most productive team through four weeks. He drops because two other excellent teams remain perfect.",
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "Second in points and back in the win column. Walker and Javonte combined for 63.48. Lamar's ankle creates a real downgrade for Week 5, but Lawrence gives Joel a usable replacement while the report develops.",
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "The weekly high moves JP to 2–2 and fifth in total scoring. Bijan, Kamara, Goff, Olave, Jameson and Brian Robinson all scored at least 15.70. That's a complete lineup, and Shipley now adds a possible short-term role behind Saquon's uncertainty.",
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "Two consecutive wins after the league's hardest opening pair. Bowers and the running backs keep the foundation useful, and the Moore injury was initially described as not long term. JP's 161.23 forces the one-place drop more than anything Kyle did wrong.",
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 ’21",
        note: "The week's third-best score and a 78.25-point win demand a correction. McMillan's 42.70 was the engine, and Maye's 34.80 on the bench gives Matt a quarterback decision. One huge week does not solve every earlier score; it does make eleventh indefensible.",
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "Two straight losses, 457.81 total points and now a week-to-week Saquon. Allen, Hubbard and the running-back depth keep Hutch competitive. The ceiling becomes harder to reach if the first-round engine is absent.",
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy🏆",
        note: "The Week 4 score ranked ninth, the record is 1–3 and the roster responded by purchasing unemployed Joe Mixon for $20 and cutting him hours later. Nabers remains a legitimate weekly advantage. The rest of the plan currently resembles a group project without assigned roles.",
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "Last in weekly scoring after a real Week 3 breakthrough. Coleman and Metcalf offered unused points, but the full lineup still lacked the firepower to approach Matt. The long-term draft capital is excellent. These rankings are about the team playing now.",
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "Four losses and the second-lowest Week 4 score. Stroud's bench points would have improved the total without changing the result. The young roster still has London, Hampton, Love and Skattebo, but it needs them to deliver together.",
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "Hockenson and Emanuel Wilson scored 50.83 outside the lineup while the starters stayed below 100. Sam remains last in total scoring and 0–4. The rebuild can be coherent and the weekly team can still be twelfth; both are allowed to be true.",
      },
    ],
  },
  {
    season: 2026,
    period: "week-5",
    label: "Week 5",
    date: "2026-10-14",
    order: 5,
    rankings: [
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "The last unbeaten team just scored 154.39. Alex is third in total scoring, fourth in all-play and has repeatedly covered the thin running-back room with elite production elsewhere. Five wins require the top spot."
      },
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "League-high 759.57 points, a 45–10 all-play record and a win over previously unbeaten Deco with zero from Mahomes. Jacob remains the strongest weekly scoring profile. Alex’s perfect record is the only reason this is second."
      },
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "The 7.23-point loss exposed lineup points but did not erase 710.72 or a 40–15 all-play mark. Stevenson now stands to benefit while Henderson is out, and Gordon finally produced in Deco’s starting lineup. The roster is still deep enough to remain in the top three."
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "Second in points and 42–13 in all-play. A 126.28 loss to a 161.32 opponent is not a collapse. Lawrence handled Lamar’s absence, but the ceiling still depends on how quickly the starting quarterback returns."
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 ’21",
        note: "Consecutive scores of 159.39 and 158.97 have changed the evidence. Maye’s 49.02 drove Week 5, and the lineup has now delivered two complete wins. Matt has moved from early-season emergency to legitimate top-half threat."
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "Three straight wins after opening against Alex and Deco, starting with the win that ended Joel’s unbeaten run. Cook and Bowers keep the foundation strong. Deebo’s hamstring remains a concern, but Kyle has earned his place in the top six. Three wins in a row should buy more than another arrow pointing down."
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "Hutch scored 161.32 without Saquon and ended a two-game slide. Allen and Jaylen Warren supplied 71.30 by themselves. Saquon’s status remains important, but Week 5 proved this roster is not one injury away from silence. The rebound earns a one-place climb; Kyle’s three-game streak keeps him just ahead."
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "JP remains fifth in all-play and fifth in total scoring, which is much stronger than the 2–3 record. The 118.85 loss, Shipley injury and Kamara’s 1.84 lower the immediate outlook. This is a three-place correction, not a declaration that the process failed."
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy🏆",
        note: "Scoring 202.53 usually causes a jump. Being 2–3 after declaring the season dead usually causes restraint. The roster showed the highest weekly ceiling in the league and now sits sixth in points. One spectacular Sunday earns belief; it does not rewrite four previous weeks."
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "Rodgers, Evans and Garrett Wilson gave Jordan a competitive top three, but the full lineup stayed 42.42 behind Alex. Montgomery’s groin adds another Week 6 question. The future picks remain excellent. The current team is 1–4."
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "The largest loss of the season was partly opponent-driven and partly another incomplete lineup. London remains productive, and Stroud offered bench points, but Brandon is 0–5 with the second-lowest total. Week 6 is the clearest opening yet."
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "The lowest weekly score, the lowest season total and now injuries to Henderson and Hockenson. The rebuild still has long-term pieces. The Week 6 roster has fewer healthy answers than it did before scoring 70.50."
      }
    ]
  },
  {
    season: 2026,
    period: "week-6",
    label: "Week 6",
    date: "2026-10-21",
    order: 6,
    rankings: [
      {
        ownerSlug: "alex-amadeo",
        teamName: "Domestic Abusers",
        note: "Six wins, a two-game lead and another complete 137.45. The roster has met each assignment without needing every star to explode. Puka may see more opportunity without Adams, though the Rams’ losses also affect the offense and defense Alex owns. The top spot is uncomplicated."
      },
      {
        ownerSlug: "joel-wiggins",
        teamName: "Amon Ra Doggin",
        note: "The weekly high and a 26.37-point win over Jacob break a near tie: 0.20 separates their season totals, and their all-play records match. Adams’ absence makes this a narrow call; Lawrence’s bye also means Joel needs a quarterback contingency if Lamar stays out. Amon-Ra, Golden and the running backs preserve the broader case. Winning the direct comparison earns a narrow edge, not immunity from the next injury report."
      },
      {
        ownerSlug: "jacob-loughman",
        teamName: "The Dog",
        note: "Still first in points and tied first in all-play. A 119.06 loss to the highest scorer is not a collapse. McCaffrey, Kittle and the deep running-back group keep Jacob close enough to reclaim second immediately. This is a small separation between two 4–2 contenders."
      },
      {
        ownerSlug: "kyle-lucas",
        teamName: "kylelucas28",
        note: "Four straight wins and the week’s third-highest score. Cook, Jeanty, Bowers and Stafford have built a repeatable foundation. The receiving injuries and Cook’s coming bye complicate Week 7, but four victories buy an actual promotion. The arrow finally matches the streak."
      },
      {
        ownerSlug: "evan-decovich",
        teamName: "Drunken Monkeys",
        note: "Still fourth in points, still deep at receiver, now coming off 74.47 and two straight losses. Hurts’ indefinite absence, Monangai’s uncertain status and Henderson’s return all change the immediate outlook. This roster has answers, but the top-three assumption needs new evidence."
      },
      {
        ownerSlug: "matt-choice",
        teamName: "🏆 ’21",
        note: "117.90 was respectable; losing McLaurin is the larger downgrade. Maye and Taylor remain a strong base, and Dell’s expected return plus Douglas’ arrival give Matt options without guaranteeing equal replacement production. The rebound survives one loss. The receiver room needs adjustment."
      },
      {
        ownerSlug: "hutch-burns",
        teamName: "hburns",
        note: "I am not demoting a team because 110.16 lost to 110.29. Hutch still has the slightly better all-play profile than mine. Saquon’s status matters, and the Buffalo bye removes Allen and Shakir for a week; Caleb Williams provides a quarterback alternative. A bad beat is not a roster collapse."
      },
      {
        ownerSlug: "dalton-speers",
        teamName: "3rdDownConversionTherapy🏆",
        note: "Two straight wins, 3–3 and sixth in points. The huge Week 5 ceiling has now been followed by an ordinary score that held up by almost nothing. Doubs’ IR move costs depth. I can move ahead of JP without claiming thirteen hundredths makes me better than Hutch."
      },
      {
        ownerSlug: "josh-paul",
        teamName: "#TrustTheProcess",
        note: "Two straight losses and 84.27 lower the immediate case, even with a 34–32 all-play record that remains stronger than 2–4. Brown has returned; Warren’s availability and Philadelphia’s quarterback change still matter. The process needs more than 1.64 from its most extensively documented investment."
      },
      {
        ownerSlug: "jordan-vanroekel",
        teamName: "jordo41",
        note: "The second win counts. The 90.92 and tenth-ranked season total still describe the current scoring profile. Evans, Mayfield and Montgomery need monitoring. Five 2027 firsts remain an excellent future asset; none can start against Joel on Sunday."
      },
      {
        ownerSlug: "brandon-reeve",
        teamName: "brandonreeve",
        note: "The first win ends a miserable stretch. Stroud and Loveland showed useful production, but 99.21 remains below the league’s weekly average. McConkey’s concussion and the Chargers’ bye make the next assignment harder. The stairwell is progress. It is not the penthouse."
      },
      {
        ownerSlug: "sam-munson",
        teamName: "King Henry Hill",
        note: "Henderson’s return is welcome, Tate supplied 17.50 and the young depth has future interest. The present remains 0–6, last in points and 7–59 in all-play. Sam needs several starters to improve together, not another isolated performance from the kicker."
      }
    ]
  },
];
