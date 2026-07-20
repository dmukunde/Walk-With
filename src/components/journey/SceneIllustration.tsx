import { ImageIcon } from "lucide-react";
import type { SceneMedia } from "@/content/bible-accounts/types";
import { cn } from "@/lib/utils";

/**
 * Renders whatever multimedia a scene has, preferring video, then a static
 * illustration, then a named animation asset. Every scene has none of these
 * today, so this always falls through to the placeholder — but the moment
 * content ops adds a `media.illustration` path to a scene, it appears here
 * with no other code changes.
 */
export function SceneIllustration({
  media,
  sceneTitle,
  className,
}: {
  media?: SceneMedia;
  sceneTitle: string;
  className?: string;
}) {
  if (media?.video) {
    return (
      <div className={cn("overflow-hidden rounded-3xl bg-muted", className)}>
        <video
          src={media.video}
          controls
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (media?.illustration) {
    return (
      <div className={cn("overflow-hidden rounded-3xl", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.illustration}
          alt={sceneTitle}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-3xl bg-radial-glow ring-1 ring-border/60",
        className,
      )}
      aria-hidden
    >
      <ImageIcon className="size-10 text-primary/20" strokeWidth={1.5} />
    </div>
  );
}
