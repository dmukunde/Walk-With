import type { BibleAccount } from "./types";

const job: BibleAccount = {
  id: "job",
  name: "Job",
  title: "Honest grief without a tidy explanation",
  emotionTags: ["grieving", "overwhelmed", "low"],
  lifeSituations: [
    "suffering",
    "loss-of-everything",
    "unanswered-questions",
    "integrity",
    "distant-from-god",
  ],
  overview:
    "Job was described as blameless and upright, yet in a single day he lost his children, his servants, and his livestock, and was later afflicted with painful sores over his whole body. His wife told him to curse God and die, but Job refused — though he did later curse the day he was born and pressed God at length for an explanation. After many chapters of Job and his friends debating why this happened, God answered Job out of a storm, not with an explanation, but with a series of questions about the scope of creation. Job's fortunes were eventually restored, and he had more children and lived another 140 years.",
  whyRelevant:
    "Job's account doesn't offer a tidy explanation for why he suffered — even God's response to him doesn't explain it. His story speaks to overwhelming, compounding loss and to grief that includes real anger and unanswered questions, not just neat resolution.",
  fullBibleReference: "Job 1-2; Job 42",
  keyScriptures: [
    {
      reference: "Job 1:20–21",
      text: "Job... fell to the ground in worship and said... “The Lord gave and the Lord has taken away; may the name of the Lord be praised.”",
    },
    {
      reference: "Job 3:1",
      text: "After this, Job opened his mouth and cursed the day of his birth.",
    },
    {
      reference: "Job 42:5",
      text: "My ears had heard of you but now my eyes have seen you.",
    },
  ],
  reflectionQuestions: [
    "Job lost almost everything in a single day. What feels like it's piling up on you all at once right now?",
    "Job worshipped and later also cursed the day he was born — both are recorded, without one canceling out the other. Is there room for both honesty and faith in how you're processing this?",
    "God's answer to Job wasn't an explanation. How do you respond to the idea that some pain may not be explained, even by God?",
  ],
  prayerPrompt:
    "God, like Job, I don't have an explanation for what's happening, and I'm not going to pretend I do. Stay with me in the questions I can't answer.",
  estimatedReadingTime: 6,
  searchKeywords: [
    "overwhelmed",
    "suffering",
    "lost everything",
    "why me",
    "unfair",
    "pain",
    "cant understand",
    "can't understand",
  ],
  scenes: [
    {
      id: "everything-taken-in-a-day",
      title: "Everything taken in a day.",
      narrative:
        "In a single day, Job lost his oxen, sheep, camels, servants, and all ten of his children in a series of disasters, each reported by a messenger arriving as the last one finished speaking.",
      scriptureReferences: [
        { reference: "Job 1:18–19", text: "While he was still speaking, another messenger came and said, “Your sons and daughters were... a mighty wind swept in... and it collapsed on them and they are dead.”" },
      ],
    },
    {
      id: "the-lord-gave-the-lord-has-taken-away",
      title: "\"The Lord gave, the Lord has taken away.\"",
      narrative:
        "Job tore his robe, shaved his head, fell to the ground, and worshiped, saying, \"The Lord gave and the Lord has taken away; may the name of the Lord be praised.\"",
      scriptureReferences: [
        { reference: "Job 1:20–21", text: "Job... fell to the ground in worship... “The Lord gave and the Lord has taken away; may the name of the Lord be praised.”" },
      ],
    },
    {
      id: "sores-and-silence",
      title: "Sores and silence.",
      narrative:
        "Job was afflicted with painful sores over his whole body. His wife told him to curse God and die. Three friends came to sit with him, and for seven days and nights no one said a word, because they saw how great his suffering was.",
      scriptureReferences: [
        { reference: "Job 2:13", text: "No one said a word to him, because they saw how great his suffering was." },
      ],
    },
    {
      id: "demanding-an-answer",
      title: "Demanding an answer.",
      narrative:
        "Over many chapters, Job argued his innocence and pressed God directly for an explanation for his suffering, refusing to accept his friends' simple explanations.",
      scriptureReferences: [
        { reference: "Job 3:1", text: "After this, Job opened his mouth and cursed the day of his birth." },
      ],
    },
    {
      id: "god-answers-from-the-storm",
      title: "God answers from the storm.",
      narrative:
        "God finally answered Job out of a storm — not with an explanation, but with question after question about the scope of creation. Job responded, \"My ears had heard of you but now my eyes have seen you.\"",
      scriptureReferences: [
        { reference: "Job 38:1", text: "Then the Lord spoke to Job out of the storm." },
        { reference: "Job 42:5", text: "My ears had heard of you but now my eyes have seen you." },
      ],
    },
  ],
};

export default job;
