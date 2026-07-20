"use client";

import { cn } from "@/lib/utils";

export function EmotionCard({
  label,
  disabled,
  pending,
  onSelect,
}: {
  label: string;
  disabled?: boolean;
  pending?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card px-3 py-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_10px_24px_-14px_rgba(80,50,20,0.28)]",
        "active:translate-y-0 active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-40",
        pending && "border-primary/40 opacity-100",
      )}
    >
      <span
        className={cn(
          "text-2xl transition-transform duration-200 ease-out group-hover:scale-110",
          pending && "animate-pulse",
        )}
        aria-hidden
      >
        🌿
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </button>
  );
}
