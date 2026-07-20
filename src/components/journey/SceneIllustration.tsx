import { ImageIcon } from "lucide-react";
import type { SceneMedia } from "@/content/bible-accounts/types";
import { cn } from "@/lib/utils";

/**
 * The full-bleed cinematic image for a scene, with a bottom gradient scrim
 * and caption baked in — this is the one place a scene's illustration,
 * video, or (eventually) animation gets composited with its title, so the
 * text-readability rule can't be forgotten by a caller.
 *
 * Prefers video, then a static illustration, then falls back to a generic
 * placeholder. Every scene has none of the multimedia fields set yet except
 * Job's illustrations — the moment a `media.illustration` path is added to
 * any other account's scene, it renders here with no other code changes.
 */
export function SceneIllustration({
  media,
  sceneTitle,
  eyebrow,
  className,
}: {
  media?: SceneMedia;
  sceneTitle: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-muted", className)}>
      {media?.video ? (
        <video
          src={media.video}
          controls
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : media?.illustration ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.illustration}
          alt={sceneTitle}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-radial-glow"
          aria-hidden
        >
          <ImageIcon className="size-10 text-primary/20" strokeWidth={1.5} />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
        {eyebrow && (
          <p className="text-[11px] font-medium tracking-wide text-white/75 uppercase sm:text-xs">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-1 text-balance font-heading text-xl leading-tight font-medium text-white sm:text-3xl">
          {sceneTitle}
        </h1>
      </div>
    </div>
  );
}
