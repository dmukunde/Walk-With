import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllAccounts } from "@/content/bible-accounts";

export default function JourneysPage() {
  const accounts = getAllAccounts();

  return (
    <div className="flex flex-col gap-8">
      <div className="animate-fade-up">
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Every Journey
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Walk through any of these accounts, scene by scene, whenever
          you&apos;re ready.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {accounts.map((account, index) => (
          <Link
            key={account.id}
            href={`/journey/${account.id}`}
            className="animate-fade-up group flex flex-col gap-2 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_10px_24px_-14px_rgba(80,50,20,0.28)]"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-heading text-xl font-medium tracking-tight text-foreground">
                {account.name}
              </h2>
              <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                {account.estimatedReadingTime} min
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{account.title}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Begin the journey
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
