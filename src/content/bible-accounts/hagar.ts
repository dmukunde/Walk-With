import type { BibleAccount } from "./types";

const hagar: BibleAccount = {
  id: "hagar",
  name: "Hagar",
  title: "The woman God saw in the wilderness",
  emotionTags: ["lonely"],
  lifeSituations: ["being-overlooked", "single-parenthood", "wilderness-seasons"],
  overview:
    "Hagar, an Egyptian servant of Sarai, fled into the wilderness after being mistreated. There, the angel of the Lord found her by a spring and spoke to her by name. She responded by naming God \"El Roi\" — \"the God who sees me.\" Later, sent away again with her son Ishmael and out of water, God heard the boy crying and showed her a well.",
  whyRelevant:
    "Hagar was a foreigner and a servant, without status, sent away twice with nowhere obvious to turn. Both times, the text says specifically that God saw her and heard her son — this account speaks directly to feeling unseen or forgotten.",
  fullBibleReference: "Genesis 16; Genesis 21:8-21",
  keyScriptures: [
    {
      reference: "Genesis 16:13",
      text: "She gave this name to the Lord who spoke to her: “You are the God who sees me.”",
    },
    {
      reference: "Genesis 21:17",
      text: "God heard the boy crying, and the angel of God called to Hagar from heaven.",
    },
  ],
  reflectionQuestions: [
    "Hagar was overlooked by the people around her, but the text says God saw her specifically. Where do you feel unseen right now?",
    "She gave God a name of her own after that encounter. What would it mean for you to call on \"the God who sees\"?",
    "God heard Ishmael's cry in Hagar's most desperate moment. What do you need God to hear from you today?",
  ],
  prayerPrompt:
    "God, Hagar called you 'the God who sees.' I'm asking you to see me in this lonely place, the way you saw her.",
  estimatedReadingTime: 4,
  searchKeywords: [
    "lonely",
    "alone",
    "isolated",
    "unseen",
    "invisible",
    "abandoned",
    "forgotten",
  ],
  scenes: [
    {
      id: "mistreated-and-fleeing",
      title: "Mistreated and fleeing.",
      narrative:
        "Sarai gave Hagar to Abram to bear a child on her behalf, but once Hagar conceived, Sarai treated her harshly, and Hagar fled into the wilderness.",
      scriptureReferences: [
        { reference: "Genesis 16:6", text: "Then Sarai mistreated Hagar; so she fled from her." },
      ],
    },
    {
      id: "found-by-the-well",
      title: "Found by the well.",
      narrative:
        "The angel of the Lord found her by a spring in the desert and called her by name, asking where she had come from and where she was going.",
      scriptureReferences: [
        { reference: "Genesis 16:7–8", text: "The angel of the Lord found Hagar near a spring... “Hagar, servant of Sarai, where have you come from, and where are you going?”" },
      ],
    },
    {
      id: "the-god-who-sees-me",
      title: "The God who sees me.",
      narrative:
        "Hagar responded by naming God \"El Roi,\" saying, \"You are the God who sees me.\" She returned and gave birth to a son, Ishmael.",
      scriptureReferences: [
        { reference: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: “You are the God who sees me.”" },
      ],
    },
    {
      id: "sent-away-again-and-heard",
      title: "Sent away again, and heard.",
      narrative:
        "Years later, Hagar and Ishmael were sent away again and ran out of water in the desert. As she wept, God heard the boy crying and opened her eyes to see a well of water.",
      scriptureReferences: [
        { reference: "Genesis 21:17", text: "God heard the boy crying, and the angel of God called to Hagar from heaven." },
        { reference: "Genesis 21:19", text: "God opened her eyes and she saw a well of water." },
      ],
    },
  ],
};

export default hagar;
