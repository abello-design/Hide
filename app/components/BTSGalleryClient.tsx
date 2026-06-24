"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gridItemVariant } from "@/app/lib/animations";
import Lightbox from "./Lightbox";

interface BTSGalleryClientProps {
  images: string[];
}

export default function BTSGalleryClient({ images }: BTSGalleryClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="section-label text-pale-cream/20">No images yet</p>
        <p className="font-body text-sm text-pale-cream/20">
          Drop photos into <code className="text-ember-gold/50">/public/bts/</code> to populate this gallery.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry-style grid — 2 cols mobile, 3 cols desktop */}
      {/* Images auto-populate from /public/bts/ — drop files there and they appear */}
      <motion.div
        className="columns-2 md:columns-3 gap-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            custom={i}
            variants={gridItemVariant}
            className="relative break-inside-avoid mb-1 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <div className="relative w-full" style={{ paddingBottom: "66.66%" }}>
              <Image
                src={src}
                alt={`Behind the scenes — image ${i + 1}`}
                fill
                className="object-cover transition-all duration-500"
                style={{
                  filter: "grayscale(30%) sepia(15%) brightness(0.85)",
                }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay — color comes back, amber tint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-all duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(139,58,15,0.15) 0%, transparent 60%)",
                }}
              />
              {/* Expand icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="w-8 h-8 border border-ember-gold/60 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="5" stroke="#c97d2e" strokeWidth="0.75" />
                    <line x1="6" y1="7" x2="6" y2="12" stroke="#c97d2e" strokeWidth="0.75" />
                    <line x1="0" y1="6" x2="5" y2="6" stroke="#c97d2e" strokeWidth="0.75" />
                    <line x1="7" y1="6" x2="12" y2="6" stroke="#c97d2e" strokeWidth="0.75" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}
