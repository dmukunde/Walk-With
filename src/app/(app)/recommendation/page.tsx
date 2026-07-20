import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getRecommendation } from "@/lib/recommendations/engine";
import { RecommendationCard } from "@/components/recommendation/RecommendationCard";
import { ClarificationPrompt } from "@/components/recommendation/ClarificationPrompt";

export default async function RecommendationPage({
  searchParams,
}: {
  searchParams: Promise<{
    emotion?: string;
    input?: string;
    situation?: string;
    skipClarify?: string;
  }>;
}) {
  const params = await searchParams;
  const outcome = getRecommendation({
    emotion: params.emotion,
    input: params.input,
    situation: params.situation,
    skipClarify: params.skipClarify === "true",
  });

  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/home"
        className="animate-fade-up inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </Link>

      {outcome.kind === "clarify" ? (
        <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <p className="mb-5 text-sm text-muted-foreground">
            Thank you for sharing that. Help me understand a little more
            before I point you to a story.
          </p>
          <ClarificationPrompt
            question={outcome.question}
            options={outcome.options}
            originalInput={outcome.originalInput}
          />
        </div>
      ) : (
        <>
          <div
            className="animate-fade-up flex flex-col gap-4"
            style={{ animationDelay: "60ms" }}
          >
            {outcome.emotionLabel && (
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {outcome.emotionLabel}
              </span>
            )}
            <p className="text-balance font-heading text-xl leading-snug text-foreground sm:text-2xl">
              {outcome.message}
            </p>
            {outcome.recommendations.length > 1 && (
              <p className="text-sm text-muted-foreground">
                A few accounts speak to this. Choose the one you&apos;d like
                to begin with.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-5">
            {outcome.recommendations.map(({ account, rank }) => (
              <div
                key={account.id}
                className="animate-fade-up"
                style={{ animationDelay: `${100 + rank * 60}ms` }}
              >
                <RecommendationCard
                  account={account}
                  rank={rank}
                  featured={rank === 1}
                />
              </div>
            ))}
          </div>
        </>
      )}

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
