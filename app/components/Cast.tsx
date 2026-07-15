"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariant, fadeInVariant, staggerContainer } from "@/app/lib/animations";

const CAST = [
  { character: "Aja Henry",        actor: "Carla R Stewart",      photo: "/cast/carla-r-stewart.png"       },
  { character: "Sol Henry",        actor: "Kamiré",               photo: "/cast/kamire.png"                },
  { character: "Francis Hughes",   actor: "Ari Brand",            photo: "/cast/ari-brand.png"             },
  { character: "Patrick",          actor: "John Paul Berry",      photo: "/cast/john-paul-berry.jpeg"      },
  { character: "Isla",             actor: "Taylor Nicole Kaplan", photo: "/cast/taylor-nicole-kaplan.png"  },
  { character: "Reid",             actor: "Kalet Ponce de Leon",  photo: "/cast/kalet-ponce-de-leon.png"   },
];

export default function Cast() {
  return (
    <section id="cast" className="w-full bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-14 md:mb-16"
        >
          <p className="section-label">Cast</p>
          <div className="flex-1 h-px bg-ember-gold/15" />
        </motion.div>

        {/* Cast grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-x-8 md:gap-y-14"
        >
          {CAST.map(({ character, actor, photo }) => (
            <motion.div
              key={character}
              variants={fadeUpVariant}
              className="group flex flex-col gap-3"
            >
              {/* Headshot */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={photo}
                  alt={actor}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  className="object-cover object-top [filter:grayscale(30%)_sepia(15%)_brightness(0.80)_contrast(1.05)] group-hover:[filter:grayscale(10%)_sepia(8%)_brightness(0.92)_contrast(1.02)] transition-[filter] duration-700"
                />
                {/* Bottom gradient so text area has depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 pointer-events-none" />
                {/* Subtle amber bloom on hover */}
                <div className="absolute inset-0 bg-ember-gold/0 group-hover:bg-ember-gold/[0.04] transition-colors duration-700 pointer-events-none" />
              </div>

              {/* Labels */}
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-body text-[10px] tracking-[0.22em] uppercase text-pale-cream/30">
                  {character}
                </span>
                <span className="font-display text-xl md:text-2xl font-light text-pale-cream/80 group-hover:text-pale-cream/95 transition-colors duration-300">
                  {actor}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
