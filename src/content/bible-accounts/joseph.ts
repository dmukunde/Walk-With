import type { BibleAccount } from "./types";

const joseph: BibleAccount = {
  id: "joseph",
  name: "Joseph",
  title: "The one who was never alone in the overwhelm",
  emotionTags: ["waiting", "lonely", "overwhelmed"],
  lifeSituations: [
    "betrayal",
    "injustice",
    "forgiveness",
    "long-suffering",
    "favor",
  ],
  overview:
    "Joseph was sold into slavery in Egypt by his own brothers, falsely accused and imprisoned by his master's wife, and then forgotten for two more years by a cellmate he had helped. Genesis repeats the phrase \"the Lord was with him\" at several of these low points. Joseph was eventually elevated to second-in-command of Egypt, stored grain through a famine, and was later able to provide for the very brothers who had betrayed him.",
  whyRelevant:
    "Joseph's setbacks weren't a single crisis but one thing after another over years, cut off from his family in a foreign land, with long stretches — including two forgotten years in prison — where nothing seemed to change. His account speaks to being overwhelmed by accumulation, to isolation far from home, and to waiting on something you can't rush.",
  fullBibleReference: "Genesis 37; 39-45",
  keyScriptures: [
    {
      reference: "Genesis 39:2",
      text: "The Lord was with Joseph, and he prospered.",
    },
    {
      reference: "Genesis 39:21",
      text: "The Lord was with him; he showed him kindness and granted him favor in the eyes of the prison warden.",
    },
    {
      reference: "Genesis 41:1",
      text: "The chief cupbearer did not remember Joseph; he forgot him. ... When two full years had passed, Pharaoh had a dream.",
    },
    {
      reference: "Genesis 50:20",
      text: "You intended to harm me, but God intended it for good.",
    },
  ],
  reflectionQuestions: [
    "Joseph faced setback after setback over years, not one bad day. Which parts of your situation feel like they've piled up over time?",
    "Joseph was forgotten in prison for two more years after he'd already done someone a kindness. What does it feel like when your waiting seems to have no reason attached to it?",
    "Genesis keeps saying \"the Lord was with him,\" before anything had improved. What would it mean to believe that's true for you now, before you can see how things resolve?",
  ],
  prayerPrompt:
    "God, it's a lot right now, and I can't see how this resolves. I'm asking you to be present in the middle of it, the way you were with Joseph before anything had changed.",
  estimatedReadingTime: 6,
  searchKeywords: [
    "overwhelmed",
    "too much",
    "cant cope",
    "can't cope",
    "drowning",
    "overloaded",
    "everything at once",
    "betrayed",
    "waiting",
    "lonely",
    "forgotten",
  ],
  scenes: [
    {
      id: "sold-by-his-brothers",
      title: "Sold by his brothers.",
      narrative:
        "Jealous of Joseph and their father's favoritism, his brothers sold him into slavery to traders heading for Egypt.",
      scriptureReferences: [
        { reference: "Genesis 37:28", text: "They sold Joseph to the Ishmaelites for twenty shekels of silver, and they took him to Egypt." },
      ],
    },
    {
      id: "falsely-accused",
      title: "Falsely accused.",
      narrative:
        "In Egypt, Joseph rose to oversee his master Potiphar's household, but was falsely accused by Potiphar's wife and thrown into prison.",
      scriptureReferences: [
        { reference: "Genesis 39:20", text: "Joseph's master took him and put him in prison." },
      ],
    },
    {
      id: "forgotten-in-prison",
      title: "Forgotten in prison.",
      narrative:
        "Joseph correctly interpreted the dreams of two fellow prisoners, asking the one who would be restored to remember him — but the cupbearer forgot him for two more full years.",
      scriptureReferences: [
        { reference: "Genesis 40:23", text: "The chief cupbearer, however, did not remember Joseph; he forgot him." },
      ],
    },
    {
      id: "second-in-command-of-egypt",
      title: "Second-in-command of Egypt.",
      narrative:
        "When Pharaoh had troubling dreams, Joseph was remembered and interpreted them, then was elevated to oversee the coming famine, second only to Pharaoh himself.",
      scriptureReferences: [
        { reference: "Genesis 41:41", text: "I hereby put you in charge of the whole land of Egypt." },
      ],
    },
    {
      id: "his-brothers-stand-before-him",
      title: "His brothers stand before him.",
      narrative:
        "Years later, Joseph's brothers came to Egypt for grain during the famine, not recognizing him. Joseph eventually revealed himself to them, weeping aloud.",
      scriptureReferences: [
        { reference: "Genesis 45:3–4", text: "“I am Joseph! Is my father still living?”... Then he wept aloud." },
      ],
    },
    {
      id: "you-meant-it-for-good",
      title: "\"You meant it for good.\"",
      narrative:
        "Joseph reassured his frightened brothers: \"You intended to harm me, but God intended it for good, to accomplish what is now being done, the saving of many lives.\"",
      scriptureReferences: [
        { reference: "Genesis 50:20", text: "You intended to harm me, but God intended it for good." },
      ],
    },
  ],
};

export default joseph;
