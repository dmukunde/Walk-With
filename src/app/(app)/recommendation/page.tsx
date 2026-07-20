import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getRecommendationByEmotion,
  getRecommendationFromText,
} from "@/lib/recommendations/mock";
import { Button } from "@/components/ui/button";

export default async function RecommendationPage({
  searchParams,
}: {
  searchParams: Promise<{ emotion?: string; input?: string }>;
}) {
  const params = await searchParams;

  const recommendation = params.input
    ? getRecommendationFromText(params.input)
    : getRecommendationByEmotion(params.emotion ?? "unsure");

  const { message, story, emotionLabel } = recommendation;

  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/home"
        className="animate-fade-up inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </Link>

      <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "60ms" }}>
        {emotionLabel && (
          <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {emotionLabel}
          </span>
        )}
        <p className="text-balance font-heading text-xl leading-snug text-foreground sm:text-2xl">
          {message}
        </p>
      </div>

      <div
        className="animate-fade-up group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_44px_-24px_rgba(80,50,20,0.25)]"
        style={{ animationDelay: "140ms" }}
      >
        <div className="bg-radial-glow p-7 sm:p-9">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            An account for you
          </p>
          <h2 className="mt-2 font-heading text-3xl font-medium tracking-tight text-foreground">
            {story.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{story.epithet}</p>
          <p className="mt-5 leading-relaxed text-foreground/90">
            {story.overview}
          </p>

          <div className="mt-6 rounded-2xl bg-card/70 p-5 ring-1 ring-border/60">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Why this account
            </p>
            <p className="mt-2 leading-relaxed text-foreground/90">
              {story.whyRelevant}
            </p>
          </div>

          <Button
            render={<Link href={`/story/${story.slug}`} />}
            nativeButton={false}
            size="lg"
            className="mt-7"
          >
            Explore {story.name}&apos;s account
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <p
        className="animate-fade-up text-center text-sm text-muted-foreground"
        style={{ animationDelay: "200ms" }}
      >
        Not quite right?{" "}
        <Link href="/home" className="text-foreground underline">
          Share how you&apos;re feeling again
        </Link>
      </p>
    </div>
  );
}
