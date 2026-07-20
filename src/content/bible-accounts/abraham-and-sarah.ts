import type { BibleAccount } from "./types";

const abrahamAndSarah: BibleAccount = {
  id: "abraham-and-sarah",
  name: "Abraham & Sarah",
  title: "The promise that took decades",
  emotionTags: ["waiting"],
  lifeSituations: [
    "waiting-on-god",
    "infertility",
    "promises-of-god",
    "old-age",
  ],
  overview:
    "God promised Abram he would become the father of a great nation, but Abram and his wife Sarai remained childless into old age. When Sarai grew impatient, she gave her servant Hagar to Abram to have a child through her instead — a decision that caused lasting family conflict. Twenty-five years after the promise was first made, when Abraham was 100 and Sarah was 90, they had their own son, Isaac, whose name means \"he laughs,\" after Sarah laughed at the idea of having a child so late in life.",
  whyRelevant:
    "The promise to Abraham and Sarah didn't just take a while — it took decades, long enough that Sarah initially laughed at the idea it could still happen. Their account speaks to a wait so long it stops feeling realistic, and shows both the strain that comes from trying to force an outcome and God still keeping his word later than expected.",
  fullBibleReference: "Genesis 15; Genesis 17-18; Genesis 21:1-7",
  keyScriptures: [
    {
      reference: "Genesis 15:5–6",
      text: "He took him outside and said, “Look up at the sky and count the stars...” Abram believed the Lord, and he credited it to him as righteousness.",
    },
    {
      reference: "Genesis 18:13–14",
      text: "The Lord said to Abraham, “Why did Sarah laugh?... Is anything too hard for the Lord?”",
    },
    {
      reference: "Genesis 21:1–2",
      text: "Sarah became pregnant and bore a son to Abraham in his old age, at the very time God had promised him.",
    },
  ],
  reflectionQuestions: [
    "The promise to Abraham and Sarah took over two decades to be fulfilled. What promise or hope have you been waiting on far longer than you expected?",
    "Sarah laughed at the idea that her wait could still end well. Where has your own hope started to feel unrealistic?",
    "Sarah's impatience led to a decision that caused lasting conflict. Where might impatience be tempting you to force an outcome rather than wait?",
  ],
  prayerPrompt:
    "God, like Abraham and Sarah, I've been waiting a long time, and it's starting to feel unrealistic. Help me keep believing you without trying to force what only you can do.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "waiting",
    "infertility",
    "too old",
    "promise",
    "impossible",
    "longing for a child",
  ],
  scenes: [
    {
      id: "a-promise-under-the-stars",
      title: "A promise under the stars.",
      narrative:
        "God told Abram to look up at the sky and count the stars, promising his offspring would be that numerous. Abram believed the Lord.",
      scriptureReferences: [
        { reference: "Genesis 15:5–6", text: "“Look up at the sky and count the stars...” Abram believed the Lord, and he credited it to him as righteousness." },
      ],
    },
    {
      id: "taking-matters-into-their-own-hands",
      title: "Taking matters into their own hands.",
      narrative:
        "Years passed with no child. Sarai gave her servant Hagar to Abram to have a child through her instead — a decision that caused lasting family conflict.",
      scriptureReferences: [
        { reference: "Genesis 16:2–3", text: "Sarai said to Abram, “The Lord has kept me from having children. Go, sleep with my slave; perhaps I can build a family through her.”" },
      ],
    },
    {
      id: "sarah-laughs",
      title: "Sarah laughs.",
      narrative:
        "When the Lord told Abraham that Sarah would have a son within the year, Sarah, listening at the tent door, laughed to herself — she was ninety years old.",
      scriptureReferences: [
        { reference: "Genesis 18:12", text: "So Sarah laughed to herself as she thought, “After I am worn out and my lord is old, will I now have this pleasure?”" },
      ],
    },
    {
      id: "is-anything-too-hard-for-the-lord",
      title: "\"Is anything too hard for the Lord?\"",
      narrative:
        "God asked why Sarah had laughed, and responded to her doubt with a direct question, reaffirming the promise.",
      scriptureReferences: [
        { reference: "Genesis 18:14", text: "Is anything too hard for the Lord? I will return to you at the appointed time... and Sarah will have a son." },
      ],
    },
    {
      id: "isaac-is-born",
      title: "Isaac is born.",
      narrative:
        "At the exact time God had promised, Sarah became pregnant and bore a son in her old age. They named him Isaac — \"he laughs.\"",
      scriptureReferences: [
        { reference: "Genesis 21:2", text: "Sarah became pregnant and bore a son to Abraham in his old age, at the very time God had promised him." },
      ],
    },
  ],
};

export default abrahamAndSarah;
