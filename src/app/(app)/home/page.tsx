import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { HeartCheckIn } from "@/components/home/HeartCheckIn";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const firstName = profile?.full_name?.split(" ")[0];
  const greeting = getGreeting();

  return (
    <div className="flex flex-col gap-10">
      <div className="animate-fade-up">
        <p className="text-sm font-medium text-primary">
          {greeting}
          {firstName ? `, ${firstName}` : ""}
        </p>
        <h1 className="mt-3 text-balance font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl">
          How is your heart today?
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Share what&apos;s on your mind, or choose what fits best. There&apos;s
          a story waiting to walk with you.
        </p>
      </div>

      <HeartCheckIn />
    </div>
  );
}
