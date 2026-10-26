import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { FeaturedCard } from "@/components/featured-card";
import { CtaSection } from "@/components/cta-section";
import { profile } from "@/data/profile";
import { experienceEntries } from "@/data/experience";

export default function Home() {
  const featured = experienceEntries.slice(0, 4);

  return (
    <main>
      <AnimatedSection>
        <div className="mx-auto max-w-5xl px-6 pt-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted sm:aspect-[21/9]">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover grayscale"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-muted to-muted/60" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent" />
            <Link
              href="/about"
              aria-label="More about me"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <h1 className="absolute inset-x-6 bottom-6 text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
              {profile.role}
            </h1>
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl justify-end px-6 py-8">
          <div className="max-w-md">
            <p className="text-muted-foreground">{profile.bio}</p>
            <Link
              href="/about"
              className="mt-3 inline-flex items-center gap-1 text-sm transition-colors hover:text-muted-foreground"
            >
              More about me <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Impressive Works</h2>
          <Link
            href="/experience"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore more
          </Link>
        </div>

        {featured.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featured.map((entry) => (
              <FeaturedCard key={entry.title} entry={entry} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Add entries to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">src/data/experience.ts</code> to
            show them here.
          </p>
        )}
      </section>

      <CtaSection />
    </main>
  );
}
