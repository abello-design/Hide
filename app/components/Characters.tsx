"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeftVariant, slideRightVariant, fadeInVariant } from "@/app/lib/animations";

const characters = [
  {
    name: "Aja Henry",
    role: "The Hunter",
    actor: "Carla R Stewart",
    description:
      "Weathered and unyielding, Aja has built a life on silence and the land. She knows what the heirloom cost — in blood, in grief — and has chosen to let it stay buried. Her refusal is not stubbornness. It is a reckoning.",
    // REPLACE: set imageSrc to a path like "/stills/aja-henry.jpg" when portrait is ready
    imageSrc: null as string | null,
    panelGradient: "linear-gradient(155deg, #1c0e06 0%, #140a04 40%, #0c0806 70%, #080808 100%)",
    accentColor: "#8b3a0f",
    side: "left" as const,
  },
  {
    name: "Sol Henry",
    role: "The Son",
    actor: "Kamiré",
    description:
      "Sol has one foot in his mother's world and one in the city. He sees the heirloom as a door — out, up, away. He loves his mother. He just can't understand why she'd choose to stay in the dark.",
    // REPLACE: set imageSrc to a path like "/stills/sol-henry.jpg" when portrait is ready
    imageSrc: null as string | null,
    panelGradient: "linear-gradient(155deg, #080c10 0%, #060a0d 40%, #040608 70%, #080808 100%)",
    accentColor: "#5c3d1e",
    side: "right" as const,
  },
];

type Character = (typeof characters)[number];

function CharacterCard({ character, index }: { character: Character; index: number }) {
  const isLeft = character.side === "left";

  return (
    <div className={`flex flex-col md:flex-row ${isLeft ? "" : "md:flex-row-reverse"} w-full min-h-[75vh]`}>

      {/* Visual panel */}
      <motion.div
        variants={isLeft ? slideLeftVariant : slideRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full md:w-1/2 min-h-[55vw] md:min-h-full overflow-hidden"
      >
        {character.imageSrc ? (
          <Image
            src={character.imageSrc}
            alt={`${character.name} — ${character.role}`}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.72) contrast(1.08) saturate(0.9)" }}
          />
        ) : (
          /* Intentional editorial panel — replaced by photo when ready */
          <div className="absolute inset-0" style={{ background: character.panelGradient }}>
            {/* Atmospheric diagonal texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 40px,
                  rgba(201,125,46,0.5) 40px,
                  rgba(201,125,46,0.5) 41px
                )`,
              }}
            />
            {/* Large ghost character name */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <span
                className="font-display font-light text-pale-cream select-none leading-none text-center px-4"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  opacity: 0.04,
                  letterSpacing: "0.08em",
                }}
                aria-hidden="true"
              >
                {character.name.split(" ")[0]}
              </span>
            </div>
            {/* Accent glow from side */}
            <div
              className="absolute inset-0"
              style={{
                background: isLeft
                  ? `radial-gradient(ellipse 60% 80% at 0% 50%, ${character.accentColor}18 0%, transparent 70%)`
                  : `radial-gradient(ellipse 60% 80% at 100% 50%, ${character.accentColor}18 0%, transparent 70%)`,
              }}
            />
          </div>
        )}

        {/* Gradient bleed into text panel */}
        <div
          className="absolute inset-y-0 w-40 pointer-events-none"
          style={{
            [isLeft ? "right" : "left"]: 0,
            background: isLeft
              ? "linear-gradient(to right, transparent, #080808)"
              : "linear-gradient(to left, transparent, #080808)",
          }}
        />
      </motion.div>

      {/* Text panel */}
      <motion.div
        variants={isLeft ? slideRightVariant : slideLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full md:w-1/2 bg-[#080808] flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 md:py-0"
      >
        {/* Ghost index number */}
        <span
          className="font-display font-light text-pale-cream absolute top-6 right-8 select-none leading-none"
          style={{ fontSize: "clamp(5rem, 10vw, 8rem)", opacity: 0.03 }}
          aria-hidden="true"
        >
          0{index + 1}
        </span>

        <div className="relative z-10 flex flex-col gap-6 max-w-md">
          <p className="section-label">{character.role}</p>

          <h2
            className="font-display font-light text-pale-cream leading-[0.95]"
            style={{ fontSize: "clamp(2.6rem, 4.5vw, 4rem)" }}
          >
            {character.name}
          </h2>

          <div className="w-8 h-px bg-ember-gold opacity-50" />

          <p className="font-body text-pale-cream/55 leading-[1.75] text-[0.92rem] md:text-base">
            {character.description}
          </p>

          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ember-gold/45 mt-1">
            {character.actor}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Characters() {
  return (
    <section id="characters" className="w-full bg-[#080808]">
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-6 px-10 md:px-16 py-14"
      >
        <p className="section-label">Characters</p>
        <div className="flex-1 h-px bg-ember-gold/15" />
      </motion.div>

      <div className="flex flex-col">
        {characters.map((character, i) => (
          <div key={character.name}>
            <CharacterCard character={character} index={i} />
            {i < characters.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
                className="amber-rule mx-10 md:mx-16 origin-left"
              />
            )}
          </div>
        ))}
      </div>

      <div className="h-12 md:h-20" />
    </section>
  );
}
