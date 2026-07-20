import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BibleAccount } from "@/content/bible-accounts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RecommendationCard({
  account,
  rank,
  featured,
}: {
  account: BibleAccount;
  rank: number;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border p-6 transition-shadow sm:p-7",
        featured
          ? "border-primary/25 bg-radial-glow shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_44px_-24px_rgba(80,50,20,0.25)]"
          : "border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-primary uppercase">
            {featured ? "Suggested first" : `Option ${rank}`}
          </p>
          <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {account.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{account.title}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {account.estimatedReadingTime} min
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-foreground/90">
        {account.overview}
      </p>

      <div className="mt-5 rounded-2xl bg-card/70 p-4 ring-1 ring-border/60">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Why this account
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
          {account.whyRelevant}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Button
          render={<Link href={`/journey/${account.id}`} />}
          nativeButton={false}
          size="lg"
          variant={featured ? "default" : "outline"}
          className={cn(!featured && "bg-background")}
        >
          Begin {account.name}&apos;s journey
          <ArrowRight className="size-4" />
        </Button>
        <Link
          href={`/story/${account.id}`}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Or read the quick summary
        </Link>
      </div>
    </div>
  );
}
