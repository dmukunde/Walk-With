// Mock recommendation data. No AI yet — emotions map to a story directly,
// and free-text input is matched with simple keyword scoring. Both are
// designed to be swapped for a real model later without changing callers.

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
  scriptures: { reference: string; text: string }[];
  reflection: string[];
  prayer: string;
};

export const STORIES: Record<string, BibleStory> = {
  elijah: {
    slug: "elijah",
    name: "Elijah",
    epithet: "The prophet who was allowed to rest",
    overview:
      "After a great victory, Elijah collapsed under exhaustion and despair, begging God to let him die. Instead of scolding him, God sent an angel with food and rest, then met him not in the earthquake or the fire, but in a gentle whisper.",
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
      "What has drained you before you even noticed how tired you were?",
      "Where might God be inviting you to simply rest before you're asked to do anything else?",
      "Can you recall a “still, small voice” moment in your own life?",
    ],
    prayer:
      "Lord, when I am worn down and don't have words left, meet me here. Let me rest in your care before I try to carry anything else. Speak gently, and help me listen.",
  },
  david: {
    slug: "david",
    name: "David",
    epithet: "The king who prayed his fear out loud",
    overview:
      "Long before he was king, David wrote with startling honesty about fear and restlessness — and found that naming his anxiety to God was itself an act of trust.",
    scriptures: [
      {
        reference: "Psalm 34:4",
        text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
      },
      {
        reference: "Psalm 55:22",
        text: "Cast your cares on the Lord and he will sustain you.",
      },
    ],
    reflection: [
      "What worry have you been carrying alone that you could say out loud today?",
      "David didn't hide his fear from God — what would it look like to stop hiding yours?",
      "What's one “cast your cares” habit you could start this week?",
    ],
    prayer:
      "God, here is what's on my mind. I don't have to carry it perfectly. Help me hand it to you — even if I pick it back up tomorrow and have to hand it over again.",
  },
  hagar: {
    slug: "hagar",
    name: "Hagar",
    epithet: "The woman God saw in the wilderness",
    overview:
      "Cast out and alone, Hagar became the first person in Scripture to give God a name of her own: “the One who sees me.” Her story insists that no one is invisible to God, even in their loneliest place.",
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
      "Where do you feel unseen right now — by others, or by yourself?",
      "What would change if you believed, even a little, that you're being watched over with care?",
      "Who is one person you could let see you this week?",
    ],
    prayer:
      "El Roi, the God who sees — see me in this lonely place. Remind me I was never as alone as I felt.",
  },
  hannah: {
    slug: "hannah",
    name: "Hannah",
    epithet: "The woman whose waiting became a prayer",
    overview:
      "Year after year, Hannah waited and wept, praying so fervently in the temple that she was mistaken for drunk. Her waiting was not wasted — it was shaped into a promise kept in God's timing.",
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
      "What have you been waiting for so long that it's started to feel hopeless?",
      "Hannah kept praying even without answers — what does persistent hope look like for you right now?",
      "How might this waiting season be shaping you, even quietly?",
    ],
    prayer:
      "Lord, you see how long I've waited. Keep my heart soft, not bitter, while I wait. Meet me in the waiting, not just at the end of it.",
  },
  naomi: {
    slug: "naomi",
    name: "Naomi",
    epithet: "The woman who let her grief have a name",
    overview:
      "Naomi lost her husband and both sons in a foreign land, and asked to be called “Mara,” meaning bitter. Yet her story didn't end in that grief — love and provision found her again, in ways she never expected.",
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
      "What would it look like to let yourself name your grief honestly, the way Naomi did?",
      "Is there someone, like Ruth was for Naomi, walking this with you?",
      "What has surprised you, even faintly, in the middle of your loss?",
    ],
    prayer:
      "God, my grief is real and you're not asking me to rush it. Stay close while I mourn, and help me trust that this isn't the whole story.",
  },
  gideon: {
    slug: "gideon",
    name: "Gideon",
    epithet: "The reluctant hero called “mighty warrior”",
    overview:
      "Gideon was hiding in a winepress, threshing wheat in secret out of fear, when God called him “mighty warrior” — before he had ever acted brave. In his story, courage came after the call, not before it.",
    scriptures: [
      {
        reference: "Judges 6:12",
        text: "The angel of the Lord appeared to Gideon and said, “The Lord is with you, mighty warrior.”",
      },
      {
        reference: "Judges 6:15",
        text: "“Pardon me, my lord,” Gideon replied, “but how can I save Israel? My clan is the weakest.”",
      },
    ],
    reflection: [
      "What is fear keeping you from stepping into today?",
      "What would it mean to let God call you brave before you feel it?",
      "What's one small, testable step you could take toward what you're afraid of?",
    ],
    prayer:
      "God, I don't feel brave. Meet me in my hiding place like you met Gideon, and help me take one step — even a small one — toward what you're asking.",
  },
  peter: {
    slug: "peter",
    name: "Peter",
    epithet: "The disciple who was restored, not shamed",
    overview:
      "Peter denied even knowing Jesus three times in one night — and yet was the one Jesus sought out afterward, not to shame him, but to restore him, asking the same question three times: “Do you love me?”",
    scriptures: [
      {
        reference: "Luke 22:61–62",
        text: "The Lord turned and looked straight at Peter... and he went outside and wept bitterly.",
      },
      {
        reference: "John 21:17",
        text: "“Simon son of John, do you love me?” ... “Lord, you know all things; you know that I love you.”",
      },
    ],
    reflection: [
      "What's the moment you keep replaying, wishing you'd chosen differently?",
      "Peter's failure wasn't the end of his story — what would it mean for it not to be the end of yours?",
      "What might restoration look like for you today?",
    ],
    prayer:
      "Lord, you know exactly what I've done. Thank you for seeking me out anyway. Help me receive forgiveness instead of just carrying shame.",
  },
  joseph: {
    slug: "joseph",
    name: "Joseph",
    epithet: "The one who was never alone in the overwhelm",
    overview:
      "Betrayed by his brothers, sold into slavery, falsely accused, and forgotten in prison — Joseph faced one overwhelming setback after another. Through all of it, Scripture keeps repeating one quiet phrase: “the Lord was with him.”",
    scriptures: [
      {
        reference: "Genesis 39:2",
        text: "The Lord was with Joseph, and he prospered.",
      },
      {
        reference: "Genesis 50:20",
        text: "You intended to harm me, but God intended it for good.",
      },
    ],
    reflection: [
      "Which parts of your life feel like too much all at once right now?",
      "What would it mean to believe God is present in the middle of the overwhelm, not just after it?",
      "Joseph couldn't see the whole story while he was living it — where might you need to trust what you can't yet see?",
    ],
    prayer:
      "God, it's a lot right now. I can't see how this works out, but I'm asking you to be present in the middle of it, the way you were with Joseph.",
  },
  esther: {
    slug: "esther",
    name: "Esther",
    epithet: "For such a time as this",
    overview:
      "Esther didn't set out to be a hero — she was placed in an unexpected position and had to decide, uncertain and afraid, whether to act. Her cousin Mordecai's words still echo: “Who knows but that you have come to your royal position for such a time as this?”",
    scriptures: [
      {
        reference: "Esther 4:14",
        text: "Who knows but that you have come to your royal position for such a time as this?",
      },
      {
        reference: "Esther 4:16",
        text: "“I will go to the king... And if I perish, I perish.”",
      },
    ],
    reflection: [
      "If you're not sure what you're feeling or facing right now, what would it look like to just be honest about that?",
      "Esther didn't need certainty to take her next step — what's one small next step available to you?",
      "Where might you be exactly where you need to be, even if it doesn't feel like it?",
    ],
    prayer:
      "God, I don't fully know what's going on inside me right now. Meet me in the not-knowing, and help me trust that you haven't lost track of me.",
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
        : "Thank you for sharing what's on your mind. Even without the exact words, this story was chosen to sit with you today.",
    story: STORIES[bestSlug],
    emotionLabel: null,
  };
}
