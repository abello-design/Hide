"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "@/app/lib/animations";

// Social links — update href with real Instagram handle
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/hidethefilm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black border-t border-pale-cream/5 py-20 md:py-24"
    >
      {/* Subtle top amber glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px opacity-30"
        style={{
          background: "linear-gradient(to right, transparent, var(--ember-gold), transparent)",
        }}
      />

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-10"
      >
        {/* Film title */}
        <h2
          className="font-display font-light text-pale-cream/20 tracking-[0.4em] text-center select-none"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          HIDE
        </h2>

        {/* Thin amber rule */}
        <div className="w-12 h-px bg-ember-gold/30" />

        {/* Instagram icon */}
        <div className="flex items-center gap-8">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-pale-cream/25 hover:text-ember-gold transition-colors duration-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-[11px] tracking-[0.15em] text-pale-cream/15 text-center">
          &copy; 2025 Alexander Bello. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
