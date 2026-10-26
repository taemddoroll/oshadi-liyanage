import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ExperienceEntry } from "@/data/experience";

export function FeaturedCard({ entry }: { entry: ExperienceEntry }) {
  const cover = entry.photos[0];

  return (
    <Link href={`/experience/${entry.topicSlug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {cover ? (
          <Image
            src={cover}
            alt={entry.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-white/90">
            {entry.title}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span>{entry.title}</span>
      </div>
    </Link>
  );
}
