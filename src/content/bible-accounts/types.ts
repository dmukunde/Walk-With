// The content model for a Bible account. This is the single source of truth
// every page renders from — no component should hardcode a person's name,
// verses, or copy. To add a new account: add one file in this directory that
// exports a BibleAccount, then register it in index.ts. Nothing in src/app
// or src/components needs to change.

export type EmotionTag =
  | "low"
  | "anxious"
  | "lonely"
  | "waiting"
  | "grieving"
  | "fearful"
  | "guilty"
  | "overwhelmed"
  | "unsure";

/**
 * Placeholders for future scene multimedia. All optional and all unset
 * today — no AI-generated video yet. The Journey UI checks each field and
 * falls back to a static illustration placeholder when it's missing, so
 * adding real assets later is a content change, not a UI change.
 */
export type SceneMedia = {
  /** Path to a static illustration for this scene, once real artwork exists. */
  illustration?: string;
  /** Path to a short video dramatizing this scene. */
  video?: string;
  /** Path to narrated audio for this scene's narrative. */
  audioNarration?: string;
  /** Identifier for a future animation asset (e.g. a Lottie file) for this scene. */
  animation?: string;
};

export type Scene = {
  /** Stable id within the account, e.g. "the-pain-of-waiting". */
  id: string;
  /** Short scene title, e.g. "The pain of waiting." */
  title: string;
  /** 2-4 sentences retelling this part of the account. Stays close to the text. */
  narrative: string;
  /** Scripture grounding this specific scene. */
  scriptureReferences: { reference: string; text: string }[];
  /** Multimedia for this scene, once produced. Undefined today for every scene. */
  media?: SceneMedia;
};

export type BibleAccount = {
  /** URL-safe unique id, e.g. "abraham-and-sarah". Used as the /story/[id] and /journey/[id] slug. */
  id: string;
  /** Display name, e.g. "Hannah" or "Abraham & Sarah". */
  name: string;
  /** Short tagline shown under the name. Not a doctrinal claim — a hook. */
  title: string;
  /** Which check-in emotions this account is recommended for. An account can serve more than one. */
  emotionTags: EmotionTag[];
  /** Broader topical tags for future browse/search UI, kebab-case (e.g. "waiting-on-god"). */
  lifeSituations: string[];
  /** What Scripture records. Stays close to the text — no invented psychology. */
  overview: string;
  /** The app's own bridge: why this account fits the reader's situation, tied to specific events in the text. */
  whyRelevant: string;
  /** Short excerpts worth highlighting. Not exhaustive — a pointer into fullBibleReference. */
  keyScriptures: { reference: string; text: string }[];
  /** Questions rooted in what happened in the account, not generic self-help. */
  reflectionQuestions: string[];
  /** A starting point for the reader's own prayer — never framed as words from God. */
  prayerPrompt: string;
  /** One or two sentences: the core Bible-grounded takeaway, shown on the Journey's finale screen. */
  takeaway: string;
  /** The complete passage(s) to read for this account, e.g. "1 Kings 19" or "Genesis 37; 39-45". */
  fullBibleReference: string;
  /** Path to a hero image, once real artwork exists. Undefined falls back to a generic gradient. */
  heroImage?: string;
  /** Minutes to read the story page (not the full Bible passage). */
  estimatedReadingTime: number;
  /** Free-text phrases that should surface this account from the "what's on your mind" box. */
  searchKeywords: string[];
  /** The account broken into an ordered sequence of scenes for the immersive Journey experience. */
  scenes: Scene[];
};
