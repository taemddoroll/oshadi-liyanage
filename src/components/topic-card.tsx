import Link from "next/link";
import Image from "next/image";
import type { ExperienceTopic } from "@/data/experience";

export function TopicCard({ topic }: { topic: ExperienceTopic }) {
  return (
    <Link href={`/experience/${topic.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {topic.coverImage ? (
          <Image
            src={topic.coverImage}
            alt={topic.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-lg font-semibold text-white">
            {topic.title}
          </div>
        )}
      </div>
    </Link>
  );
}
