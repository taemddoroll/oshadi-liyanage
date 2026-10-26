import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function BrandBanner() {
  return (
    <footer className="overflow-hidden border-t border-border bg-black text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-8">
        <span className="text-sm text-white/60">{profile.tagline}</span>
        <Link
          href="#top"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="-mt-2 select-none overflow-hidden whitespace-nowrap px-6 pb-2 text-[20vw] font-black leading-none tracking-tighter sm:text-[16vw] md:text-[13vw]">
        {profile.firstName}
      </p>
    </footer>
  );
}
