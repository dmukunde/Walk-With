import type { BibleAccount } from "./types";

const david: BibleAccount = {
  id: "david",
  name: "David",
  title: "The king who prayed his fear out loud",
  emotionTags: ["waiting", "fearful", "anxious"],
  lifeSituations: ["fear", "waiting-for-promises", "persecution", "trusting-god"],
  overview:
    "Samuel anointed David as Israel's next king while he was still a young shepherd (1 Samuel 16), but David then spent years fleeing King Saul, who wanted him dead, before he ever took the throne. Psalm 34 comes from within that waiting period: it was written after David escaped Gath by pretending to be insane in front of King Achish (1 Samuel 21:10–15). In it, David writes that he sought the Lord and was delivered from his fears, invites others to \"taste and see that the Lord is good,\" and says the Lord is close to the brokenhearted.",
  whyRelevant:
    "David was already anointed king years before he actually became king, and spent that entire waiting period being hunted by Saul — Psalm 34 was written in the middle of that danger, not after it ended. His account speaks to fear and anxiety that shows up specifically during a long wait for something you've already been promised.",
  fullBibleReference: "1 Samuel 21:10-15; Psalm 34",
  keyScriptures: [
    {
      reference: "Psalm 34:4",
      text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
    },
    {
      reference: "Psalm 34:17–18",
      text: "The righteous cry out, and the Lord hears them... The Lord is close to the brokenhearted.",
    },
  ],
  reflectionQuestions: [
    "David wrote this while actually in danger, not after everything was resolved. What fear are you carrying that feels too big to say out loud?",
    "He was anointed king long before he became king. What have you already been promised or called to that hasn't arrived yet?",
    "The psalm says God is close to the brokenhearted. Where do you need that nearness today?",
  ],
  prayerPrompt:
    "God, like David, I bring you a real fear, not a tidy one. Thank you that you don't wait for me to calm down before drawing near. Help me trust that you're close, even in the waiting.",
  takeaway:
    "David's psalm was written from inside real danger, not after it passed — honesty with God doesn't require the situation to be resolved first.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "anxious",
    "anxiety",
    "worry",
    "worried",
    "nervous",
    "panic",
    "stress",
    "stressed",
    "racing",
    "waiting",
    "afraid",
    "fear",
    "fearful",
  ],
  scenes: [
    {
      id: "anointed-but-not-yet-king",
      title: "Anointed, but not yet king.",
      narrative:
        "Samuel anointed David as Israel's next king while he was still a shepherd boy, the youngest of his brothers. Nothing about his circumstances changed right away — he went back to tending sheep.",
      scriptureReferences: [
        { reference: "1 Samuel 16:12–13", text: "Samuel took the horn of oil and anointed him in the presence of his brothers, and from that day on the Spirit of the Lord came powerfully upon David." },
      ],
    },
    {
      id: "hunted-by-saul",
      title: "Hunted by Saul.",
      narrative:
        "David spent years fleeing King Saul, who wanted him dead out of jealousy, moving from place to place with no settled home.",
      scriptureReferences: [
        { reference: "1 Samuel 23:14", text: "David stayed in the wilderness strongholds... Day after day Saul searched for him, but God did not give David into his hands." },
      ],
    },
    {
      id: "feigning-madness-before-achish",
      title: "Feigning madness before Achish.",
      narrative:
        "Fleeing to Gath, David realized he was in danger there too. He pretended to be insane, scratching at the city gate and letting saliva run down his beard, until King Achish sent him away.",
      scriptureReferences: [
        { reference: "1 Samuel 21:12–13", text: "David... pretended to be insane in their presence; and while he was in their hands he acted like a madman." },
      ],
    },
    {
      id: "writing-psalm-34",
      title: "Writing Psalm 34.",
      narrative:
        "In the aftermath, David wrote a psalm of praise, saying he sought the Lord and was delivered from all his fears, and inviting others to \"taste and see that the Lord is good.\"",
      scriptureReferences: [
        { reference: "Psalm 34:4", text: "I sought the Lord, and he answered me; he delivered me from all my fears." },
        { reference: "Psalm 34:8", text: "Taste and see that the Lord is good." },
      ],
    },
    {
      id: "close-to-the-brokenhearted",
      title: "Close to the brokenhearted.",
      narrative:
        "The psalm ends with the assurance that the Lord is close to the brokenhearted and saves those who are crushed in spirit — words written from inside the danger, not after it was safely over.",
      scriptureReferences: [
        { reference: "Psalm 34:17–18", text: "The righteous cry out, and the Lord hears them... The Lord is close to the brokenhearted." },
      ],
    },
  ],
};

export default david;
