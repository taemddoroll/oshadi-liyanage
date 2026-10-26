import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Got a project in mind?
        <br />
        Let&apos;s talk.
      </h2>
      <div className="relative mt-12 border-t border-border pt-4">
        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
        </div>
        <Link
          href="/contact"
          aria-label="Get in touch"
          className="absolute -top-8 right-0 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-transform hover:scale-105"
        >
          <ArrowUpRight className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
