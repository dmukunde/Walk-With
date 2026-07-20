import type { BibleAccount } from "./types";

const hannah: BibleAccount = {
  id: "hannah",
  name: "Hannah",
  title: "The woman whose waiting became a prayer",
  emotionTags: ["waiting"],
  lifeSituations: ["infertility", "answered-prayer", "vows", "waiting-on-god"],
  overview:
    "Hannah was unable to have children and was provoked for it, year after year, by her husband's other wife. In deep anguish she prayed silently in the temple, moving her lips without sound, and the priest Eli mistook her for drunk. She vowed that if God gave her a son, she would give him back to the Lord. God answered her prayer with a son, Samuel, and once he was weaned, Hannah brought him to serve at the temple as she had promised.",
  whyRelevant:
    "Hannah's waiting was long, public, and misunderstood — she prayed for years before an answer came, and was misjudged in the middle of it. Her account speaks to anyone whose waiting has gone on long enough to feel hopeless.",
  fullBibleReference: "1 Samuel 1-2:11",
  keyScriptures: [
    {
      reference: "1 Samuel 1:10",
      text: "In her deep anguish, Hannah prayed to the Lord, weeping bitterly.",
    },
    {
      reference: "1 Samuel 1:27",
      text: "I prayed for this child, and the Lord has granted what I asked of him.",
    },
  ],
  reflectionQuestions: [
    "Hannah kept praying year after year without an answer. What have you been waiting for that long?",
    "Eli misjudged her prayer as drunkenness. Who might misunderstand your waiting, and how might you keep going anyway?",
    "When her prayer was answered, Hannah kept the vow she'd made. What would faithfulness look like for you in this season of waiting?",
  ],
  prayerPrompt:
    "Lord, you saw Hannah's tears year after year. You see mine too. Keep my heart honest before you while I wait, even when I can't see how long it will be.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "waiting",
    "wait",
    "stuck",
    "delay",
    "patience",
    "longing",
    "infertility",
    "trying to have a baby",
    "hope",
  ],
  scenes: [
    {
      id: "the-pain-of-waiting",
      title: "The pain of waiting.",
      narrative:
        "Hannah was one of two wives of Elkanah. The other wife, Peninnah, had children, but the Lord had closed Hannah's womb. Year after year, when the family went up to worship at Shiloh, Peninnah provoked Hannah until she wept and could not eat.",
      scriptureReferences: [
        { reference: "1 Samuel 1:2", text: "Peninnah had children, but Hannah had none." },
        { reference: "1 Samuel 1:6–7", text: "Her rival kept provoking her in order to irritate her... Hannah wept and would not eat." },
      ],
    },
    {
      id: "her-prayer-at-the-tabernacle",
      title: "Her prayer at the tabernacle.",
      narrative:
        "Hannah rose and went to the tabernacle to pray. In deep anguish she wept bitterly and poured out her soul to the Lord, praying silently — her lips moving, but no sound coming out. She vowed that if God would give her a son, she would give him back to the Lord for all the days of his life.",
      scriptureReferences: [
        { reference: "1 Samuel 1:10", text: "In her deep anguish, Hannah prayed to the Lord, weeping bitterly." },
        { reference: "1 Samuel 1:11", text: "I will give him to the Lord for all the days of his life." },
      ],
    },
    {
      id: "eli-misunderstands-her",
      title: "Eli misunderstands her.",
      narrative:
        "Eli the priest was sitting near the doorpost of the temple and watched her mouth. Because she was praying silently, he assumed she was drunk and rebuked her. Hannah explained she had been pouring out her grief and anguish before the Lord, not drinking wine.",
      scriptureReferences: [
        { reference: "1 Samuel 1:14", text: "Eli said to her, “How long will you keep on being drunk? Put away your wine.”" },
        { reference: "1 Samuel 1:15–16", text: "“I was pouring out my soul to the Lord... I have been praying here out of my great anguish and grief.”" },
      ],
    },
    {
      id: "she-leaves-encouraged",
      title: "She leaves encouraged.",
      narrative:
        "Eli told her, \"Go in peace, and may the God of Israel grant what you have asked of him.\" Hannah replied, \"May your servant find favor in your eyes,\" and she went her way, ate something, and her face was no longer downcast.",
      scriptureReferences: [
        { reference: "1 Samuel 1:17–18", text: "“Go in peace, and may the God of Israel grant what you have asked of him.” ... Then she went her way... and her face was no longer downcast." },
      ],
    },
    {
      id: "jehovah-answers-her-prayer",
      title: "Jehovah answers her prayer.",
      narrative:
        "In the course of time, Hannah became pregnant and gave birth to a son. She named him Samuel, saying, \"Because I asked the Lord for him.\" Once he was weaned, she brought him to the tabernacle and gave him to the Lord for as long as he lived, just as she had vowed.",
      scriptureReferences: [
        { reference: "1 Samuel 1:20", text: "She gave him the name Samuel, saying, “Because I asked the Lord for him.”" },
        { reference: "1 Samuel 1:27–28", text: "I prayed for this child, and the Lord has granted what I asked of him. So now I give him to the Lord." },
      ],
    },
  ],
};

export default hannah;
