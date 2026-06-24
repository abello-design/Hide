"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { lightboxVariant, lightboxImageVariant } from "@/app/lib/animations";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          variants={lightboxVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-pale-cream/60 hover:text-pale-cream transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 section-label text-pale-cream/30">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-10 text-pale-cream/40 hover:text-ember-gold transition-colors duration-300 p-3"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={lightboxImageVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-5xl max-h-[85vh] w-full mx-16 md:mx-24"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src={images[currentIndex]}
                alt={`BTS image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-10 text-pale-cream/40 hover:text-ember-gold transition-colors duration-300 p-3"
            aria-label="Next image"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>

          {/* Thin amber bottom rule */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-ember-gold/15" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
