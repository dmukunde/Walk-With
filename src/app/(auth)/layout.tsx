import { Logo } from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-radial-glow px-4 py-12">
      <Logo className="mb-8" />
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
