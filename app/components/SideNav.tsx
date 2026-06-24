"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero",       label: "Home" },
  { id: "premise",    label: "Premise" },
  { id: "characters", label: "Characters" },
  { id: "bts",        label: "BTS" },
  { id: "moodboard",  label: "World" },
  { id: "team",       label: "Team" },
  { id: "contact",    label: "Contact" },
];

const easeOut = [0.23, 1, 0.32, 1] as const;

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    if (id === "hero") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-0"
          aria-label="Page sections"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="w-px h-7 bg-ember-gold/12" />

          {SECTIONS.map(({ id, label }, i) => {
            const isActive = active === id;
            const isHovered = hovered === id;
            const showLabel = isActive || isHovered;

            return (
              <div key={id} className="flex flex-col items-center">
                <button
                  onClick={() => scrollTo(id)}
                  onMouseEnter={() => setHovered(id)}
                  className="relative flex items-center py-2.5 pl-2 pr-10"
                  aria-label={`Go to ${label}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {/* Dot */}
                  <div className="relative w-3 h-3 flex items-center justify-center flex-shrink-0">
                    {isActive && (
                      <motion.div
                        layoutId="sidenav-pip"
                        className="absolute w-1.5 h-1.5 rounded-full bg-ember-gold"
                        transition={{ type: "spring", stiffness: 450, damping: 38 }}
                      />
                    )}
                    <div
                      className="w-[5px] h-[5px] rounded-full transition-colors duration-200"
                      style={{
                        backgroundColor: isActive
                          ? "transparent"
                          : isHovered
                          ? "rgba(201,125,46,0.5)"
                          : "rgba(232,220,200,0.18)",
                      }}
                    />
                  </div>

                  {/* Label — appears to the right of the dot */}
                  <AnimatePresence>
                    {showLabel && (
                      <motion.span
                        key={label}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.18, ease: easeOut }}
                        className="absolute left-6 font-body text-[9px] tracking-[0.28em] uppercase whitespace-nowrap"
                        style={{
                          color: isActive
                            ? "rgba(201,125,46,0.8)"
                            : "rgba(232,220,200,0.35)",
                        }}
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {i < SECTIONS.length - 1 && (
                  <div className="w-px h-3 bg-ember-gold/8" />
                )}
              </div>
            );
          })}

          <div className="w-px h-7 bg-ember-gold/12" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
