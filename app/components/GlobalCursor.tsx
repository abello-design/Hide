"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Only show on fine-pointer devices (desktop/trackpad), never on touch
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsPointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isPointer) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [isPointer]);

  if (!isPointer) return null;

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 700, damping: 50, mass: 0.1 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="0" x2="12" y2="9" stroke="#c97d2e" strokeWidth="0.75" />
        <line x1="12" y1="15" x2="12" y2="24" stroke="#c97d2e" strokeWidth="0.75" />
        <line x1="0" y1="12" x2="9" y2="12" stroke="#c97d2e" strokeWidth="0.75" />
        <line x1="15" y1="12" x2="24" y2="12" stroke="#c97d2e" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="1.5" stroke="#c97d2e" strokeWidth="0.75" fill="none" />
      </svg>
    </motion.div>
  );
}
