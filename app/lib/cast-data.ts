export type CastMember = {
  slug: string;
  character: string;
  actor: string;
  photo: string;
};

export const CAST: CastMember[] = [
  { slug: "carla-r-stewart",      character: "Aja Henry",        actor: "Carla R Stewart",      photo: "/cast/carla-r-stewart.png"      },
  { slug: "kamire",               character: "Sol Henry",        actor: "Kamiré",               photo: "/cast/kamire.png"               },
  { slug: "ari-brand",            character: "Francis Hughes",   actor: "Ari Brand",            photo: "/cast/ari-brand.png"            },
  { slug: "john-paul-berry",      character: "Patrick",          actor: "John Paul Berry",      photo: "/cast/john-paul-berry.jpeg"     },
  { slug: "taylor-nicole-kaplan", character: "Isla",             actor: "Taylor Nicole Kaplan", photo: "/cast/taylor-nicole-kaplan.png" },
  { slug: "kalet-ponce-de-leon",  character: "Reid",             actor: "Kalet Ponce de Leon",  photo: "/cast/kalet-ponce-de-leon.png"  },
];
