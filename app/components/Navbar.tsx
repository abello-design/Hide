"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNavVariant, mobileNavLinkVariant } from "@/app/lib/animations";

const NAV_LINKS = [
  { label: "Premise", href: "#premise" },
  { label: "Cast", href: "#cast" },
  { label: "Team", href: "#team" },
  { label: "BTS", href: "#bts" },
  { label: "Contact", href: "#contact" },
];

const easeOut = [0.23, 1, 0.32, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.9, ease: easeOut }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-ember-gold/15"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-lg tracking-[0.35em] text-pale-cream/90 hover:text-ember-gold transition-colors duration-200"
          aria-label="HIDE — Back to top"
        >
          HIDE
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleLinkClick(href)}
                className="group relative font-body text-[11px] tracking-[0.28em] uppercase text-pale-cream/50 hover:text-pale-cream/90 transition-colors duration-200"
              >
                {label}
                {/* Underline — slides in left to right */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-ember-gold group-hover:w-full transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }} />
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 z-50 relative"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="block w-5 h-px bg-pale-cream origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-px bg-pale-cream origin-center"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="block w-5 h-px bg-pale-cream origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileNavVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
          >
            <div className="absolute left-7 top-1/4 bottom-1/4 w-px bg-ember-gold/15" />

            <ul className="flex flex-col items-center gap-7">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  custom={i}
                  variants={mobileNavLinkVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => handleLinkClick(href)}
                    className="font-display text-[2.8rem] tracking-[0.15em] text-pale-cream/75 hover:text-ember-gold transition-colors duration-200 uppercase"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 section-label text-pale-cream/20 whitespace-nowrap">
              A Film by Alexander Bello
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
