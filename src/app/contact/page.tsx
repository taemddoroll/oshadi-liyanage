import { AnimatedSection } from "@/components/animated-section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s talk.
        </h1>
        <div className="mt-8 space-y-2 text-muted-foreground">
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      </AnimatedSection>
    </main>
  );
}
