import { notFound } from "next/navigation";
import { getAccountById } from "@/content/bible-accounts";
import { StoryJourney } from "@/components/journey/StoryJourney";

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const account = getAccountById(slug);

  if (!account) {
    notFound();
  }

  return <StoryJourney account={account} />;
}
