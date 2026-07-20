import { notFound } from "next/navigation";
import { getAccountById } from "@/content/bible-accounts";
import { StoryJourney } from "@/components/journey/StoryJourney";

export default async function JourneyPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ scene?: string }>;
}) {
  const { slug } = await params;
  const { scene } = await searchParams;
  const account = getAccountById(slug);

  if (!account) {
    notFound();
  }

  // `scene` in the URL is 1-indexed for readability (?scene=2 = scene 2).
  // Internally steps are 0-indexed, with scenes.length itself being the finale.
  const requested = scene ? Number.parseInt(scene, 10) - 1 : 0;
  const initialStep = Number.isFinite(requested)
    ? Math.min(Math.max(requested, 0), account.scenes.length)
    : 0;

  return <StoryJourney account={account} initialStep={initialStep} />;
}
