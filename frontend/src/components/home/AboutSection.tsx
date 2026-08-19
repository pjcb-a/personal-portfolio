import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";

import "../../styles/home/aboutsection.css";

const profileHighlights = [
    {
        id: "graphic-design",
        label: "01 / Graphic Design",
        description:
            "Creating publication materials, posters, and digital visuals that communicate information clearly.",
        href: "/projects",
    },
    {
        id: "visual-campaigns",
        label: "02 / Visual Campaigns",
        description:
            "Building connected social media content using consistent typography, color, and visual direction.",
        href: "/projects",
    },
    {
        id: "ui-ux-design",
        label: "03 / UI/UX Design",
        description:
            "Designing structured interfaces that make information and actions easier to understand.",
        href: "/projects",
    },
    {
        id: "frontend-development",
        label: "04 / Frontend Development",
        description:
            "Turning interface concepts into responsive and interactive web experiences.",
        href: "/projects",
    },
];

export default function AboutSection() {
    return (
        <section className="home-about">
            <div className="home-about-panel">
                <header className="home-about-header">
                    <h2 id="home-about-title">About_Me</h2>
                    <p>03 / Profile</p>
                </header>

                <div className="home-about-content">
                    <div className="home-about-intro">
                        <p className="home-about-name">
                            NAME / <strong>JOHN PAUL A. JACOB</strong>
                        </p>

                        <p className="home-about-copy">
                            A 3rd year BS - IT student at Ateneo de Naga
                            University who enjoys working between creativity
                            and technology.
                        </p>

                        <p className="home-about-copy">
                            I create visual materials, user-focused interfaces,
                            and responsive web experiences that balance
                            creativity, clarity, and function.
                        </p>

                        <div className="home-about-action">
                            <Button
                                label="More About Me"
                                href="/about"
                                variant="outline"
                                icon={<ArrowUpRight size={18} />}
                            />
                        </div>
                    </div>

                    <div className="home-about-highlights">
                        {profileHighlights.map((item) => (
                            <Link
                                className="home-about-highlight"
                                key={item.id}
                                to={item.href}
                            >
                                <span className="home-about-highlight-text">
                                    <strong>{item.label}</strong>
                                    <span>{item.description}</span>
                                </span>

                                <ArrowUpRight
                                    className="home-about-highlight-icon"
                                    size={20}
                                    aria-hidden="true"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
