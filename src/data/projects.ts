export type Project = {
  title: string;
  description: string;
  image?: string;
  points?: string[];
  tags: string[];
  links?: { live?: string; client?: string; server?: string };
};

export const projects: Project[] = [
  {
    title: "Bike Shop",
    description:
      "A role-based bike shop platform where customers browse, filter and order bikes, and admins manage users and products from a dedicated dashboard.",
    points: [
      "Product search plus category and brand filtering, cart, and a full payment workflow.",
      "Role-based dashboards for profile management, orders, and order fulfillment.",
    ],
    tags: [
      "React.js",
      "Redux",
      "Material UI",
      "TypeScript",
      "Node.js",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    links: {
      live: "https://a4-bike-shop-client.vercel.app/",
      client: "https://github.com/alamin-cse44/a4-bike-shop-client",
      server: "https://github.com/alamin-cse44/a4-bike-shop-server",
    },
    image: "/images/projects/bike-shop.png",
  },
  {
    title: "House Renting",
    description:
      "A full-stack house rental platform connecting landlords and tenants, with smart search and an admin panel overseeing the whole marketplace.",
    points: [
      "Multi-image property listings, booking flow, and integrated payments with dynamic filtering.",
      "Role-based dashboards with middleware-secured user profile management.",
    ],
    tags: [
      "Next.js",
      "Shadcn UI",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT",
    ],
    links: {
      live: "https://house-renting-nine.vercel.app/",
      client: "https://github.com/alamin-cse44/house-renting-client",
      server: "https://github.com/alamin-cse44/house-renting-server",
    },
    image: "/images/projects/house-renting.png",
  },
  {
    title: "Chickin Worx",
    description:
      "A dual-mode online ordering system with location selection, real-time cart management, menu browsing, and secure checkout end to end.",
    points: [
      "Location-aware ordering across two purchase modes with a single unified checkout.",
      "Authenticated accounts with real-time cart state throughout the ordering flow.",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Authentication"],
    links: { live: "https://order.chickinworx.com/en" },
    image: "/images/projects/chickin-worx.png",
  },
];
