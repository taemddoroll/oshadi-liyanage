import { notFound } from "next/navigation";
import { ExperienceEntry } from "@/components/experience-entry";
import { CtaSection } from "@/components/cta-section";
import { experienceTopics, experienceEntries } from "@/data/experience";

export function generateStaticParams() {
  return experienceTopics.map((topic) => ({ topic: topic.slug }));
}

export default async function ExperienceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicSlug } = await params;
  const topic = experienceTopics.find((t) => t.slug === topicSlug);

  if (!topic) notFound();

  const entries = experienceEntries.filter((e) => e.topicSlug === topicSlug);

  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {topic.title}
        </h1>

        {entries.length > 0 ? (
          <div className="mt-10">
            {entries.map((entry) => (
              <ExperienceEntry key={entry.title} entry={entry} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-muted-foreground">
            Add entries for this topic to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">src/data/experience.ts</code>.
          </p>
        )}
      </div>

      <CtaSection />
    </main>
  );
}
