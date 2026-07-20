import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Film,
  BookOpen,
  MessageCircleHeart,
  HandHeart,
} from "lucide-react";
import { STORIES, bibleGatewayUrl } from "@/lib/recommendations/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = STORIES[slug];

  if (!story) {
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

      <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          A story for you
        </p>
        <h1 className="mt-2 font-heading text-4xl font-medium tracking-tight text-foreground">
          {story.name}
        </h1>
        <p className="mt-1 text-muted-foreground">{story.epithet}</p>
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
            {story.overview}
          </p>
        </div>
      </section>

      <section
        className="animate-fade-up flex flex-col items-start gap-3 rounded-3xl bg-primary/10 p-6 ring-1 ring-primary/20 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        style={{ animationDelay: "150ms" }}
      >
        <div>
          <h2 className="font-heading text-lg font-medium text-foreground">
            Read the Full Account
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This is a guide, not a substitute. {story.name}&apos;s story is
            worth reading in full, in {story.fullReference}.
          </p>
        </div>
        <Button
          render={
            <a
              href={bibleGatewayUrl(story.fullReference)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          nativeButton={false}
          variant="outline"
          className="w-full shrink-0 bg-background sm:w-auto"
        >
          Read {story.fullReference}
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
          {story.scriptures.map((scripture) => (
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
        style={{ animationDelay: "240ms" }}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <MessageCircleHeart className="size-4.5" strokeWidth={2} />
        </span>
        <div className="w-full">
          <h2 className="font-heading text-lg font-medium text-foreground">
            Guided Reflection
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Rooted in what happened in {story.name}&apos;s account, not
            general advice.
          </p>
          <ul className="mt-3 flex flex-col gap-3">
            {story.reflection.map((question) => (
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
        style={{ animationDelay: "300ms" }}
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
              {story.name}&apos;s account — pray it as your own, in your own
              words.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/90 italic">
              {story.prayer}
            </p>
          </div>
        </div>
      </section>

      <section
        className="animate-fade-up flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border/70 bg-card/60 p-8 text-center"
        style={{ animationDelay: "360ms" }}
      >
        <span className="flex size-11 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
          <Film className="size-5" strokeWidth={2} />
        </span>
        <h2 className="font-heading text-lg font-medium text-foreground">
          Watch {story.name}&apos;s Story
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
