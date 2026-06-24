"use client";

import { motion } from "framer-motion";
import { staggerContainer, letterVariant } from "@/app/lib/animations";

const TITLE = "HIDE";

// Easing for hero-specific reveals
const easeOut = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Layered atmospheric background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Base warm-dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(170deg, #080808 0%, #140b04 35%, #0e0804 65%, #080808 100%)",
          }}
        />
        {/* Radial amber ember — low center */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 85%, rgba(139,58,15,0.14) 0%, transparent 100%)",
          }}
        />
        {/* Radial red-dusk bleed — upper right */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 55% 40% at 75% 15%, rgba(107,26,26,0.1) 0%, transparent 100%)",
          }}
        />
        {/* Hard vignette — corners */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 45%, rgba(8,8,8,0.85) 100%)",
          }}
        />
      </div>

      {/* Thin horizontal amber line — upper third */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.12 }}
        transition={{ duration: 2.0, delay: 0.5, ease: easeOut }}
        className="absolute top-[28%] left-0 right-0 h-px bg-ember-gold origin-left z-10"
        aria-hidden="true"
      />

      {/* Title */}
      <div className="relative z-20 flex flex-col items-center gap-7 select-none">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex items-end gap-3 md:gap-6"
          aria-label="HIDE"
        >
          {TITLE.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className="font-display font-light text-pale-cream leading-none"
              style={{
                fontSize: "clamp(5.5rem, 19vw, 14rem)",
                letterSpacing: "0.12em",
                textShadow: "0 2px 80px rgba(201,125,46,0.06)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Director credit */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: easeOut }}
          className="section-label text-pale-cream/40 tracking-[0.55em]"
        >
          A Film by Alexander Bello
        </motion.p>

        {/* Amber rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.35 }}
          transition={{ duration: 1.1, delay: 1.9, ease: easeOut }}
          className="w-14 h-px bg-ember-gold origin-center"
          aria-hidden="true"
        />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8, ease: easeOut }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="section-label text-pale-cream/25 tracking-[0.45em]" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-9 bg-gradient-to-b from-ember-gold/40 to-transparent"
        />
      </motion.div>

      {/* Trailer embed — remove `hidden` class and replace YOUR_VIDEO_ID when ready */}
      <div className="hidden absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&rel=0"
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          style={{ filter: "brightness(0.18)" }}
        />
      </div>
    </section>
  );
}
