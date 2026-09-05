import type { Tool } from "../types/tools";

import { FaReact, FaFigma, FaHtml5, FaVuejs, FaFastForward } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { BsJavascript, BsTypescript, BsGithub } from "react-icons/bs";
import { Si1001Tracklists, SiTailwindcss } from "react-icons/si";
import { IoColorPalette } from "react-icons/io5";

export const Tools: Tool[] = [
    {
        id: "Photoshop",
        label: "Photoshop",
        color: "#31A8FF",
        icon: DiPhotoshop
    },
    {
        id: "Figma",
        label: "Figma",
        color: "#F24E1E",
        icon: FaFigma
    },
    {
        id: "Canva",
        label: "Canva",
        color: "#00C4CC",
        icon: IoColorPalette
    },
    {
        id: "HTML",
        label: "HTML",
        color: "#E34F26",
        icon: FaHtml5
    },
    {
        id: "CSS",
        label: "CSS",
        color: "#1572B6",
        icon: FaCss3Alt
    },
    {
        id: "JavaScript",
        label: "Javascript",
        color: "#F7DF1E",
        icon: BsJavascript 
    },
    {
        id: "React",
        label: "React",
        color: "#61DAFB",
        icon: FaReact
    },
    {
        id: "Vue",
        label: "Vue",
        color: "#42B883",
        icon: FaVuejs
    },
    {
        id: "TailwindCSS",
        label: "Tailwindcss",
        color: "#06B6D4",
        icon: SiTailwindcss 
    },
    {
        id: "TypeScript",
        label: "Typescript",
        color: "#3178C6",
        icon: BsTypescript
    },
    {
        id: "Git/Github",
        label: "Git/Github",
        color: "#0FBF3E",
        icon: BsGithub
    },
    {
        id: "VSCode",
        label: "VSCode",
        color: "#007ACC",
        icon: Si1001Tracklists
    }
]
