import type { BibleAccount } from "./types";

const esther: BibleAccount = {
  id: "esther",
  name: "Esther",
  title: "For such a time as this",
  emotionTags: ["unsure"],
  lifeSituations: ["courage", "uncertain-decisions", "identity", "risk"],
  overview:
    "Esther, a Jewish woman who had become queen of Persia, learned through her cousin Mordecai of a plot to destroy her people. Approaching the king uninvited could mean death, but Mordecai urged her to act, saying, \"Who knows but that you have come to your royal position for such a time as this?\" Esther asked her people to fast for three days, then said, \"I will go to the king, even though it is against the law. And if I perish, I perish.\"",
  whyRelevant:
    "Esther acted without knowing how things would turn out — she had a decision to make, not certainty about the outcome. Her account fits moments when you're not sure exactly what you're feeling or facing, but still have a next step in front of you.",
  fullBibleReference: "Esther 2-4",
  keyScriptures: [
    {
      reference: "Esther 4:14",
      text: "Who knows but that you have come to your royal position for such a time as this?",
    },
    {
      reference: "Esther 4:16",
      text: "“I will go to the king, even though it is against the law. And if I perish, I perish.”",
    },
  ],
  reflectionQuestions: [
    "Esther didn't have proof things would work out before she acted. What decision are you facing without that kind of certainty?",
    "Mordecai suggested her position wasn't random. Is there a place in your life right now that might not be random either, even if it's unclear?",
    "Esther asked others to fast with her before she acted. What preparation or support might you need before your next step?",
  ],
  prayerPrompt:
    "God, I don't fully know what I'm feeling or facing right now. Like Esther, help me take the next right step even without certainty, and help me trust that you haven't lost track of where I am.",
  takeaway:
    "Esther acted without knowing how things would turn out — she had a decision to make, not a guarantee.",
  estimatedReadingTime: 5,
  searchKeywords: [],
  scenes: [
    {
      id: "chosen-as-queen",
      title: "Chosen as queen.",
      narrative:
        "Esther, a Jewish orphan raised by her cousin Mordecai, was taken into King Xerxes' palace and chosen as queen, without revealing her Jewish identity.",
      scriptureReferences: [
        { reference: "Esther 2:17", text: "The king was attracted to Esther more than to any of the other women... So he set a royal crown on her head and made her queen." },
      ],
    },
    {
      id: "a-plot-against-her-people",
      title: "A plot against her people.",
      narrative:
        "Haman, an official who hated Mordecai, convinced the king to issue a decree to destroy all the Jews in the kingdom.",
      scriptureReferences: [
        { reference: "Esther 3:13", text: "Dispatches were sent... with the order to destroy, kill and annihilate all the Jews." },
      ],
    },
    {
      id: "for-such-a-time-as-this",
      title: "For such a time as this.",
      narrative:
        "Mordecai urged Esther to approach the king on behalf of her people, telling her, \"Who knows but that you have come to your royal position for such a time as this?\"",
      scriptureReferences: [
        { reference: "Esther 4:14", text: "Who knows but that you have come to your royal position for such a time as this?" },
      ],
    },
    {
      id: "if-i-perish-i-perish",
      title: "\"If I perish, I perish.\"",
      narrative:
        "Esther asked all the Jews to fast for three days along with her, then said she would go to the king uninvited, even though it was against the law.",
      scriptureReferences: [
        { reference: "Esther 4:16", text: "“I will go to the king, even though it is against the law. And if I perish, I perish.”" },
      ],
    },
    {
      id: "she-is-not-turned-away",
      title: "She is not turned away.",
      narrative:
        "Esther approached the king, who extended his scepter to her, sparing her life and opening the way for her to expose Haman's plot.",
      scriptureReferences: [
        { reference: "Esther 5:2", text: "When he saw Queen Esther standing in the court, he was pleased with her and held out to her the gold scepter." },
      ],
    },
  ],
};

export default esther;
