"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { EmotionCard } from "@/components/home/EmotionCard";
import { EMOTIONS } from "@/lib/recommendations/mock";
import { cn } from "@/lib/utils";

export function HeartCheckIn() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [pending, setPending] = useState<string | null>(null);

  const isBusy = pending !== null;

  function goToEmotion(slug: string) {
    if (isBusy) return;
    setPending(slug);
    router.push(`/recommendation?emotion=${encodeURIComponent(slug)}`);
  }

  function submitText() {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    setPending("text");
    router.push(`/recommendation?input=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="flex flex-col gap-8">
      <div
        className={cn(
          "animate-fade-up rounded-3xl border border-border/60 bg-card p-3 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_36px_-20px_rgba(80,50,20,0.22)] transition-opacity",
          pending === "text" && "opacity-70",
        )}
        style={{ animationDelay: "80ms" }}
      >
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submitText();
            }
          }}
          disabled={isBusy}
          placeholder="Tell me what's on your mind..."
          rows={3}
          className="min-h-28 resize-none border-none bg-transparent px-3 py-2 text-base shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center justify-between px-3 pb-1">
          <span className="text-xs text-muted-foreground">
            Press Enter to share, Shift + Enter for a new line
          </span>
          <button
            type="button"
            onClick={submitText}
            disabled={!text.trim() || isBusy}
            aria-label="Share what's on your mind"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/80 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowUp className="size-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div
        className="animate-fade-up flex items-center gap-3 text-xs font-medium tracking-wide text-muted-foreground uppercase"
        style={{ animationDelay: "140ms" }}
      >
        <span className="h-px flex-1 bg-border/60" />
        Or choose what fits
        <span className="h-px flex-1 bg-border/60" />
      </div>

      <div
        className="animate-fade-up grid grid-cols-2 gap-3 sm:grid-cols-3"
        style={{ animationDelay: "200ms" }}
      >
        {EMOTIONS.map((emotion) => (
          <EmotionCard
            key={emotion.slug}
            label={emotion.label}
            disabled={isBusy && pending !== emotion.slug}
            pending={pending === emotion.slug}
            onSelect={() => goToEmotion(emotion.slug)}
          />
        ))}
      </div>
    </div>
  );
}
