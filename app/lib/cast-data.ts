export type CastMember = {
  slug: string;
  character: string;
  actor: string;
  photo: string;
  bio?: string;
};

export const CAST: CastMember[] = [
  { slug: "carla-r-stewart",      character: "Aja Henry",        actor: "Carla R Stewart",      photo: "/cast/carla-r-stewart.png"      },
  { slug: "kamire",               character: "Sol Henry",        actor: "Kamiré",               photo: "/cast/kamire.png"               },
  { slug: "ari-brand",            character: "Francis Hughes",   actor: "Ari Brand",            photo: "/cast/ari-brand.png"            },
  {
    slug: "john-paul-berry",
    character: "Patrick",
    actor: "John Paul Berry",
    photo: "/cast/john-paul-berry.jpeg",
    bio: "John Paul Berry is an actor, director, and writer based in New York City. A recent graduate of Carnegie Mellon University's School of Drama, he is drawn to productions that tell stories of resistance and imagine bold new futures. He can next be seen in the upcoming film Between Us and the River.",
  },
  { slug: "taylor-nicole-kaplan", character: "Isla",             actor: "Taylor Nicole Kaplan", photo: "/cast/taylor-nicole-kaplan.png" },
  {
    slug: "kalet-ponce-de-leon",
    character: "Reid",
    actor: "Kalet Ponce de León",
    photo: "/cast/kalet-ponce-de-leon.png",
    bio: "Kalet Ponce de León is a first-generation Mexican-American actor based in Brooklyn, New York. Currently training at the William Esper Studio, he pursues work that is truthful, emotionally grounded, and deeply curious about what it means to be human. That curiosity extends into writing, music, and visual storytelling — each discipline informing the way he inhabits a role. Kalet brings empathy and quiet intensity to every project, with the hope of spending a career telling stories that resonate across cultures and generations.",
  },
];
