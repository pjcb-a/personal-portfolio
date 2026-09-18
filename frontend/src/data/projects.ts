import type { Project } from "../types/project";

import caresImage from "../assets/images/projects/cares.png"
import subtrackImage from "../assets/images/projects/subtrack.png"
import sdbsImage from "../assets/images/projects/adnul-sdbs.png"
import techpassImage from "../assets/images/projects/techpass.png"
import cnyImage from "../assets/images/projects/h-cny.png"
import memoImage from "../assets/images/projects/memorandum.png"
import clockImage from "../assets/images/projects/clock.png"
import treesImage from "../assets/images/projects/trees.png"
import laborImage from "../assets/images/projects/labor-day.png"

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

    image: caresImage,

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

    image: techpassImage,

    featured: true,
  },

  {
    id: 3,
    slug: "clock",

    title: "clock",
    category: "poster",
    categoryLabel: "POSTERS",

    year: 2026,
    subtitle: "Personal Project",

    description:
      "",

    role: [
      "Graphic Designer",
    ],

    tools: [
      "Photoshop", "Canva"
    ],

    image: clockImage,

    featured: true,
  },

  {
    id: 4,
    slug: "forest",

    title: "Forest",
    category: "poster",
    categoryLabel: "POSTERS",

    year: 2026,
    subtitle: "Personal Project",

    description:
      "A poster for inspiration.",

    role: [
      "Graphic Designer",
    ],

    tools: [
      "Photoshop", 
    ],

    image: treesImage,

    featured: false,
  },

  {
    id: 5,
    slug: "subtrack",

    title: "SubTrack",
    category: "development",
    categoryLabel: "DEVELOPMENT",

    year: 2026,
    subtitle: "Trends in Application Development Project",

    description:
      "A web-based subscription tracker for notifying users of payments before the date of renewals and a centralized expense dashboard of subscriptions.",

    role: [
      "Frontend Developer",
      "UI / UX Designer",
    ],

    tools: [
      "Figma",
      "Vue",
    ],

    image: subtrackImage,

    featured: false,
  },

  {
    id: 6,
    slug: "ADNU-L Scoring Database System",
    title: "ADNU-L SDBS",
    category: "development",
    categoryLabel: "DEVELOPMENT",
    year: 2025,
    subtitle: "Advanced Database Systems Project",
    description: "A comprehensive web-based scoring and management system for ADNU League events and competitions.",
    role: [
      "Frontend Developer",
      "UI/UX Designer"
    ],
    tools: [
      "Figma",
      "Vue"
    ],
    image: sdbsImage,
    featured: false,
  },

   {
    id: 7,
    slug: "Labor Day",

    title: "Labor Day",
    category: "poster",
    categoryLabel: "POSTERS",

    year: 2026,
    subtitle: "Personal Project",

    description:
      "",

    role: [
      "Graphic Designer",
    ],

    tools: [
      "Photoshop", "Canva"
    ],

    image: laborImage,

    featured: false,
  },

   {
    id: 8,
    slug: "chinese new year",

    title: "Chinese New Year",
    category: "creative-media",
    categoryLabel: "CREATIVE MEDIA",

    year: 2026,
    subtitle: "Graphic Design / Event Identity",

    description:
      "A social media poster for ADNU Lideratos celebrating chinese new year.",

    role: [
      "Graphic Designer"
    ],

    tools: [
      "Canva"
    ],

    image: cnyImage,

    featured: false,
  },

  {
    id: 9,
    slug: "memorandum",

    title: "MEMORANDUM",
    category: "creative-media",
    categoryLabel: "CREATIVE MEDIA",

    year: 2025,
    subtitle: "Graphic Design / Public Media",

    description:
      "A simple design showcasing updates regarding the organizations plan and transparency reports.",

    role: [
      "Graphic Designer",
      "Creatives",
    ],

    tools: [
      "Figma",
      "Canva"
    ],

    image: memoImage,

    featured: false,
  },
];