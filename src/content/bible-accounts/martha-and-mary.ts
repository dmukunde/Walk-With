import type { BibleAccount } from "./types";

const marthaAndMary: BibleAccount = {
  id: "martha-and-mary",
  name: "Martha & Mary",
  title: "\"If you had been here...\"",
  emotionTags: ["grieving"],
  lifeSituations: [
    "grief",
    "loss-of-a-loved-one",
    "doubt",
    "friendship-with-jesus",
  ],
  overview:
    "When their brother Lazarus fell sick, Martha and Mary sent word to Jesus, but he arrived four days after Lazarus had died. Martha went out to meet Jesus and told him plainly, \"Lord, if you had been here, my brother would not have died.\" Jesus told her Lazarus would rise again, and Martha affirmed her belief in the resurrection to come. When Mary said the same words to Jesus and wept, along with those who had come to mourn, Jesus himself wept. He then went to the tomb and called Lazarus back to life.",
  whyRelevant:
    "Both sisters said the same honest, even confrontational, words to Jesus: if you had been here, this wouldn't have happened. Their account shows grief expressed directly to Jesus without being softened first, and records that Jesus himself wept alongside them before anything changed.",
  fullBibleReference: "John 11:1-44",
  keyScriptures: [
    {
      reference: "John 11:21",
      text: "“Lord,” Martha said to Jesus, “if you had been here, my brother would not have died.”",
    },
    {
      reference: "John 11:33–35",
      text: "When Jesus saw her weeping... he was deeply moved in spirit and troubled... Jesus wept.",
    },
    {
      reference: "John 11:25–26",
      text: "Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die.”",
    },
  ],
  reflectionQuestions: [
    "Martha and Mary each told Jesus the same honest, unsoftened words about their grief. What would it look like for you to say the truest version of what you're feeling?",
    "Jesus wept alongside them before he did anything to change the situation. What does it mean to you that grief itself mattered to him, apart from the outcome?",
    "Martha still affirmed her belief in the resurrection in the middle of her grief. Is there something you still believe, even while grieving?",
  ],
  prayerPrompt:
    "Jesus, like Martha and Mary, I bring you my grief honestly, without softening it. Thank you that you weep with me before you do anything else.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "grief",
    "loss",
    "died",
    "death",
    "mourning",
    "brother",
    "sister",
    "why did this happen",
  ],
  scenes: [
    {
      id: "lazarus-is-sick-then-dies",
      title: "Lazarus is sick, then dies.",
      narrative:
        "Martha and Mary sent word to Jesus that their brother Lazarus was sick, but Jesus stayed where he was two more days, and Lazarus died before he arrived.",
      scriptureReferences: [
        { reference: "John 11:6", text: "When he heard that Lazarus was sick, he stayed where he was two more days." },
      ],
    },
    {
      id: "if-you-had-been-here",
      title: "\"If you had been here...\"",
      narrative:
        "Martha went out to meet Jesus and told him plainly that if he had been there, her brother would not have died. Mary later said the same words to him, weeping.",
      scriptureReferences: [
        { reference: "John 11:21", text: "“Lord,” Martha said to Jesus, “if you had been here, my brother would not have died.”" },
      ],
    },
    {
      id: "jesus-wept",
      title: "Jesus wept.",
      narrative:
        "Seeing Mary and the others weeping, Jesus was deeply moved in spirit and troubled, and he himself wept at the tomb.",
      scriptureReferences: [
        { reference: "John 11:35", text: "Jesus wept." },
      ],
    },
    {
      id: "lazarus-come-out",
      title: "\"Lazarus, come out.\"",
      narrative:
        "Jesus ordered the stone rolled away, prayed aloud, and called Lazarus out of the tomb. Lazarus came out, still wrapped in graveclothes.",
      scriptureReferences: [
        { reference: "John 11:43–44", text: "“Lazarus, come out!” The dead man came out, his hands and feet wrapped with strips of linen." },
      ],
    },
  ],
};

export default marthaAndMary;
