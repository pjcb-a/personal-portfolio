import type { Tool } from "../types/tools";

import { FaReact, FaFigma, FaHtml5, FaVuejs } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { Fa2, FaCss3Alt } from "react-icons/fa6";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

export const Tools: Tool[] = [
    {
        id: "Photoshop",
        label: "Photoshop",
        icon: DiPhotoshop
    },
    {
        id: "Figma",
        label: "Figma",
        icon: FaFigma
    },
    {
        id: "Canva",
        label: "Canva",
        icon: Fa2
    },
    {
        id: "HTML",
        label: "HTML",
        icon: FaHtml5
    },
    {
        id: "CSS",
        label: "CSS",
        icon: FaCss3Alt
    },
    {
        id: "JavaScript",
        label: "Javascript",
        icon: BsJavascript 
    },
    {
        id: "React",
        label: "React",
        icon: FaReact
    },
    {
        id: "Vue",
        label: "Vue",
        icon: FaVuejs
    },
    {
        id: "TailwindCSS",
        label: "Tailwindcss",
        icon: SiTailwindcss 
    },
    {
        id: "TypeScript",
        label: "Typescript",
        icon: BsTypescript
    }
]