import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Film,
  BookOpen,
  MessageCircleHeart,
  HandHeart,
  Clock,
} from "lucide-react";
import { getAccountById } from "@/content/bible-accounts";
import { bibleGatewayUrl } from "@/lib/bible";
import { humanizeTag } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const account = getAccountById(slug);

  if (!account) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10 pb-10">
      <Link
        href="/home"
        className="animate-fade-up inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to Home
      </Link>

      {account.heroImage ? (
        <div className="animate-fade-up overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={account.heroImage}
            alt=""
            className="h-40 w-full object-cover sm:h-56"
          />
        </div>
      ) : (
        <div
          className="animate-fade-up h-24 w-full rounded-3xl bg-radial-glow ring-1 ring-border/60 sm:h-32"
          aria-hidden
        />
      )}

      <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            A story for you
          </p>
          <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {account.estimatedReadingTime} min read
          </span>
        </div>
        <h1 className="mt-2 font-heading text-4xl font-medium tracking-tight text-foreground">
          {account.name}
        </h1>
        <p className="mt-1 text-muted-foreground">{account.title}</p>
        {account.lifeSituations.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {account.lifeSituations.map((tag) => (
              <Badge key={tag} variant="secondary">
                {humanizeTag(tag)}
              </Badge>
            ))}
          </div>
        )}
        <Button
          render={<Link href={`/journey/${account.id}`} />}
          nativeButton={false}
          size="lg"
          className="mt-6"
        >
          Begin the Journey
          <ArrowRight className="size-4" />
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          An immersive, scene-by-scene way to experience this account.
        </p>
      </div>

      <section
        className="animate-fade-up flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-7"
        style={{ animationDelay: "120ms" }}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <BookOpen className="size-4.5" strokeWidth={2} />
        </span>
        <div>
          <h2 className="font-heading text-lg font-medium text-foreground">
            What the Bible Records
          </h2>
          <p className="mt-2 leading-relaxed text-foreground/90">
            {account.overview}
          </p>
        </div>
      </section>

      <section
        className="animate-fade-up rounded-3xl bg-card/70 p-6 ring-1 ring-border/60 sm:p-7"
        style={{ animationDelay: "140ms" }}
      >
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Why this account
        </p>
        <p className="mt-2 leading-relaxed text-foreground/90">
          {account.whyRelevant}
        </p>
      </section>

      <section
        className="animate-fade-up flex flex-col items-start gap-3 rounded-3xl bg-primary/10 p-6 ring-1 ring-primary/20 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        style={{ animationDelay: "160ms" }}
      >
        <div>
          <h2 className="font-heading text-lg font-medium text-foreground">
            Read the Full Account
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This is a guide, not a substitute. {account.name}&apos;s story is
            worth reading in full, in {account.fullBibleReference}.
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

      <section
        className="animate-fade-up rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-7"
        style={{ animationDelay: "180ms" }}
      >
        <h2 className="font-heading text-lg font-medium text-foreground">
          Verses to Notice
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A few lines from the full account above, worth sitting with.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          {account.keyScriptures.map((scripture) => (
            <div
              key={scripture.reference}
              className="rounded-2xl bg-muted/60 p-4"
            >
              <p className="leading-relaxed text-foreground/90 italic">
                {scripture.text}
              </p>
              <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {scripture.reference}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="animate-fade-up flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-7"
        style={{ animationDelay: "220ms" }}
      >
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

      <section
        className="animate-fade-up rounded-3xl bg-primary/8 p-6 ring-1 ring-primary/15 sm:p-7"
        style={{ animationDelay: "260ms" }}
      >
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
              {account.name}&apos;s account — pray it as your own, in your
              own words.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/90 italic">
              {account.prayerPrompt}
            </p>
          </div>
        </div>
      </section>

      <section
        className="animate-fade-up flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border/70 bg-card/60 p-8 text-center"
        style={{ animationDelay: "320ms" }}
      >
        <span className="flex size-11 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
          <Film className="size-5" strokeWidth={2} />
        </span>
        <h2 className="font-heading text-lg font-medium text-foreground">
          Watch {account.name}&apos;s Story
        </h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          A dramatized retelling of this story is on the way.
        </p>
        <Badge variant="outline" className="mt-1">
          Coming soon
        </Badge>
        <Button variant="outline" size="sm" className="mt-2" disabled>
          Watch Story
        </Button>
      </section>
    </div>
  );
}
