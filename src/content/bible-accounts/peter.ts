import type { BibleAccount } from "./types";

const peter: BibleAccount = {
  id: "peter",
  name: "Peter",
  title: "The disciple who was restored, not shamed",
  emotionTags: ["guilty"],
  lifeSituations: ["failure", "restoration", "forgiveness", "calling"],
  overview:
    "On the night before Jesus' death, Peter denied knowing him three times, just as Jesus had predicted. After the third denial the rooster crowed, and Luke records that Jesus turned and looked straight at Peter, who went outside and wept bitterly. After the resurrection, Jesus met Peter by the Sea of Galilee and asked him three times, \"Do you love me?\" — then told him to \"feed my sheep.\"",
  whyRelevant:
    "Peter's failure was specific and public, not vague, and so was his restoration. The text doesn't skip over what he did; it shows Jesus addressing it directly, three times, and still entrusting him with responsibility afterward.",
  fullBibleReference: "Luke 22:54-62; John 21:1-19",
  keyScriptures: [
    {
      reference: "Luke 22:61–62",
      text: "The Lord turned and looked straight at Peter... and he went outside and wept bitterly.",
    },
    {
      reference: "John 21:17",
      text: "“Simon son of John, do you love me?”... “Lord, you know all things; you know that I love you.” Jesus said, “Feed my sheep.”",
    },
  ],
  reflectionQuestions: [
    "Peter's denial wasn't hidden — Jesus \"turned and looked straight at\" him. What would it mean to stop hiding from what you've done?",
    "Jesus asked Peter the same question three times, matching his three denials. Why do you think he did that instead of simply saying he forgave him?",
    "After restoring Peter, Jesus gave him a task. What might it look like for you to move forward instead of staying stuck in guilt?",
  ],
  prayerPrompt:
    "Lord, you know exactly what I've done, the way you knew about Peter. Thank you for seeking me out instead of leaving me in my shame. Help me receive what you're offering instead of carrying it alone.",
  estimatedReadingTime: 5,
  searchKeywords: [
    "guilty",
    "guilt",
    "shame",
    "ashamed",
    "regret",
    "failed",
    "failure",
    "sorry",
  ],
  scenes: [
    {
      id: "i-will-never-disown-you",
      title: "\"I will never disown you.\"",
      narrative:
        "At the Last Supper, Jesus told Peter that he would deny him three times before the rooster crowed. Peter insisted he was ready to go to prison and death with Jesus.",
      scriptureReferences: [
        { reference: "Luke 22:33–34", text: "Peter replied, “Lord, I am ready to go with you to prison and to death.” Jesus answered, “...you will deny three times that you know me.”" },
      ],
    },
    {
      id: "three-denials",
      title: "Three denials.",
      narrative:
        "In the courtyard outside Jesus' trial, Peter was asked three times if he knew Jesus, and three times he denied it — the last time with cursing.",
      scriptureReferences: [
        { reference: "Luke 22:57", text: "But he denied it. “Woman, I don't know him,” he said." },
      ],
    },
    {
      id: "the-lord-looked-at-him",
      title: "The Lord looked at him.",
      narrative:
        "As the rooster crowed, Jesus turned and looked straight at Peter. Peter remembered Jesus' words and went outside and wept bitterly.",
      scriptureReferences: [
        { reference: "Luke 22:61–62", text: "The Lord turned and looked straight at Peter... and he went outside and wept bitterly." },
      ],
    },
    {
      id: "do-you-love-me",
      title: "\"Do you love me?\"",
      narrative:
        "After the resurrection, Jesus met Peter by the Sea of Galilee and asked him three times, \"Do you love me?\" — then told him to feed his sheep, restoring him to his calling.",
      scriptureReferences: [
        { reference: "John 21:17", text: "“Simon son of John, do you love me?”... “Lord, you know all things; you know that I love you.” Jesus said, “Feed my sheep.”" },
      ],
    },
  ],
};

export default peter;
