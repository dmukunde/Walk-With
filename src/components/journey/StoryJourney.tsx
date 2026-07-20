"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Film,
  HandHeart,
  MessageCircleHeart,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import type { BibleAccount } from "@/content/bible-accounts";
import { bibleGatewayUrl } from "@/lib/bible";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SceneIllustration } from "@/components/journey/SceneIllustration";

export function StoryJourney({
  account,
  initialStep = 0,
}: {
  account: BibleAccount;
  initialStep?: number;
}) {
  const { scenes } = account;
  const [step, setStep] = useState(() =>
    Math.min(Math.max(initialStep, 0), scenes.length),
  );
  const isFinale = step === scenes.length;
  const isLastScene = step === scenes.length - 1;
  const scene = isFinale ? null : scenes[step];

  // Keep the URL in sync with the current scene, without a server round
  // trip, so refreshing the page (or sharing the link) lands back here.
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("scene", String(step + 1));
    window.history.replaceState(null, "", url.toString());
  }, [step]);

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={`/story/${account.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-3.5" />
          Exit journey
        </Link>
        <span className="text-xs text-muted-foreground">
          {isFinale
            ? "Journey complete"
            : `Scene ${step + 1} of ${scenes.length}`}
        </span>
      </div>

      <div className="flex gap-1.5">
        {scenes.map((s, index) => (
          <span
            key={s.id}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              index < step || isFinale
                ? "bg-primary"
                : index === step
                  ? "bg-primary/50"
                  : "bg-muted",
            )}
          />
        ))}
      </div>

      {scene && (
        <div key={step} className="animate-fade-up flex flex-col gap-5 sm:gap-6">
          <SceneIllustration
            media={scene.media}
            sceneTitle={scene.title}
            eyebrow={`${account.name}'s journey · Scene ${step + 1} of ${scenes.length}`}
            className="h-[42vh] max-h-[380px] min-h-[220px] w-full sm:h-[52vh] sm:max-h-[480px]"
          />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Button variant="outline" size="sm" className="bg-background" disabled>
              <Volume2 className="size-4" />
              Listen
            </Button>
            <Badge variant="outline">Coming soon</Badge>
            <a
              href={bibleGatewayUrl(account.fullBibleReference)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              View full account
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            {scene.narrative}
          </p>

          <div className="flex flex-col gap-3">
            {scene.scriptureReferences.map((ref) => (
              <div key={ref.reference} className="rounded-2xl bg-muted/60 p-4">
                <p className="leading-relaxed text-foreground/90 italic">
                  {ref.text}
                </p>
                <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {ref.reference}
                </p>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 -mx-6 mt-4 flex items-center justify-between gap-3 border-t border-border/60 bg-background px-6 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
              disabled={step === 0}
              className={cn(step === 0 && "invisible")}
            >
              <ArrowLeft className="size-4" />
              Previous
            </Button>
            <Button
              size="lg"
              onClick={() => setStep((s) => Math.min(s + 1, scenes.length))}
            >
              {isLastScene ? (
                <>
                  Complete Journey
                  <Check className="size-4" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {isFinale && (
        <div key="finale" className="animate-fade-up flex flex-col gap-8 sm:gap-10">
          <button
            type="button"
            onClick={() => setStep(scenes.length - 1)}
            className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Revisit the scenes
          </button>

          <div className="rounded-3xl bg-radial-glow p-6 text-center ring-1 ring-border/60 sm:p-9">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Journey completed
            </p>
            <h1 className="mt-2 font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {account.name}&apos;s Journey
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {account.title}
            </p>
          </div>

          <section className="flex items-start gap-4 rounded-3xl bg-primary/10 p-6 ring-1 ring-primary/20 sm:p-7">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Sparkles className="size-4.5" strokeWidth={2} />
            </span>
            <div>
              <h2 className="font-heading text-lg font-medium text-foreground">
                The Takeaway
              </h2>
              <p className="mt-2 leading-relaxed text-foreground/90">
                {account.takeaway}
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <h2 className="font-heading text-lg font-medium text-foreground">
                Read the Full Account
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                This journey is a guide, not a substitute. Read all of it in{" "}
                {account.fullBibleReference}.
              </p>
            </div>
            <Button
              render={
                <a
                  href={bibleGatewayUrl(account.fullBibleReference)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
              className="w-full shrink-0 bg-background sm:w-auto"
            >
              Read {account.fullBibleReference}
              <ArrowUpRight className="size-4" />
            </Button>
          </section>

          <section className="flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-7">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <MessageCircleHeart className="size-4.5" strokeWidth={2} />
            </span>
            <div className="w-full">
              <h2 className="font-heading text-lg font-medium text-foreground">
                Guided Reflection
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Rooted in what happened in {account.name}&apos;s account, not
                general advice.
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {account.reflectionQuestions.map((question) => (
                  <li
                    key={question}
                    className="flex gap-2.5 leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/50" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl bg-primary/8 p-6 ring-1 ring-primary/15 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <HandHeart className="size-4.5" strokeWidth={2} />
              </span>
              <div>
                <h2 className="font-heading text-lg font-medium text-foreground">
                  A Prayer to Pray
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Not words from God, but a starting point inspired by{" "}
                  {account.name}&apos;s account — pray it as your own, in
                  your own words.
                </p>
                <p className="mt-3 leading-relaxed text-foreground/90 italic">
                  {account.prayerPrompt}
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border/70 bg-card/60 p-8 text-center">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <Film className="size-5" strokeWidth={2} />
            </span>
            <h2 className="font-heading text-lg font-medium text-foreground">
              Watch {account.name}&apos;s Story
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              A dramatized retelling of this journey is on the way.
            </p>
            <Badge variant="outline" className="mt-1">
              Coming soon
            </Badge>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/journeys" />}
              nativeButton={false}
              size="lg"
              className="w-full"
            >
              <Compass className="size-4" />
              Explore another Journey
            </Button>
            <Button
              render={<Link href="/home" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="w-full bg-background"
            >
              Return Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
