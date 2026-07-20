// Mock recommendation data. No AI yet — emotions map to a story directly,
// and free-text input is matched with simple keyword scoring. Both are
// designed to be swapped for a real model later without changing callers.
//
// Content rule: the Bible is the source of truth, the app is a guide to it.
// `overview` stays close to what the text actually records. `whyRelevant`
// is the app's own bridge between the reader's situation and the account —
// that's the one place editorial framing belongs. Reflection questions
// point back into the text rather than into generic self-help advice.

export type Emotion = {
  slug: string;
  label: string;
};

export const EMOTIONS: Emotion[] = [
  { slug: "low", label: "Feeling Low" },
  { slug: "anxious", label: "Anxious" },
  { slug: "lonely", label: "Lonely" },
  { slug: "waiting", label: "Waiting" },
  { slug: "grieving", label: "Grieving" },
  { slug: "fearful", label: "Fearful" },
  { slug: "guilty", label: "Guilty" },
  { slug: "overwhelmed", label: "Overwhelmed" },
  { slug: "unsure", label: "I don't know" },
];

export type BibleStory = {
  slug: string;
  name: string;
  epithet: string;
  overview: string;
  whyRelevant: string;
  fullReference: string;
  scriptures: { reference: string; text: string }[];
  reflection: string[];
  prayer: string;
};

