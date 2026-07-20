import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getRecommendation } from "@/lib/recommendations/engine";
import { RecommendationCard } from "@/components/recommendation/RecommendationCard";

export default async function RecommendationPage({
  searchParams,
}: {
  searchParams: Promise<{ emotion?: string; input?: string }>;
}) {
  const params = await searchParams;
  const { message, emotionLabel, recommendations } = getRecommendation(params);

  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/home"
        className="animate-fade-up inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </Link>

      <div
        className="animate-fade-up flex flex-col gap-4"
        style={{ animationDelay: "60ms" }}
      >
        {emotionLabel && (
          <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {emotionLabel}
          </span>
        )}
        <p className="text-balance font-heading text-xl leading-snug text-foreground sm:text-2xl">
          {message}
        </p>
        {recommendations.length > 1 && (
          <p className="text-sm text-muted-foreground">
            A few accounts speak to this. Choose the one you&apos;d like to
            begin with.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {recommendations.map(({ account, rank }) => (
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
