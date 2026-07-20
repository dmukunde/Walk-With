// The recommendation engine. This is the only place that decides which
// accounts get shown and in what order — pages just call getRecommendation()
// and render the result. Ranking is a curated priority list per emotion (or
// life situation) — the editorial layer a product/content team would tune
// over time — with any account tagged for it but not yet curated appended
// after, so a newly added account is discoverable immediately, before
// anyone gets around to ranking it.
//
// Before ranking anything, getRecommendation() checks whether free-text
// input is too vague to act on confidently (needsClarification) and, if so,
// returns a single follow-up question instead of guessing. That keeps the
// "Bible account first, reflection after" rule honest — we don't hand
// someone a recommendation we're not actually confident in.

import type { EmotionTag } from "@/content/bible-accounts/types";
import {
  getAccountsByEmotion,
  getAccountsByLifeSituation,
  getAllAccounts,
  type BibleAccount,
} from "@/content/bible-accounts";
import { EMOTIONS, getEmotion } from "@/content/emotions";
import {
  buildClarificationQuestion,
  CLARIFICATION_OPTIONS,
  type ClarificationOption,
} from "@/content/clarifications";

export type RankedRecommendation = {
  account: BibleAccount;
  rank: number;
};

export type RecommendationOutcome =
  | {
      kind: "clarify";
      question: string;
      options: ClarificationOption[];
      originalInput: string;
    }
  | {
      kind: "result";
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

/** Same curation pattern as EMOTION_PRIORITY, keyed by lifeSituation tag instead. */
const SITUATION_PRIORITY: Record<string, string[]> = {
  "distant-from-god": ["job", "elijah"],
};

const SITUATION_MESSAGES: Record<string, string> = {
  "distant-from-god":
    "Feeling far from God doesn't mean he's far from you. That distance is worth paying attention to, not rushing past.",
};

const DEFAULT_SITUATION_MESSAGE =
  "Thank you for naming that. Here's an account that speaks to it directly.";

function rankByPriority(
  taggedAccounts: BibleAccount[],
  priorityIds: string[],
): RankedRecommendation[] {
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

export function getRecommendationsForEmotion(
  emotion: EmotionTag,
): RankedRecommendation[] {
  return rankByPriority(
    getAccountsByEmotion(emotion),
    EMOTION_PRIORITY[emotion] ?? [],
  );
}

export function getRecommendationsForLifeSituation(
  situation: string,
): RankedRecommendation[] {
  return rankByPriority(
    getAccountsByLifeSituation(situation),
    SITUATION_PRIORITY[situation] ?? [],
  );
}

/** Keywords used only to pick the empathy message for free-text input — not for ranking accounts. */
const EMOTION_DETECTION_KEYWORDS: Record<EmotionTag, string[]> = {
  low: ["low", "tired", "exhausted", "empty", "numb", "depress", "burnt out", "burnout", "hopeless", "down", "sad", "flat"],
  anxious: ["anxious", "anxiety", "worry", "worried", "nervous", "panic", "stress", "stressed", "racing"],
  lonely: ["lonely", "alone", "isolated", "unseen", "invisible", "abandoned", "forgotten"],
  waiting: ["waiting", "wait", "stuck", "delay", "patience", "longing"],
  grieving: ["grief", "grieving", "loss", "lost my", "died", "death", "mourning", "widow"],
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

function scoreAccountsForText(text: string) {
  return getAllAccounts()
    .map((account) => ({
      account,
      score: account.searchKeywords.reduce(
        (count, keyword) => (text.includes(keyword) ? count + 1 : count),
        0,
      ),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
}

const MAX_TEXT_RECOMMENDATIONS = 4;
/** Inputs at or under this word count are short enough that a zero-signal match should prompt, not guess. */
const SHORT_INPUT_WORD_LIMIT = 6;

/**
 * A short sentence that doesn't hit a single recognizable keyword ("I feel
 * lost") is exactly the case where a confident recommendation would be a
 * guess dressed up as an answer. Longer messages that miss on keywords
 * still fall through to the default (unsure) recommendation rather than
 * interrupting someone who already wrote at length.
 */
export function needsClarification(input: string): boolean {
  const trimmed = input.trim();
  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;
  if (wordCount === 0 || wordCount > SHORT_INPUT_WORD_LIMIT) return false;

  const text = trimmed.toLowerCase();
  const hasKeywordSignal = scoreAccountsForText(text).length > 0;
  return !hasKeywordSignal;
}

function getRecommendationsForText(input: string): RankedRecommendation[] {
  const text = input.toLowerCase();
  const scored = scoreAccountsForText(text).slice(0, MAX_TEXT_RECOMMENDATIONS);

  return scored.map((entry, index) => ({
    account: entry.account,
    rank: index + 1,
  }));
}

export function getRecommendation(params: {
  emotion?: string;
  input?: string;
  situation?: string;
  skipClarify?: boolean;
}): RecommendationOutcome {
  if (params.situation) {
    return {
      kind: "result",
      message:
        SITUATION_MESSAGES[params.situation] ?? DEFAULT_SITUATION_MESSAGE,
      emotionLabel: null,
      recommendations: getRecommendationsForLifeSituation(params.situation),
    };
  }

  if (params.input) {
    if (!params.skipClarify && needsClarification(params.input)) {
      return {
        kind: "clarify",
        question: buildClarificationQuestion(params.input),
        options: CLARIFICATION_OPTIONS,
        originalInput: params.input,
      };
    }

    const detected = detectEmotion(params.input.toLowerCase());
    const textMatches = getRecommendationsForText(params.input);
    const recommendations =
      textMatches.length > 0
        ? textMatches
        : getRecommendationsForEmotion(detected ?? "unsure");

    return {
      kind: "result",
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
    kind: "result",
    message: emotion.openingMessage,
    emotionLabel: getEmotion(slug) ? emotion.label : null,
    recommendations: getRecommendationsForEmotion(slug),
  };
}
