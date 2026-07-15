import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { CAST } from "@/app/lib/cast-data";

export function generateStaticParams() {
  return CAST.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = CAST.find((m) => m.slug === params.slug);
  if (!member) return {};
  return { title: `${member.actor} — HIDE` };
}

export default function ActorPage({ params }: { params: { slug: string } }) {
  const member = CAST.find((m) => m.slug === params.slug);
  if (!member) notFound();

  return (
    <main className="min-h-screen bg-black text-pale-cream overflow-x-hidden">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-24">

        {/* Back */}
        <Link
          href="/#cast"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.28em] uppercase text-pale-cream/35 hover:text-ember-gold transition-colors duration-200 mb-12"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="0.75" stroke="currentColor">
            <path d="M9 2L4 7l5 5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Cast
        </Link>

        {/* Actor name — page title */}
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-[0.08em] text-pale-cream/90 mb-14 md:mb-20">
          {member.actor}
        </h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — headshot card */}
          <div className="flex flex-col gap-4">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={member.photo}
                alt={member.actor}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top [filter:grayscale(25%)_sepia(12%)_brightness(0.82)_contrast(1.05)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />
            </div>

          </div>

          {/* Right — bio */}
          <div className="md:pt-2">
            {member.bio && (
              <div className="flex flex-col gap-6">
                <div className="w-8 h-px bg-ember-gold/30" />
                <p className="font-body text-[15px] leading-[1.85] text-pale-cream/60 tracking-wide">
                  {member.bio}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
