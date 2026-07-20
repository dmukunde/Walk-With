import type { BibleAccount } from "./types";

const naomi: BibleAccount = {
  id: "naomi",
  name: "Naomi",
  title: "The woman who let her grief have a name",
  emotionTags: ["grieving"],
  lifeSituations: ["loss-of-spouse", "loss-of-children", "starting-over", "family"],
  overview:
    "Naomi lost her husband and both of her sons while living in Moab, and returned to Bethlehem with her daughter-in-law Ruth. She told the women there to call her \"Mara,\" meaning bitter, saying the Lord had brought her home empty. The rest of the book of Ruth records how Naomi was provided for again through Ruth's marriage to Boaz, and how she was given a grandson, Obed.",
  whyRelevant:
    "Naomi didn't hide or soften her grief — she named it plainly, even attributing it to God, and let the people around her see it. Her account holds honest grief and God's ongoing care together, without rushing past either.",
  fullBibleReference: "Ruth 1-4",
  keyScriptures: [
    {
      reference: "Ruth 1:20–21",
      text: "“Call me Mara,” she told them, “because the Almighty has made my life very bitter.”",
    },
    {
      reference: "Ruth 4:16",
      text: "Naomi took the child in her arms and cared for him.",
    },
  ],
  reflectionQuestions: [
    "Naomi called herself \"Mara\" rather than pretending things were fine. What would it look like to name your grief that honestly?",
    "Ruth stayed with Naomi through her loss. Who is walking with you right now, or who could you let in?",
    "By the end of the book, Naomi is holding her grandson. What, even small, has been true in the middle of your loss?",
  ],
  prayerPrompt:
    "God, my grief is real, and I'm not going to rush past it. Stay close to me the way you stayed present in Naomi's story, even in the part where she called you the reason for her bitterness.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "grief",
    "grieving",
    "loss",
    "lost my",
    "died",
    "death",
    "miscarriage",
    "mourning",
    "widow",
  ],
  scenes: [
    {
      id: "loss-in-a-foreign-land",
      title: "Loss in a foreign land.",
      narrative:
        "Naomi, her husband, and their two sons left Bethlehem for Moab during a famine. There her husband died, and later both of her sons died as well, leaving her with two Moabite daughters-in-law.",
      scriptureReferences: [
        { reference: "Ruth 1:3–5", text: "Naomi's husband died... both Mahlon and Kilion also died, and Naomi was left without her two sons and her husband." },
      ],
    },
    {
      id: "call-me-mara",
      title: "Call me Mara.",
      narrative:
        "Naomi decided to return home and urged her daughters-in-law to stay in Moab. Ruth refused to leave her. When Naomi arrived in Bethlehem, she told the women there to call her \"Mara,\" meaning bitter, because the Lord had made her life bitter.",
      scriptureReferences: [
        { reference: "Ruth 1:20–21", text: "“Call me Mara,” she told them, “because the Almighty has made my life very bitter.”" },
      ],
    },
    {
      id: "ruth-gleans-for-them",
      title: "Ruth gleans for them.",
      narrative:
        "Ruth went out to gather leftover grain in the fields to provide for them both, and happened to glean in a field belonging to Boaz, a relative of Naomi's late husband.",
      scriptureReferences: [
        { reference: "Ruth 2:3", text: "As it turned out, she was working in a field belonging to Boaz, who was from the clan of Elimelek." },
      ],
    },
    {
      id: "naomis-plan",
      title: "Naomi's plan.",
      narrative:
        "Naomi recognized Boaz as a family redeemer and instructed Ruth on how to approach him, setting in motion his eventual marriage to Ruth.",
      scriptureReferences: [
        { reference: "Ruth 3:1", text: "Naomi said to her, “My daughter, should I not try to find a home for you, where you will be well provided for?”" },
      ],
    },
    {
      id: "a-grandson-in-her-arms",
      title: "A grandson in her arms.",
      narrative:
        "Ruth and Boaz had a son, Obed. The women of Bethlehem told Naomi a redeemer had been born to her, and Naomi took the child and cared for him.",
      scriptureReferences: [
        { reference: "Ruth 4:16", text: "Naomi took the child in her arms and cared for him." },
      ],
    },
  ],
};

export default naomi;
