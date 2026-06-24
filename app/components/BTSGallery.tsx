// Server Component — reads /public/bts/ directory at build time.
// To add images: drop any .jpg, .jpeg, .png, or .webp file into /public/bts/
// They will automatically appear in the gallery in filename order.

import fs from "fs";
import path from "path";
import BTSGalleryClient from "./BTSGalleryClient";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function getBTSImages(): string[] {
  const btsDir = path.join(process.cwd(), "public", "bts");

  if (!fs.existsSync(btsDir)) {
    return [];
  }

  return fs
    .readdirSync(btsDir)
    .filter((file) =>
      SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    .sort()
    .map((file) => `/bts/${file}`);
}

export default function BTSGallery() {
  const images = getBTSImages();

  return (
    <section id="bts" className="w-full bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-12 md:mb-16">
          <div className="w-10 h-px bg-ember-gold/30" />
          <p className="section-label">Behind the Scenes</p>
          <div className="flex-1 h-px bg-ember-gold/15" />
        </div>

        <BTSGalleryClient images={images} />
      </div>
    </section>
  );
}
