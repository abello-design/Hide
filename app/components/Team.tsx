"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, fadeInVariant, staggerContainer } from "@/app/lib/animations";

const ABOVE_THE_LINE = [
  { role: "Written & Directed by", name: "Alexander Bello" },
  { role: "Producers", name: "Alexa Swinton\nSaskia Sommer\nAlexander Bello" },
  { role: "Executive Producers", name: "Shaun Seneviratne\nMarla Evans" },
  { role: "Director of Photography", name: "Grant Bennett" },
  { role: "Edited by", name: "Alexander Bello" },
  { role: "Music by", name: "Ziv Bard" },
  { role: "SFX Designer & Wardrobe Stylist", name: "Simoné Chariell" },
  { role: "Post-Production Sound Mixer", name: "Diego Candelma" },
];

const BELOW_THE_LINE = [
  { role: "Unit Production Manager", name: "Saskia Sommer" },
  { role: "Assistant Director", name: "Alexa Swinton" },
  { role: "Associate Producer", name: "Lila Klinenberg" },
  { role: "Production Assistant", name: "Lila Fox" },
  { role: "Pre-Production Associates", name: "Will Stout\nChristian Conner" },
  { role: "Key SFX Makeup Artist", name: "Simoné Chariell" },
  { role: "Assistant Makeup Artists", name: "Alexa Swinton\nLila Fox" },
  { role: "Food Stylist", name: "Jonah Kim" },
  { role: "Set Decorators", name: "Perry Garon\nMarla Evans" },
  { role: "Camera Operators", name: "Ari Dubner\nGrant Bennett\nChristian Martins da Silva\nAlexander Bello" },
  { role: "Assistant Camera", name: "Ari Dubner\nJshaun Batt" },
  { role: "Key Grip", name: "Gus Morgan" },
  { role: "Production Sound Mixer", name: "Sojourner Brown" },
  { role: "Sound Assistants", name: "Christian Martins da Silva\nRyan Smith\nJshaun Batt" },
  { role: "Boom Operators", name: "Sojourner Brown\nChristian Martins da Silva" },
];

function CreditRow({ role, name }: { role: string; name: string }) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="flex flex-col gap-1 border-b border-pale-cream/6 pb-4"
    >
      <span className="font-body text-[10px] tracking-[0.22em] uppercase text-pale-cream/30">
        {role}
      </span>
      <div className="flex flex-col gap-0.5">
        {name.split("\n").map((n) => (
          <span key={n} className="font-display text-lg text-pale-cream/80 font-light">
            {n}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="w-full bg-black py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-16 md:mb-20"
        >
          <p className="section-label">Credits</p>
          <div className="flex-1 h-px bg-ember-gold/15" />
        </motion.div>

        {/* Production companies */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-1 text-center"
        >
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-pale-cream/20">A</p>
          <p className="font-display text-2xl font-light tracking-widest text-pale-cream/50">Perpetual Motion</p>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-pale-cream/20 mt-1">picture</p>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-pale-cream/15 mt-3">in association with</p>
          <p className="font-display text-lg font-light tracking-widest text-pale-cream/35">Oh!SoManyPictures</p>
          <div className="w-8 h-px bg-ember-gold/20 mx-auto mt-4" />
        </motion.div>

        {/* Filmmakers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4 mb-16"
        >
          <p className="section-label text-pale-cream/30 mb-4">Filmmakers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOVE_THE_LINE.map((c) => (
              <CreditRow key={c.role + c.name} role={c.role} name={c.name} />
            ))}
          </div>
        </motion.div>

        {/* Below the line crew */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex items-center gap-6 mb-8">
            <p className="section-label text-pale-cream/30">Crew</p>
            <div className="flex-1 h-px bg-ember-gold/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BELOW_THE_LINE.map((c) => (
              <CreditRow key={c.role + c.name} role={c.role} name={c.name} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
