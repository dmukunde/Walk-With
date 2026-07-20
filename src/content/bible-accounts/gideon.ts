import type { BibleAccount } from "./types";

const gideon: BibleAccount = {
  id: "gideon",
  name: "Gideon",
  title: "The reluctant hero called “mighty warrior”",
  emotionTags: ["fearful"],
  lifeSituations: ["self-doubt", "calling", "testing-god", "leadership"],
  overview:
    "Gideon was threshing wheat inside a winepress to hide it from the Midianites when the angel of the Lord appeared and called him \"mighty warrior.\" Gideon questioned this, pointing out that his clan was the weakest in Manasseh and he was the least in his family. He asked God for confirmation twice, testing a wool fleece, before leading Israel into battle with a force reduced to just three hundred men.",
  whyRelevant:
    "Gideon voiced his fear and doubt directly rather than hiding it, and asked for confirmation more than once — the text shows God working with that process instead of dismissing it. His account speaks to feeling too afraid or too small for what's ahead.",
  fullBibleReference: "Judges 6-7",
  keyScriptures: [
    {
      reference: "Judges 6:12",
      text: "The angel of the Lord appeared to Gideon and said, “The Lord is with you, mighty warrior.”",
    },
    {
      reference: "Judges 6:15",
      text: "“Pardon me, my lord,” Gideon replied, “but how can I save Israel? My clan is the weakest.”",
    },
    {
      reference: "Judges 6:36–37",
      text: "Gideon said to God, “If you will save Israel by my hand as you have promised — look, I will place a wool fleece on the threshing floor.”",
    },
  ],
  reflectionQuestions: [
    "Gideon told God directly that he felt weak and overlooked. What would it look like to be that honest about your fear?",
    "He asked for confirmation more than once, and God worked with him rather than refusing. What questions or doubts do you need to bring to God?",
    "God called Gideon a \"mighty warrior\" before he had done anything brave. What might it mean to let that be spoken over you before you feel it?",
  ],
  prayerPrompt:
    "God, like Gideon, I don't feel brave or ready. Thank you that you worked with his doubts instead of dismissing them. Meet me in my hesitation, and help me take the next step.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "afraid",
    "fear",
    "fearful",
    "scared",
    "terrified",
    "unsure of myself",
    "not good enough",
    "inadequate",
  ],
  scenes: [
    {
      id: "threshing-wheat-in-hiding",
      title: "Threshing wheat in hiding.",
      narrative:
        "Gideon was beating out wheat inside a winepress, hiding it from the Midianites, when the angel of the Lord appeared and called him \"mighty warrior.\"",
      scriptureReferences: [
        { reference: "Judges 6:11–12", text: "The angel of the Lord appeared to Gideon and said, “The Lord is with you, mighty warrior.”" },
      ],
    },
    {
      id: "the-weakest-clan",
      title: "The weakest clan.",
      narrative:
        "Gideon questioned the angel, pointing out that his clan was the weakest in Manasseh and he was the least in his family.",
      scriptureReferences: [
        { reference: "Judges 6:15", text: "“Pardon me, my lord,” Gideon replied, “but how can I save Israel? My clan is the weakest.”" },
      ],
    },
    {
      id: "testing-with-a-fleece",
      title: "Testing with a fleece.",
      narrative:
        "Gideon asked God to confirm the call, twice, by testing a wool fleece for dew — once wet with dry ground around it, once dry with wet ground around it.",
      scriptureReferences: [
        { reference: "Judges 6:37", text: "Look, I will place a wool fleece on the threshing floor. If there is dew only on the fleece... then I will know." },
      ],
    },
    {
      id: "down-to-three-hundred",
      title: "Down to three hundred.",
      narrative:
        "God reduced Gideon's army from thirty-two thousand to just three hundred men, so that Israel could not claim the victory was their own doing.",
      scriptureReferences: [
        { reference: "Judges 7:2", text: "You have too many men... in order that Israel may not boast against me that her own strength has saved her." },
      ],
    },
    {
      id: "the-battle-is-won",
      title: "The battle is won.",
      narrative:
        "With torches, trumpets, and jars, Gideon's three hundred routed the Midianite camp without conventional battle, and Israel was delivered.",
      scriptureReferences: [
        { reference: "Judges 7:21–22", text: "While each man held his position around the camp, all the Midianites ran, crying out as they fled." },
      ],
    },
  ],
};

export default gideon;
