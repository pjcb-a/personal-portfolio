import type { SocialIcon } from "../types/socials";
import { SiGmail } from "react-icons/si"

import {
    FaBehance, FaGithub, FaLinkedin 
} from "react-icons/fa"

export const SocialIcons: SocialIcon[] = [
    {
        id: "LinkedIn",
        label: "linkedin",
        href: "https://www.linkedin.com/in/john-paul-jacob-12b064407/",
        icon: FaLinkedin
    },
    {
        id: "Github",
        label: "github",
        href: "https://github.com/pjcb-a",
        icon: FaGithub
    },
    {
        id: "Behance",
        label: "behance",
        href: "https://www.behance.net/johnpauljacob",
        icon: FaBehance
    },
    {
        id: "Email",
        label: "email",
        href: "mailto:jacob.johnpaul15@gmail.com",
        icon: SiGmail
    },
] 