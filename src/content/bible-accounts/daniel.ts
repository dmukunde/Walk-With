import type { BibleAccount } from "./types";

const daniel: BibleAccount = {
  id: "daniel",
  name: "Daniel",
  title: "The man who kept praying anyway",
  emotionTags: ["fearful", "anxious"],
  lifeSituations: [
    "standing-firm",
    "persecution",
    "integrity",
    "trusting-god",
  ],
  overview:
    "Daniel served as a high official under King Darius, and other officials, jealous of his position, convinced the king to sign a law making it illegal to pray to anyone but the king for thirty days. Daniel continued praying to God three times a day, just as he always had, knowing the penalty was death in a den of lions. He was thrown to the lions, but the text records that God sent an angel who shut their mouths, and Daniel was found unharmed the next morning.",
  whyRelevant:
    "Daniel knew exactly what praying would cost him and did it anyway, without any promise that he would be rescued. His account speaks to facing a real, specific, named danger and choosing faithfulness over safety in the middle of it.",
  fullBibleReference: "Daniel 6",
  keyScriptures: [
    {
      reference: "Daniel 6:10",
      text: "Now when Daniel learned that the decree had been published, he went home... three times a day he got down on his knees and prayed, giving thanks to his God, just as he had done before.",
    },
    {
      reference: "Daniel 6:16",
      text: "The king... said to Daniel, “May your God, whom you serve continually, rescue you!”",
    },
    {
      reference: "Daniel 6:22",
      text: "My God sent his angel, and he shut the mouths of the lions.",
    },
  ],
  reflectionQuestions: [
    "Daniel kept his normal habit of prayer even after it became dangerous. What practice or conviction of yours is being tested right now?",
    "Daniel didn't know for certain he would be rescued before he was thrown into the den. What would it look like to be faithful without a guaranteed outcome?",
    "The king himself hoped God would rescue Daniel. Who in your life might be watching to see how you handle this fear?",
  ],
  prayerPrompt:
    "God, like Daniel, I don't know exactly how this will turn out. Help me stay faithful to what I know is right, even in the middle of real fear.",
  takeaway:
    "Daniel kept his ordinary habit of prayer even after it became dangerous, without knowing in advance he'd be rescued.",
  estimatedReadingTime: 4,
  searchKeywords: [
    "afraid",
    "fear",
    "danger",
    "threatened",
    "persecuted",
    "standing alone",
    "under pressure",
  ],
  scenes: [
    {
      id: "a-plot-against-daniel",
      title: "A plot against Daniel.",
      narrative:
        "Jealous officials, unable to find any fault in Daniel's work, convinced King Darius to sign a decree making it illegal to pray to anyone but the king for thirty days.",
      scriptureReferences: [
        { reference: "Daniel 6:5", text: "“We will never find any basis for charges against this man Daniel unless it has something to do with the law of his God.”" },
      ],
    },
    {
      id: "praying-as-always",
      title: "Praying as always.",
      narrative:
        "When Daniel learned of the decree, he went home and prayed three times a day toward Jerusalem, just as he always had, with his windows open.",
      scriptureReferences: [
        { reference: "Daniel 6:10", text: "Three times a day he got down on his knees and prayed, giving thanks to his God, just as he had done before." },
      ],
    },
    {
      id: "thrown-to-the-lions",
      title: "Thrown to the lions.",
      narrative:
        "Daniel was arrested and thrown into the lions' den. The king, who respected Daniel, spent the night fasting and could not sleep.",
      scriptureReferences: [
        { reference: "Daniel 6:18", text: "Then the king... spent the night without eating and without any entertainment being brought to him. And he could not sleep." },
      ],
    },
    {
      id: "unharmed-in-the-morning",
      title: "Unharmed in the morning.",
      narrative:
        "At dawn, the king rushed to the den and called out to Daniel, who answered that God had sent an angel to shut the lions' mouths, because he was found innocent before God.",
      scriptureReferences: [
        { reference: "Daniel 6:22", text: "My God sent his angel, and he shut the mouths of the lions." },
      ],
    },
  ],
};

export default daniel;
