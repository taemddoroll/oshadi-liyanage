import { CtaSection } from "@/components/cta-section";
import { TopicCard } from "@/components/topic-card";
import { experienceTopics } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h1>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {experienceTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </div>

      <CtaSection />
    </main>
  );
}
