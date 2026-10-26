import Image from "next/image";
import type { ExperienceEntry as ExperienceEntryType } from "@/data/experience";

export function ExperienceEntry({ entry }: { entry: ExperienceEntryType }) {
  return (
    <article className="border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">{entry.title}</h2>
        <span className="text-sm text-muted-foreground">{entry.period}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{entry.organization}</p>
      <p className="mt-4 max-w-2xl text-muted-foreground">{entry.description}</p>

      {entry.photos.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {entry.photos.map((photo) => (
            <div
              key={photo}
              className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <Image src={photo} alt={entry.title} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {entry.videoUrl && (
        <div className="mt-6 aspect-video overflow-hidden rounded-2xl">
          <iframe
            src={entry.videoUrl}
            title={entry.title}
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      )}
    </article>
  );
}
