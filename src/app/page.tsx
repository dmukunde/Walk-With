import Link from "next/link";
import { MessageCircleHeart, BookHeart, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    icon: MessageCircleHeart,
    title: "Share what's on your mind.",
    description:
      "Tell us how your heart is doing today — in your own words, or by choosing what you're feeling.",
  },
  {
    number: "02",
    icon: BookHeart,
    title: "Receive a Bible account chosen for your situation.",
    description:
      "We'll gently point you to a story from Scripture that has walked a similar road.",
  },
  {
    number: "03",
    icon: Sparkles,
    title:
      "Experience the story through Scripture, guided reflection, and future dramatizations.",
    description:
      "Sit with key verses, reflect at your own pace, and pray it through — with dramatized retellings coming soon.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <Logo />
        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Sign In
          </Link>
          <Button
            render={<Link href="/signup" />}
            nativeButton={false}
            size="sm"
          >
            Begin Your Journey
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-radial-glow">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-20 text-center sm:py-28">
          <p className="animate-fade-up text-sm font-medium tracking-wide text-primary">
            Walk through Bible stories that speak to your heart.
          </p>
          <h1
            className="animate-fade-up mt-5 text-balance font-heading text-4xl leading-[1.1] font-medium tracking-tight text-foreground sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            You&apos;re not the first to walk this path.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-balance text-lg text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Whatever you&apos;re facing today, discover Bible accounts that
            offer hope, strength, and encouragement.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              render={<Link href="/signup" />}
              nativeButton={false}
              size="xl"
            >
              Begin Your Journey
            </Button>
            <Button
              render={<Link href="/login" />}
              nativeButton={false}
              size="xl"
              variant="outline"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            How it Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A calm, three-step path from how you feel to a story that speaks
            to it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="animate-fade-up relative flex flex-col items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-16px_rgba(80,50,20,0.18)] sm:p-7"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="font-heading text-sm text-muted-foreground/60">
                {step.number}
              </span>
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <step.icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-lg leading-snug font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-16 text-center sm:py-24">
        <h2 className="text-balance font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Whatever you&apos;re carrying today, there&apos;s a story waiting to
          walk with you.
        </h2>
        <div className="mt-8">
          <Button
            render={<Link href="/signup" />}
            nativeButton={false}
            size="xl"
          >
            Begin Your Journey
          </Button>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-center text-xs text-muted-foreground">
        Walk With is a companion for reflection and prayer — not a
        replacement for Scripture, community, or pastoral care.
      </footer>
    </div>
  );
}
