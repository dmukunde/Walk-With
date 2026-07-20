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
    "Job was described as blameless and upright, yet in a single day he lost his children, his servants, and his livestock, and was later afflicted with painful sores over his whole body. His wife told him to curse God and die, but Job refused — though he did later curse the day he was born and pressed God at length for an explanation. Three friends sat with him in silence before the arguing began. After many chapters of Job and his friends debating why this happened, God answered Job out of a storm, not with an explanation, but with a series of questions about the scope of creation. Job's fortunes were eventually restored, and he had more children and lived another 140 years.",
  whyRelevant:
    "Job's account doesn't offer a tidy explanation for why he suffered — even God's response to him doesn't explain it. His story speaks to overwhelming, compounding loss and to grief that includes real anger and unanswered questions, not just neat resolution.",
  fullBibleReference: "Job 1-2; Job 42",
  keyScriptures: [
    {
      reference: "Job 1:20–21",
      text: "Job... fell to the ground in worship and said... “The Lord gave and the Lord has taken away; may the name of the Lord be praised.”",
    },
    {
      reference: "Job 2:13",
      text: "No one said a word to him, because they saw how great his suffering was.",
    },
    {
      reference: "Job 42:5",
      text: "My ears had heard of you but now my eyes have seen you.",
    },
  ],
  reflectionQuestions: [
    "Job lost almost everything in a single day. What feels like it's piling up on you all at once right now?",
    "Job's friends sat with him in silence for seven days before anyone spoke. Who has sat with you in silence, or who could you let do that?",
    "Job worshipped and later also cursed the day he was born — both are recorded, without one canceling out the other. Is there room for both honesty and faith in how you're processing this?",
    "God's answer to Job wasn't an explanation. How do you respond to the idea that some pain may not be explained, even by God?",
  ],
  prayerPrompt:
    "God, like Job, I don't have an explanation for what's happening, and I'm not going to pretend I do. Stay with me in the questions I can't answer.",
  takeaway:
    "God's answer to Job's suffering wasn't an explanation — it was his presence. Job said seeing that mattered more than understanding it.",
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
        "In a single day, Job lost his oxen, donkeys, camels, sheep, servants, and all ten of his children, each disaster reported by a new messenger before the last one finished speaking. Job tore his robe, shaved his head, and fell to the ground in worship, saying, \"The Lord gave and the Lord has taken away; may the name of the Lord be praised.\"",
      scriptureReferences: [
        { reference: "Job 1:18–19", text: "While he was still speaking, another messenger came and said, “Your sons and daughters were... a mighty wind swept in... and it collapsed on them and they are dead.”" },
        { reference: "Job 1:20–21", text: "Job... fell to the ground in worship... “The Lord gave and the Lord has taken away; may the name of the Lord be praised.”" },
      ],
      media: { illustration: "/images/journeys/job/scene-1-everything-taken.svg" },
    },
    {
      id: "jobs-health-and-suffering",
      title: "Job's health and suffering.",
      narrative:
        "Job was struck with painful sores from the soles of his feet to the top of his head. He sat among the ashes and scraped himself with a piece of broken pottery. His wife told him to curse God and die, but Job replied, \"Shall we accept good from God, and not trouble?\" In all this, Job did not sin in what he said.",
      scriptureReferences: [
        { reference: "Job 2:7–8", text: "Job was afflicted with painful sores from the soles of his feet to the crown of his head." },
        { reference: "Job 2:10", text: "“Shall we accept good from God, and not trouble?” In all this, Job did not sin in what he said." },
      ],
      media: { illustration: "/images/journeys/job/scene-2-health-and-suffering.svg" },
    },
    {
      id: "the-arrival-of-his-companions",
      title: "The arrival of his companions.",
      narrative:
        "Three friends — Eliphaz, Bildad, and Zophar — heard about all the troubles that had come on Job and set out to sympathize with him and comfort him. When they saw him from a distance, they could hardly recognize him; they wept aloud, tore their robes, and sat with him on the ground for seven days and seven nights. No one said a word to him, because they saw how great his suffering was.",
      scriptureReferences: [
        { reference: "Job 2:12–13", text: "When they saw him from a distance, they could hardly recognize him... No one said a word to him, because they saw how great his suffering was." },
      ],
      media: { illustration: "/images/journeys/job/scene-3-arrival-of-companions.svg" },
    },
    {
      id: "job-speaks-honestly-during-his-distress",
      title: "Job speaks honestly during his distress.",
      narrative:
        "After seven days of silence, Job opened his mouth and cursed the day he was born. Over the chapters that follow, Job continued to speak honestly about his pain and insisted on his innocence, even as his friends argued that his suffering must be punishment for sin. \"Though he slay me, yet will I hope in him,\" Job said. \"I will surely defend my ways to his face.\"",
      scriptureReferences: [
        { reference: "Job 3:1", text: "After this, Job opened his mouth and cursed the day of his birth." },
        { reference: "Job 13:15", text: "Though he slay me, yet will I hope in him; I will surely defend my ways to his face." },
      ],
      media: { illustration: "/images/journeys/job/scene-4-speaks-honestly.svg" },
    },
    {
      id: "jobs-endurance-and-restoration",
      title: "Job's endurance and restoration.",
      narrative:
        "God finally answered Job out of a storm — not with an explanation, but with question after question about the scope of creation. Job responded, \"My ears had heard of you but now my eyes have seen you.\" The Lord restored Job's fortunes, giving him twice what he had before, and Job lived another 140 years, seeing four generations of his children.",
      scriptureReferences: [
        { reference: "Job 38:1", text: "Then the Lord spoke to Job out of the storm." },
        { reference: "Job 42:5", text: "My ears had heard of you but now my eyes have seen you." },
        { reference: "Job 42:12", text: "The Lord blessed the latter part of Job's life more than the former part." },
      ],
      media: { illustration: "/images/journeys/job/scene-5-endurance-and-restoration.svg" },
    },
  ],
};

export default job;
