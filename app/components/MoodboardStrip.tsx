"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInVariant } from "@/app/lib/animations";

// Moodboard panels — set src to a path like "/stills/rolls-royce.jpg" when stills are ready.
// Each panel is designed to stand on its own atmospherically without a photo.
const PANELS = [
  {
    src: null as string | null, // REPLACE: /stills/rolls-royce.jpg
    alt: "Rolls Royce — luxury in the dark",
    label: "Luxury",
    sublabel: "The city calls",
    gradient: "linear-gradient(160deg, #0c0c0e 0%, #111018 50%, #0a0a0c 100%)",
    glow: "radial-gradient(ellipse 70% 60% at 30% 70%, rgba(92,61,30,0.2) 0%, transparent 70%)",
  },
  {
    src: null as string | null, // REPLACE: /stills/candlelit-dinner.jpg
    alt: "Candlelit dinner table",
    label: "Ritual",
    sublabel: "Blood and ceremony",
    gradient: "linear-gradient(160deg, #180d04 0%, #210f05 50%, #130b03 100%)",
    glow: "radial-gradient(ellipse 60% 70% at 50% 80%, rgba(139,58,15,0.22) 0%, transparent 70%)",
  },
  {
    src: null as string | null, // REPLACE: /stills/red-sky-deer.jpg
    alt: "Red dusk sky with silhouetted deer",
    label: "Hunt",
    sublabel: "Before the reckoning",
    gradient: "linear-gradient(160deg, #1a0808 0%, #240c0c 50%, #150606 100%)",
    glow: "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(107,26,26,0.28) 0%, transparent 70%)",
  },
  {
    src: null as string | null, // REPLACE: /stills/leather-fur.jpg
    alt: "Leather and fur — the heirloom",
    label: "Heirloom",
    sublabel: "What is owed",
    gradient: "linear-gradient(160deg, #100c06 0%, #160e07 50%, #0c0904 100%)",
    glow: "radial-gradient(ellipse 60% 60% at 70% 60%, rgba(92,61,30,0.18) 0%, transparent 70%)",
  },
  {
    src: null as string | null, // REPLACE: /stills/whiskey-glass.jpg
    alt: "Whiskey glass in amber light",
    label: "Inheritance",
    sublabel: "The weight of choosing",
    gradient: "linear-gradient(160deg, #0e0b06 0%, #191005 50%, #0b0904 100%)",
    glow: "radial-gradient(ellipse 70% 50% at 40% 80%, rgba(201,125,46,0.14) 0%, transparent 70%)",
  },
];

export default function MoodboardStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "-52%"]);

  return (
    <section
      id="moodboard"
      ref={sectionRef}
      className="relative w-full bg-black py-20 md:py-28 overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14"
      >
        <p className="section-label mb-2">The World of Hide</p>
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-pale-cream/18">
          Scroll to explore
        </p>
      </motion.div>

      {/* Horizontal strip */}
      <div className="overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-2 md:gap-3 px-6 md:px-12 will-change-transform"
        >
          {PANELS.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.025 }}
              className="relative flex-none overflow-hidden group"
              style={{
                width: "clamp(220px, 30vw, 440px)",
                height: "clamp(280px, 42vh, 500px)",
              }}
            >
              {panel.src ? (
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.65) contrast(1.05) saturate(0.85)" }}
                  sizes="(max-width: 768px) 55vw, 30vw"
                />
              ) : (
                /* Atmospheric color-field panel — intentional, not placeholder */
                <div className="absolute inset-0">
                  <div className="absolute inset-0" style={{ background: panel.gradient }} />
                  <div className="absolute inset-0" style={{ background: panel.glow }} />
                  {/* Fine grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(201,125,46,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(201,125,46,0.8) 1px, transparent 1px)
                      `,
                      backgroundSize: "48px 48px",
                    }}
                  />
                  {/* Vertical Roman numeral — ghost decoration */}
                  <div
                    className="absolute top-6 right-6 font-display text-[6rem] leading-none text-pale-cream opacity-[0.025] select-none"
                    aria-hidden="true"
                  >
                    {["I", "II", "III", "IV", "V"][i]}
                  </div>
                </div>
              )}

              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 40%, transparent 70%)",
                }}
              />

              {/* Panel label */}
              <div className="absolute bottom-5 left-5 z-10">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-3.5 h-px bg-ember-gold/50" />
                  <span className="section-label text-pale-cream/60 group-hover:text-ember-gold/80 transition-colors duration-200" style={{ fontSize: "0.6rem" }}>
                    {panel.label}
                  </span>
                </div>
                <p className="font-display italic text-pale-cream/30 text-sm font-light tracking-wide pl-6 group-hover:text-pale-cream/50 transition-colors duration-300">
                  {panel.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll progress bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-7">
        <div className="relative w-full h-px bg-pale-cream/5">
          <motion.div
            className="absolute left-0 top-0 h-full bg-ember-gold/35"
            style={{
              width: useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]),
            }}
          />
        </div>
      </div>
    </section>
  );
}
