"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Film,
  HandHeart,
  MessageCircleHeart,
  Volume2,
  X,
} from "lucide-react";
import type { BibleAccount } from "@/content/bible-accounts";
import { bibleGatewayUrl } from "@/lib/bible";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SceneIllustration } from "@/components/journey/SceneIllustration";

export function StoryJourney({ account }: { account: BibleAccount }) {
  const { scenes } = account;
  const [step, setStep] = useState(0);
  const isFinale = step === scenes.length;
  const scene = isFinale ? null : scenes[step];

  return (
    <div className="flex flex-col gap-6">
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
        <div key={step} className="animate-fade-up flex flex-col gap-6">
          <SceneIllustration
            media={scene.media}
            sceneTitle={scene.title}
            className="h-56 w-full sm:h-72"
          />

          <div>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              {account.name}&apos;s journey
            </p>
            <h1 className="mt-2 font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {scene.title}
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-foreground/90">
            {scene.narrative}
          </p>

          <div className="flex flex-col gap-3">
            {scene.scriptureReferences.map((ref) => (
              <div
                key={ref.reference}
                className="rounded-2xl bg-muted/60 p-4"
              >
                <p className="leading-relaxed text-foreground/90 italic">
                  {ref.text}
                </p>
                <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {ref.reference}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" className="bg-background" disabled>
              <Volume2 className="size-4" />
              Play Narration
            </Button>
            <span className="text-xs text-muted-foreground">
              Audio narration is on the way
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
              disabled={step === 0}
              className="disabled:opacity-0"
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>
            <Button size="lg" onClick={() => setStep((s) => s + 1)}>
              Continue
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      )}

      {isFinale && (
        <div key="finale" className="animate-fade-up flex flex-col gap-10">
          <div className="rounded-3xl bg-radial-glow p-7 text-center ring-1 ring-border/60 sm:p-9">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              You&apos;ve walked through
            </p>
            <h1 className="mt-2 font-heading text-3xl font-medium tracking-tight text-foreground">
              {account.name}&apos;s Journey
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {account.title}
            </p>
          </div>

          <section className="flex flex-col gap-3 rounded-3xl bg-primary/10 p-6 ring-1 ring-primary/20 sm:flex-row sm:items-center sm:justify-between sm:p-7">
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
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
