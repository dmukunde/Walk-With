// The check-in taxonomy: the fixed set of emotions shown on the home screen.
// This changes rarely, unlike Bible accounts, so it stays as one small file
// rather than the per-item registry pattern used for accounts.

import type { EmotionTag } from "./bible-accounts/types";

export type Emotion = {
  slug: EmotionTag;
  label: string;
  /** The empathetic acknowledgment shown before recommendations — step 1 of the flow. */
  openingMessage: string;
};

export const EMOTIONS: Emotion[] = [
  {
    slug: "low",
    label: "Feeling Low",
    openingMessage:
      "It's okay to not be okay. When everything feels heavy, you're not alone in that valley.",
  },
  {
    slug: "anxious",
    label: "Anxious",
    openingMessage:
      "That restless, racing feeling is exhausting to carry alone. You don't have to hold it perfectly.",
  },
  {
    slug: "lonely",
    label: "Lonely",
    openingMessage:
      "Feeling unseen is one of the heaviest things to carry. You are seen here, and you were seen long before this moment.",
  },
  {
    slug: "waiting",
    label: "Waiting",
    openingMessage:
      "Waiting without knowing the ending is hard. Your hope isn't wasted, even when it feels like nothing is moving.",
  },
  {
    slug: "grieving",
    label: "Grieving",
    openingMessage:
      "Grief doesn't need to be rushed or explained. Whatever you've lost, it's allowed to matter this much.",
  },
  {
    slug: "fearful",
    label: "Fearful",
    openingMessage:
      "Fear can make the ground feel unsteady. You don't need to feel brave to take the next step.",
  },
  {
    slug: "guilty",
    label: "Guilty",
    openingMessage:
      "Carrying guilt is heavy work. Whatever it is, it doesn't get the final word on who you are.",
  },
  {
    slug: "overwhelmed",
    label: "Overwhelmed",
    openingMessage:
      "When everything piles up at once, it's hard to know where to even begin. You don't have to hold it all today.",
  },
  {
    slug: "unsure",
    label: "I don't know",
    openingMessage:
      "Not knowing exactly what you feel is okay too. You don't need the right words for this to matter.",
  },
];

export function getEmotion(slug: string): Emotion | undefined {
  return EMOTIONS.find((e) => e.slug === slug);
}
