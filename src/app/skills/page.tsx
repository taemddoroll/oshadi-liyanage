import { AnimatedSection } from "@/components/animated-section";
import { SkillCard } from "@/components/skill-card";
import { CtaSection } from "@/components/cta-section";
import { skillCategories } from "@/data/skills";

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <AnimatedSection>
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Skills that fuel my passion
        </h1>
      </AnimatedSection>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>

      <CtaSection />
    </main>
  );
}