export function bibleGatewayUrl(reference: string) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=NIV`;
}

export const STORIES: Record<string, BibleStory> = {
  elijah: {
    slug: "elijah",
    name: "Elijah",
    epithet: "The prophet who was allowed to rest",
    overview:
      "After defeating the prophets of Baal, Elijah fled into the wilderness when Queen Jezebel threatened his life. He sat under a bush and asked God to let him die. God sent an angel who gave him food and let him sleep, twice, before he traveled on. At Horeb, God passed by — not in the wind, the earthquake, or the fire, but in a gentle whisper — and asked Elijah, \"What are you doing here?\"",
    whyRelevant:
      "Elijah had just seen God win a dramatic victory, yet fear and exhaustion overtook him completely — the text shows this happening to a prophet, not a lack of faith. God's response to him wasn't correction; it was food, sleep, and eventually a quiet voice.",
    fullReference: "1 Kings 19",
    scriptures: [
      {
        reference: "1 Kings 19:4",
        text: "“I have had enough, Lord,” he said. “Take my life.”",
      },
      {
        reference: "1 Kings 19:5–7",
        text: "An angel touched him and said, “Get up and eat.”",
      },
      {
        reference: "1 Kings 19:11–12",
        text: "The Lord was not in the wind, the earthquake, or the fire — but in a still, small voice.",
      },
    ],
    reflection: [
      "Elijah asked to die right after a major victory. What does that tell you about how exhaustion and fear can hit, regardless of circumstances?",
      "God's first response to Elijah was food and sleep, not a conversation. What would it look like to let rest come before you try to work through anything?",
      "God spoke in a whisper, not the dramatic wind, earthquake, or fire. Where might you need to grow quiet enough to notice him?",
    ],
    prayer:
      "Lord, when I am worn down and don't have words left, meet me the way you met Elijah — with rest before requirements. Help me grow quiet enough to hear you.",
  },
  david: {
    slug: "david",
    name: "David",
    epithet: "The king who prayed his fear out loud",
    overview:
      "Psalm 34 is a psalm David wrote after fleeing King Achish of Gath by pretending to be insane (1 Samuel 21:10–15). In it, he writes that he sought the Lord and was answered and delivered from his fears, invites others to \"taste and see that the Lord is good,\" and says the Lord is close to the brokenhearted.",
    whyRelevant:
      "David didn't write this from a place of having it together — the background in 1 Samuel shows him in genuine danger, faking madness to survive. His account shows real fear being brought honestly to God, not hidden or minimized first.",
    fullReference: "1 Samuel 21:10-15; Psalm 34",
    scriptures: [
      {
        reference: "Psalm 34:4",
        text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
      },
      {
        reference: "Psalm 34:17–18",
        text: "The righteous cry out, and the Lord hears them... The Lord is close to the brokenhearted.",
      },
    ],
    reflection: [
      "David wrote this while actually in danger, not after everything was resolved. What fear are you carrying that feels too big to say out loud?",
      "He invites readers to \"taste and see\" God's goodness. What would that look like for you in the middle of anxiety, rather than only after it passes?",
      "The psalm says God is close to the brokenhearted. Where do you need that nearness today?",
    ],
    prayer:
      "God, like David, I bring you a real fear, not a tidy one. Thank you that you don't wait for me to calm down before drawing near. Help me trust that you're close.",
  },
  hagar: {
    slug: "hagar",
    name: "Hagar",
    epithet: "The woman God saw in the wilderness",
    overview:
      "Hagar, an Egyptian servant of Sarai, fled into the wilderness after being mistreated. There, the angel of the Lord found her by a spring and spoke to her by name. She responded by naming God \"El Roi\" — \"the God who sees me.\" Later, sent away again with her son Ishmael and out of water, God heard the boy crying and showed her a well.",
    whyRelevant:
      "Hagar was a foreigner and a servant, without status, sent away twice with nowhere obvious to turn. Both times, the text says specifically that God saw her and heard her son — this account speaks directly to feeling unseen or forgotten.",
    fullReference: "Genesis 16; Genesis 21:8-21",
    scriptures: [
      {
        reference: "Genesis 16:13",
        text: "She gave this name to the Lord who spoke to her: “You are the God who sees me.”",
      },
      {
        reference: "Genesis 21:17",
        text: "God heard the boy crying, and the angel of God called to Hagar from heaven.",
      },
    ],
    reflection: [
      "Hagar was overlooked by the people around her, but the text says God saw her specifically. Where do you feel unseen right now?",
      "She gave God a name of her own after that encounter. What would it mean for you to call on \"the God who sees\"?",
      "God heard Ishmael's cry in Hagar's most desperate moment. What do you need God to hear from you today?",
    ],
    prayer:
      "God, Hagar called you 'the God who sees.' I'm asking you to see me in this lonely place, the way you saw her.",
  },
  hannah: {
    slug: "hannah",
    name: "Hannah",
    epithet: "The woman whose waiting became a prayer",
    overview:
      "Hannah was unable to have children and was provoked for it, year after year, by her husband's other wife. In deep anguish she prayed silently in the temple, moving her lips without sound, and the priest Eli mistook her for drunk. She vowed that if God gave her a son, she would give him back to the Lord. God answered her prayer with a son, Samuel, and once he was weaned, Hannah brought him to serve at the temple as she had promised.",
    whyRelevant:
      "Hannah's waiting was long, public, and misunderstood — she prayed for years before an answer came, and was misjudged in the middle of it. Her account speaks to anyone whose waiting has gone on long enough to feel hopeless.",
    fullReference: "1 Samuel 1-2:11",
    scriptures: [
      {
        reference: "1 Samuel 1:10",
        text: "In her deep anguish, Hannah prayed to the Lord, weeping bitterly.",
      },
      {
        reference: "1 Samuel 1:27",
        text: "I prayed for this child, and the Lord has granted what I asked of him.",
      },
    ],
    reflection: [
      "Hannah kept praying year after year without an answer. What have you been waiting for that long?",
      "Eli misjudged her prayer as drunkenness. Who might misunderstand your waiting, and how might you keep going anyway?",
      "When her prayer was answered, Hannah kept the vow she'd made. What would faithfulness look like for you in this season of waiting?",
    ],
    prayer:
      "Lord, you saw Hannah's tears year after year. You see mine too. Keep my heart honest before you while I wait, even when I can't see how long it will be.",
  },
  naomi: {
    slug: "naomi",
    name: "Naomi",
    epithet: "The woman who let her grief have a name",
    overview:
      "Naomi lost her husband and both of her sons while living in Moab, and returned to Bethlehem with her daughter-in-law Ruth. She told the women there to call her \"Mara,\" meaning bitter, saying the Lord had brought her home empty. The rest of the book of Ruth records how Naomi was provided for again through Ruth's marriage to Boaz, and how she was given a grandson, Obed.",
    whyRelevant:
      "Naomi didn't hide or soften her grief — she named it plainly, even attributing it to God, and let the people around her see it. Her account holds honest grief and God's ongoing care together, without rushing past either.",
    fullReference: "Ruth 1-4",
    scriptures: [
      {
        reference: "Ruth 1:20–21",
        text: "“Call me Mara,” she told them, “because the Almighty has made my life very bitter.”",
      },
      {
        reference: "Ruth 4:16",
        text: "Naomi took the child in her arms and cared for him.",
      },
    ],
    reflection: [
      "Naomi called herself \"Mara\" rather than pretending things were fine. What would it look like to name your grief that honestly?",
      "Ruth stayed with Naomi through her loss. Who is walking with you right now, or who could you let in?",
      "By the end of the book, Naomi is holding her grandson. What, even small, has been true in the middle of your loss?",
    ],
    prayer:
      "God, my grief is real, and I'm not going to rush past it. Stay close to me the way you stayed present in Naomi's story, even in the part where she called you the reason for her bitterness.",
  },
  gideon: {
    slug: "gideon",
    name: "Gideon",
    epithet: "The reluctant hero called “mighty warrior”",
    overview:
      "Gideon was threshing wheat inside a winepress to hide it from the Midianites when the angel of the Lord appeared and called him \"mighty warrior.\" Gideon questioned this, pointing out that his clan was the weakest in Manasseh and he was the least in his family. He asked God for confirmation twice, testing a wool fleece, before leading Israel into battle with a force reduced to just three hundred men.",
    whyRelevant:
      "Gideon voiced his fear and doubt directly rather than hiding it, and asked for confirmation more than once — the text shows God working with that process instead of dismissing it. His account speaks to feeling too afraid or too small for what's ahead.",
    fullReference: "Judges 6-7",
    scriptures: [
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
    reflection: [
      "Gideon told God directly that he felt weak and overlooked. What would it look like to be that honest about your fear?",
      "He asked for confirmation more than once, and God worked with him rather than refusing. What questions or doubts do you need to bring to God?",
      "God called Gideon a \"mighty warrior\" before he had done anything brave. What might it mean to let that be spoken over you before you feel it?",
    ],
    prayer:
      "God, like Gideon, I don't feel brave or ready. Thank you that you worked with his doubts instead of dismissing them. Meet me in my hesitation, and help me take the next step.",
  },
  peter: {
    slug: "peter",
    name: "Peter",
    epithet: "The disciple who was restored, not shamed",
    overview:
      "On the night before Jesus' death, Peter denied knowing him three times, just as Jesus had predicted. After the third denial the rooster crowed, and Luke records that Jesus turned and looked straight at Peter, who went outside and wept bitterly. After the resurrection, Jesus met Peter by the Sea of Galilee and asked him three times, \"Do you love me?\" — then told him to \"feed my sheep.\"",
    whyRelevant:
      "Peter's failure was specific and public, not vague, and so was his restoration. The text doesn't skip over what he did; it shows Jesus addressing it directly, three times, and still entrusting him with responsibility afterward.",
    fullReference: "Luke 22:54-62; John 21:1-19",
    scriptures: [
      {
        reference: "Luke 22:61–62",
        text: "The Lord turned and looked straight at Peter... and he went outside and wept bitterly.",
      },
      {
        reference: "John 21:17",
        text: "“Simon son of John, do you love me?”... “Lord, you know all things; you know that I love you.” Jesus said, “Feed my sheep.”",
      },
    ],
    reflection: [
      "Peter's denial wasn't hidden — Jesus \"turned and looked straight at\" him. What would it mean to stop hiding from what you've done?",
      "Jesus asked Peter the same question three times, matching his three denials. Why do you think he did that instead of simply saying he forgave him?",
      "After restoring Peter, Jesus gave him a task. What might it look like for you to move forward instead of staying stuck in guilt?",
    ],
    prayer:
      "Lord, you know exactly what I've done, the way you knew about Peter. Thank you for seeking me out instead of leaving me in my shame. Help me receive what you're offering instead of carrying it alone.",
  },
  joseph: {
    slug: "joseph",
    name: "Joseph",
    epithet: "The one who was never alone in the overwhelm",
    overview:
      "Joseph was sold into slavery in Egypt by his own brothers, falsely accused and imprisoned by his master's wife, and then forgotten for two more years by a cellmate he had helped. Genesis repeats the phrase \"the Lord was with him\" at several of these low points. Joseph was eventually elevated to second-in-command of Egypt, stored grain through a famine, and was later able to provide for the very brothers who had betrayed him.",
    whyRelevant:
      "Joseph's setbacks weren't a single crisis but one thing after another over years, with long stretches where nothing seemed to change. His account speaks to being overwhelmed by an accumulation of things, not just one problem.",
    fullReference: "Genesis 37; 39-45",
    scriptures: [
      {
        reference: "Genesis 39:2",
        text: "The Lord was with Joseph, and he prospered.",
      },
      {
        reference: "Genesis 39:21",
        text: "The Lord was with him; he showed him kindness and granted him favor in the eyes of the prison warden.",
      },
      {
        reference: "Genesis 50:20",
        text: "You intended to harm me, but God intended it for good.",
      },
    ],
    reflection: [
      "Joseph faced setback after setback over years, not one bad day. Which parts of your situation feel like they've piled up over time?",
      "Genesis keeps saying \"the Lord was with him,\" before anything had improved. What would it mean to believe that's true for you now, before you can see how things resolve?",
      "Joseph told his brothers, \"you intended to harm me, but God intended it for good\" — but he could only say that at the end, looking back. Is there a place in your story you're not ready to say that about yet? Is that okay for now?",
    ],
    prayer:
      "God, it's a lot right now, and I can't see how this resolves. I'm asking you to be present in the middle of it, the way you were with Joseph before anything had changed.",
  },
  esther: {
    slug: "esther",
    name: "Esther",
    epithet: "For such a time as this",
    overview:
      "Esther, a Jewish woman who had become queen of Persia, learned through her cousin Mordecai of a plot to destroy her people. Approaching the king uninvited could mean death, but Mordecai urged her to act, saying, \"Who knows but that you have come to your royal position for such a time as this?\" Esther asked her people to fast for three days, then said, \"I will go to the king, even though it is against the law. And if I perish, I perish.\"",
    whyRelevant:
      "Esther acted without knowing how things would turn out — she had a decision to make, not certainty about the outcome. Her account fits moments when you're not sure exactly what you're feeling or facing, but still have a next step in front of you.",
    fullReference: "Esther 2-4",
    scriptures: [
      {
        reference: "Esther 4:14",
        text: "Who knows but that you have come to your royal position for such a time as this?",
      },
      {
        reference: "Esther 4:16",
        text: "“I will go to the king, even though it is against the law. And if I perish, I perish.”",
      },
    ],
    reflection: [
      "Esther didn't have proof things would work out before she acted. What decision are you facing without that kind of certainty?",
      "Mordecai suggested her position wasn't random. Is there a place in your life right now that might not be random either, even if it's unclear?",
      "Esther asked others to fast with her before she acted. What preparation or support might you need before your next step?",
    ],
    prayer:
      "God, I don't fully know what I'm feeling or facing right now. Like Esther, help me take the next right step even without certainty, and help me trust that you haven't lost track of where I am.",
  },
};

const EMOTION_TO_STORY: Record<string, string> = {
  low: "elijah",
  anxious: "david",
  lonely: "hagar",
  waiting: "hannah",
  grieving: "naomi",
  fearful: "gideon",
  guilty: "peter",
  overwhelmed: "joseph",
  unsure: "esther",
};

const OPENING_MESSAGES: Record<string, string> = {
  low: "It's okay to not be okay. When everything feels heavy, you're not alone in that valley.",
  anxious:
    "That restless, racing feeling is exhausting to carry alone. You don't have to hold it perfectly.",
  lonely:
    "Feeling unseen is one of the heaviest things to carry. You are seen here, and you were seen long before this moment.",
  waiting:
    "Waiting without knowing the ending is hard. Your hope isn't wasted, even when it feels like nothing is moving.",
  grieving:
    "Grief doesn't need to be rushed or explained. Whatever you've lost, it's allowed to matter this much.",
  fearful:
    "Fear can make the ground feel unsteady. You don't need to feel brave to take the next step.",
  guilty:
    "Carrying guilt is heavy work. Whatever it is, it doesn't get the final word on who you are.",
  overwhelmed:
    "When everything piles up at once, it's hard to know where to even begin. You don't have to hold it all today.",
  unsure:
    "Not knowing exactly what you feel is okay too. You don't need the right words for this to matter.",
};

const KEYWORD_MAP: Record<string, string[]> = {
  elijah: [
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
  ],
  david: [
    "anxious",
    "anxiety",
    "worry",
    "worried",
    "nervous",
    "panic",
    "stress",
    "stressed",
    "racing",
  ],
  hagar: [
    "lonely",
    "alone",
    "isolated",
    "unseen",
    "invisible",
    "abandoned",
    "forgotten",
  ],
  hannah: ["waiting", "wait", "stuck", "delay", "patience", "longing", "hope"],
  naomi: [
    "grief",
    "grieving",
    "loss",
    "lost",
    "died",
    "death",
    "miscarriage",
    "mourning",
    "widow",
  ],
  gideon: [
    "afraid",
    "fear",
    "fearful",
    "scared",
    "terrified",
    "nervous about",
    "unsure of myself",
  ],
  peter: [
    "guilty",
    "guilt",
    "shame",
    "ashamed",
    "regret",
    "failed",
    "failure",
    "sorry",
  ],
  joseph: [
    "overwhelmed",
    "too much",
    "cant cope",
    "can't cope",
    "drowning",
    "overloaded",
    "everything at once",
  ],
};

export type Recommendation = {
  message: string;
  story: BibleStory;
  emotionLabel: string | null;
};

export function getRecommendationByEmotion(slug: string): Recommendation {
  const storySlug = EMOTION_TO_STORY[slug] ?? "esther";
  const emotion = EMOTIONS.find((e) => e.slug === slug) ?? null;
  return {
    message: OPENING_MESSAGES[slug] ?? OPENING_MESSAGES.unsure,
    story: STORIES[storySlug],
    emotionLabel: emotion?.label ?? null,
  };
}

export function getRecommendationFromText(input: string): Recommendation {
  const text = input.toLowerCase();
  let bestSlug = "esther";
  let bestScore = 0;

  for (const [slug, keywords] of Object.entries(KEYWORD_MAP)) {
    const score = keywords.reduce(
      (count, word) => (text.includes(word) ? count + 1 : count),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestSlug = slug;
    }
  }

  const matchedEmotion =
    bestScore > 0
      ? Object.entries(EMOTION_TO_STORY).find(([, s]) => s === bestSlug)?.[0]
      : "unsure";

  return {
    message:
      bestScore > 0
        ? (OPENING_MESSAGES[matchedEmotion ?? "unsure"] ?? OPENING_MESSAGES.unsure)
        : "Thank you for sharing what's on your mind. Even without the exact words, this account was chosen to sit with you today.",
    story: STORIES[bestSlug],
    emotionLabel: null,
  };
}
