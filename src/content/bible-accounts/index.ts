// The content registry. To add a new Bible account: create one file in this
// directory exporting a BibleAccount, then add it to ACCOUNT_MODULES below.
// Nothing else in the app needs to change — pages and the recommendation
// engine only ever read through the functions exported here.

import type { BibleAccount, EmotionTag } from "./types";
import abrahamAndSarah from "./abraham-and-sarah";
import daniel from "./daniel";
import david from "./david";
import elijah from "./elijah";
import esther from "./esther";
import gideon from "./gideon";
import hagar from "./hagar";
import hannah from "./hannah";
import jehoshaphat from "./jehoshaphat";
import job from "./job";
import joseph from "./joseph";
import marthaAndMary from "./martha-and-mary";
import naomi from "./naomi";
import peter from "./peter";

const ACCOUNT_MODULES: BibleAccount[] = [
  abrahamAndSarah,
  daniel,
  david,
  elijah,
  esther,
  gideon,
  hagar,
  hannah,
  jehoshaphat,
  job,
  joseph,
  marthaAndMary,
  naomi,
  peter,
];

const ACCOUNTS_BY_ID = new Map<string, BibleAccount>(
  ACCOUNT_MODULES.map((account) => [account.id, account]),
);

export function getAllAccounts(): BibleAccount[] {
  return ACCOUNT_MODULES;
}

export function getAccountById(id: string): BibleAccount | undefined {
  return ACCOUNTS_BY_ID.get(id);
}

export function getAccountsByEmotion(emotion: EmotionTag): BibleAccount[] {
  return ACCOUNT_MODULES.filter((account) =>
    account.emotionTags.includes(emotion),
  );
}

export function getAccountsByLifeSituation(situation: string): BibleAccount[] {
  return ACCOUNT_MODULES.filter((account) =>
    account.lifeSituations.includes(situation),
  );
}

export type { BibleAccount, EmotionTag };
