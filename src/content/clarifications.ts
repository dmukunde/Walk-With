// Content for the conversational disambiguation step. When free-text input
// is too vague to confidently match a Bible account, the engine asks one
// follow-up question instead of guessing — see needsClarification() in
// lib/recommendations/engine.ts. This file only holds the branches; the
// question itself is generated from the user's own words at runtime.

import type { EmotionTag } from "./bible-accounts/types";

export type ClarificationTarget =
  | { type: "emotion"; value: EmotionTag }
  | { type: "situation"; value: string }
  /** Skip clarification and fall through to the normal text-matching flow on the original input. */
  | { type: "skip" };

export type ClarificationOption = {
  label: string;
  target: ClarificationTarget;
};

export const CLARIFICATION_OPTIONS: ClarificationOption[] = [
  {
    label: "I don't know what direction to take.",
    target: { type: "emotion", value: "unsure" },
  },
  {
    label: "I've experienced a painful loss.",
    target: { type: "emotion", value: "grieving" },
  },
  {
    label: "I feel distant from God.",
    target: { type: "situation", value: "distant-from-god" },
  },
  {
    label: "I feel overwhelmed.",
    target: { type: "emotion", value: "overwhelmed" },
  },
  {
    label: "Something else.",
    target: { type: "skip" },
  },
];

export function buildClarificationQuestion(input: string) {
  const trimmed = input.trim().replace(/[.?!]+$/, "");
  return `When you say ${trimmed}, what feels closest to what you're experiencing?`;
}
