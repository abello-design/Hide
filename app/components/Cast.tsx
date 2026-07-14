"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, fadeInVariant, staggerContainer } from "@/app/lib/animations";

const CAST = [
  { character: "Aja Henry",        actor: "Carla R Stewart" },
  { character: "Sol Henry",        actor: "Kamiré" },
  { character: "Francis Hughes",   actor: "Ari Brand" },
  { character: "Patrick",          actor: "John Paul Berry" },
  { character: "Isla",             actor: "Taylor Nicole Kaplan" },
  { character: "Reid",             actor: "Kalet Ponce de Leon" },
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-0"
        >
          {CAST.map(({ character, actor }) => (
            <motion.div
              key={character}
              variants={fadeUpVariant}
              className="flex flex-col gap-1 border-b border-pale-cream/6 py-5"
            >
              <span className="font-body text-[10px] tracking-[0.22em] uppercase text-pale-cream/30">
                {character}
              </span>
              <span className="font-display text-2xl font-light text-pale-cream/85">
                {actor}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
