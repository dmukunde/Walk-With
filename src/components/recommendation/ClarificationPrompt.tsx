import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ClarificationOption } from "@/content/clarifications";

function hrefForOption(option: ClarificationOption, originalInput: string) {
  const { target } = option;
  if (target.type === "emotion") {
    return `/recommendation?emotion=${encodeURIComponent(target.value)}`;
  }
  if (target.type === "situation") {
    return `/recommendation?situation=${encodeURIComponent(target.value)}`;
  }
  return `/recommendation?input=${encodeURIComponent(originalInput)}&skipClarify=true`;
}

export function ClarificationPrompt({
  question,
  options,
  originalInput,
}: {
  question: string;
  options: ClarificationOption[];
  originalInput: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-balance font-heading text-xl leading-snug text-foreground sm:text-2xl">
        {question}
      </p>
      <div className="mt-2 flex flex-col gap-2.5">
        {options.map((option) => (
          <Link
            key={option.label}
            href={hrefForOption(option, originalInput)}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_10px_24px_-14px_rgba(80,50,20,0.28)]"
          >
            <span className="text-sm font-medium text-foreground sm:text-base">
              {option.label}
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
}
