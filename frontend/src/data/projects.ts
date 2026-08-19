import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "cares",

    title: "CARES",
    category: "development",
    categoryLabel: "DEVELOPMENT",

    year: 2026,
    subtitle: "Platform Technologies Project",

    description:
      "A web-based concern management and appointment scheduling platform for students, faculties, and offices.",

    role: [
      "Frontend Developer",
      "UI / UX Designer",
    ],

    tools: [
      "Figma",
      "TypeScript",
      "React",
    ],

    image: "/projects/cares/cover.png",

    featured: true,
  },

  {
    id: 2,
    slug: "techpass",

    title: "TECHPASS",
    category: "creative-media",
    categoryLabel: "CREATIVE MEDIA",

    year: 2025,
    subtitle: "Graphic Design / Event Identity",

    description:
      "A pioneering campus initiative that aims to explore, understand, and engage in meaningful conversations about students' academic journeys and career aspirations.",

    role: [
      "Graphic Designer",
      "Creatives",
    ],

    tools: [
      "Figma",
      "Canva",
    ],

    image: "/projects/techpass/cover.png",

    featured: true,
  },

  {
    id: 3,
    slug: "supra-v8",

    title: "Supra V8",
    category: "poster",
    categoryLabel: "POSTERS",

    year: 2026,
    subtitle: "Personal Project",

    description:
      "A poster showcasing my passion for cars and practicing my design skills further.",

    role: [
      "Graphic Designer",
    ],

    tools: [
      "Photoshop",
    ],

    image: "/projects/supra-v8/cover.png",

    featured: true,
  },
];