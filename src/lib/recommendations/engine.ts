// The recommendation engine. This is the only place that decides which
// accounts get shown and in what order — pages just call getRecommendation()
// and render the result. Ranking is a curated priority list per emotion
// (the editorial layer a product/content team would tune over time), with
// any account tagged for that emotion but not yet curated appended after —
// so a newly added account is discoverable immediately, before anyone gets
// around to ranking it.

import type { EmotionTag } from "@/content/bible-accounts/types";
import {
  getAccountsByEmotion,
  getAllAccounts,
  type BibleAccount,
} from "@/content/bible-accounts";
import { EMOTIONS, getEmotion } from "@/content/emotions";

export type RankedRecommendation = {
  account: BibleAccount;
  rank: number;
};

export type RecommendationResult = {
  message: string;
  emotionLabel: string | null;
  recommendations: RankedRecommendation[];
};

/**
 * Curated ranking per emotion, as account ids, in priority order.
 * Accounts tagged with the emotion but missing here still surface —
 * see getRecommendationsForEmotion — just ranked after the curated set.
 */
const EMOTION_PRIORITY: Partial<Record<EmotionTag, string[]>> = {
  low: ["elijah", "job"],
  anxious: ["david", "daniel", "jehoshaphat"],
  lonely: ["hagar", "elijah", "joseph"],
  waiting: ["hannah", "abraham-and-sarah", "joseph", "david"],
  grieving: ["naomi", "martha-and-mary", "job"],
  fearful: ["david", "daniel", "jehoshaphat"],
  guilty: ["peter"],
  overwhelmed: ["joseph", "job"],
  unsure: ["esther"],
};

export function getRecommendationsForEmotion(
  emotion: EmotionTag,
): RankedRecommendation[] {
  const taggedAccounts = getAccountsByEmotion(emotion);
  const priorityIds = EMOTION_PRIORITY[emotion] ?? [];

  const byId = new Map(taggedAccounts.map((a) => [a.id, a]));
  const curated = priorityIds
    .map((id) => byId.get(id))
    .filter((a): a is BibleAccount => Boolean(a));

  const curatedIds = new Set(curated.map((a) => a.id));
  const uncurated = taggedAccounts.filter((a) => !curatedIds.has(a.id));

  return [...curated, ...uncurated].map((account, index) => ({
    account,
    rank: index + 1,
  }));
}

/** Keywords used only to pick the empathy message for free-text input — not for ranking accounts. */
const EMOTION_DETECTION_KEYWORDS: Record<EmotionTag, string[]> = {
  low: ["low", "tired", "exhausted", "empty", "numb", "depress", "burnt out", "burnout", "hopeless", "down", "sad", "flat"],
  anxious: ["anxious", "anxiety", "worry", "worried", "nervous", "panic", "stress", "stressed", "racing"],
  lonely: ["lonely", "alone", "isolated", "unseen", "invisible", "abandoned", "forgotten"],
  waiting: ["waiting", "wait", "stuck", "delay", "patience", "longing"],
  grieving: ["grief", "grieving", "loss", "lost", "died", "death", "mourning", "widow"],
  fearful: ["afraid", "fear", "fearful", "scared", "terrified", "danger", "threatened"],
  guilty: ["guilty", "guilt", "shame", "ashamed", "regret", "failed", "failure", "sorry"],
  overwhelmed: ["overwhelmed", "too much", "cant cope", "can't cope", "drowning", "overloaded", "everything at once"],
  unsure: [],
};

function detectEmotion(text: string): EmotionTag | null {
  let best: EmotionTag | null = null;
  let bestScore = 0;

  for (const emotion of EMOTIONS) {
    const keywords = EMOTION_DETECTION_KEYWORDS[emotion.slug];
    const score = keywords.reduce(
      (count, word) => (text.includes(word) ? count + 1 : count),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      best = emotion.slug;
    }
  }

  return best;
}

const MAX_TEXT_RECOMMENDATIONS = 4;

function getRecommendationsForText(input: string): RankedRecommendation[] {
  const text = input.toLowerCase();

  const scored = getAllAccounts()
    .map((account) => ({
      account,
      score: account.searchKeywords.reduce(
        (count, keyword) => (text.includes(keyword) ? count + 1 : count),
        0,
      ),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_TEXT_RECOMMENDATIONS);

  return scored.map((entry, index) => ({
    account: entry.account,
    rank: index + 1,
  }));
}

export function getRecommendation(params: {
  emotion?: string;
  input?: string;
}): RecommendationResult {
  if (params.input) {
    const detected = detectEmotion(params.input.toLowerCase());
    const textMatches = getRecommendationsForText(params.input);
    const recommendations =
      textMatches.length > 0
        ? textMatches
        : getRecommendationsForEmotion(detected ?? "unsure");

    return {
      message: detected
        ? (getEmotion(detected)?.openingMessage ?? getEmotion("unsure")!.openingMessage)
        : "Thank you for sharing what's on your mind. Even without the exact words, these accounts were chosen to sit with you today.",
      emotionLabel: null,
      recommendations,
    };
  }

  const slug = (params.emotion ?? "unsure") as EmotionTag;
  const emotion = getEmotion(slug) ?? getEmotion("unsure")!;

  return {
    message: emotion.openingMessage,
    emotionLabel: getEmotion(slug) ? emotion.label : null,
    recommendations: getRecommendationsForEmotion(slug),
  };
}
