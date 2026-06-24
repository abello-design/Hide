"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, fadeInVariant } from "@/app/lib/animations";

export default function Premise() {
  return (
    <section
      id="premise"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-32"
    >
      {/* Background image — REPLACE WITH ACTUAL STILL */}
      {/* Ideal: blood-red sky with silhouetted trees and deer, or candlelit dinner */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder atmospheric gradient simulating a dark forest/dusk scene */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0a0a0a 0%, #120804 20%, #1c0d06 50%, #120804 80%, #0a0a0a 100%)",
          }}
        />
        {/* Red-dusk atmospheric glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(107,26,26,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Subtle ember warmth at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(139,58,15,0.08) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Radial vignette — keeps text readable */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.1) 20%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-10">
        {/* Section label */}
        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-label"
        >
          Premise
        </motion.p>

        {/* Amber ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-12 h-px bg-ember-gold origin-center"
        />

        {/* Main premise text */}
        <motion.blockquote
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-display font-light italic text-pale-cream/95 leading-snug text-center"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)" }}
        >
          &ldquo;A reclusive hunter clashes with her ambitious son over whether or not to
          capitalize on a tragic, coveted family heirloom.&rdquo;
        </motion.blockquote>

        {/* Genre tag */}
        <motion.p
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-body text-xs tracking-[0.35em] uppercase text-ember-gold/60"
        >
          Horror &nbsp;·&nbsp; Drama
        </motion.p>
      </div>

      {/* Left-side vertical text decoration */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.18, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-8 md:left-14 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="font-display text-xs tracking-[0.4em] uppercase text-pale-cream/30">
          Alexander Bello
        </span>
        <div className="w-px h-16 bg-ember-gold/20" />
      </motion.div>
    </section>
  );
}
