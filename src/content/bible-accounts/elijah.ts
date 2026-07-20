import type { BibleAccount } from "./types";

const elijah: BibleAccount = {
  id: "elijah",
  name: "Elijah",
  title: "The prophet who was allowed to rest",
  emotionTags: ["low", "lonely"],
  lifeSituations: [
    "exhaustion",
    "burnout",
    "hearing-god",
    "prophetic-ministry",
    "distant-from-god",
  ],
  overview:
    "After defeating the prophets of Baal, Elijah fled into the wilderness when Queen Jezebel threatened his life. He sat under a bush and asked God to let him die. God sent an angel who gave him food and let him sleep, twice, before he traveled on. At Horeb he told God, \"I am the only one left,\" and God passed by — not in the wind, the earthquake, or the fire, but in a gentle whisper.",
  whyRelevant:
    "Elijah had just seen God win a dramatic victory, yet exhaustion and despair overtook him completely, and he told God twice that he was the only one left. His account speaks to feeling both drained and isolated — even convinced you're the last one standing — while showing God's response was rest and presence, not correction.",
  fullBibleReference: "1 Kings 19",
  keyScriptures: [
    {
      reference: "1 Kings 19:4",
      text: "“I have had enough, Lord,” he said. “Take my life.”",
    },
    {
      reference: "1 Kings 19:10",
      text: "“I have been very zealous for the Lord... I am the only one left, and now they are trying to kill me too.”",
    },
    {
      reference: "1 Kings 19:11–12",
      text: "The Lord was not in the wind, the earthquake, or the fire — but in a still, small voice.",
    },
  ],
  reflectionQuestions: [
    "Elijah asked to die right after a major victory. What does that tell you about how exhaustion and fear can hit, regardless of circumstances?",
    "Elijah told God he was the only one left. Where do you feel isolated, even if you know that's not the whole truth?",
    "God's first response to Elijah was food and sleep, not a conversation. What would it look like to let rest come before you try to work through anything?",
  ],
  prayerPrompt:
    "Lord, when I am worn down and don't have words left, meet me the way you met Elijah — with rest before requirements. Help me grow quiet enough to hear you.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "low",
    "tired",
    "exhausted",
    "empty",
    "numb",
    "depress",
    "burnt out",
    "burnout",
    "hopeless",
    "down",
    "sad",
    "flat",
    "alone",
    "only one left",
    "isolated",
  ],
  scenes: [
    {
      id: "victory-turns-to-fear",
      title: "Victory turns to fear.",
      narrative:
        "Elijah had just defeated the prophets of Baal on Mount Carmel in a dramatic show of God's power. But when Queen Jezebel swore to kill him within a day, he ran for his life into the wilderness.",
      scriptureReferences: [
        { reference: "1 Kings 19:2–3", text: "Jezebel sent a messenger to Elijah... Elijah was afraid and ran for his life." },
      ],
    },
    {
      id: "under-the-broom-bush",
      title: "Under the broom bush.",
      narrative:
        "Exhausted, Elijah sat down under a broom bush and asked God to let him die, saying he had had enough. Then he fell asleep.",
      scriptureReferences: [
        { reference: "1 Kings 19:4", text: "“I have had enough, Lord,” he said. “Take my life.”" },
      ],
    },
    {
      id: "fed-and-allowed-to-rest",
      title: "Fed and allowed to rest.",
      narrative:
        "An angel touched him twice, telling him to get up and eat. Strengthened by that food, Elijah traveled forty days and nights to Horeb, the mountain of God.",
      scriptureReferences: [
        { reference: "1 Kings 19:7–8", text: "The angel of the Lord came back a second time and touched him and said, “Get up and eat, for the journey is too much for you.”" },
      ],
    },
    {
      id: "the-still-small-voice",
      title: "The still, small voice.",
      narrative:
        "At the cave, God asked Elijah what he was doing there. Elijah said he was the only one left. God passed by — not in the wind, the earthquake, or the fire, but in a gentle whisper — and gave Elijah his next assignment.",
      scriptureReferences: [
        { reference: "1 Kings 19:11–12", text: "The Lord was not in the wind, the earthquake, or the fire — but in a still, small voice." },
        { reference: "1 Kings 19:15", text: "The Lord said to him, “Go back the way you came.”" },
      ],
    },
  ],
};

export default elijah;
