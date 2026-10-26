import { AnimatedSection } from "@/components/animated-section";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <AnimatedSection>
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Add your bio here.
        </p>
      </AnimatedSection>
    </main>
  );
}
