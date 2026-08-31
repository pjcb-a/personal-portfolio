import type { MenuItem } from "../types/menu"

export const menuItems: MenuItem[] = [
    {
        id: "projects",
        kind: "internal",
        label: "Projects",
        to: "/projects",
    },
    {
        id: "about",
        kind: "internal",
        label: "About",
        to: "/about",
    },
    {
        id: "experience",
        kind: "internal",
        label: "Experience",
        to: "/experience",
    },
    {
        id: "contact",
        kind: "internal",
        label: "Contact",
        to: "/contact",
    },
    {
        id: "resume",
        kind: "external",
        label: "Resume",
        href: "/",
        openInNewTab: true,
        download: true,
    },
   
]
 