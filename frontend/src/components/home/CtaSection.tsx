import { ArrowUpRight, FileText, Mail } from "lucide-react";

import { SocialIcons } from "../../data/socials";

import "../../styles/home/ctasection.css";

const resumeHref = "/202400832.pdf";
const socialActions = SocialIcons.filter((item) =>
    ["LinkedIn", "Github"].includes(item.id),
);
const emailAction = SocialIcons.find((item) => item.id === "Email");

const details = [
    {
        label: "Based In",
        value: "Naga City, PH",
    },
    {
        label: "Focus",
        value: "Design / UI/UX / Frontend",
    },
    {
        label: "Response",
        value: "Usually within 1-2 days",
    },
];

export default function CtaSection() {
    return (
        <section
            className="home-cta"
            aria-labelledby="home-cta-title"
            data-motion-section
        >
            <div className="home-cta-windowbar" aria-hidden="true" data-motion-item>
                <div className="home-cta-window-controls">
                    <span />
                    <span />
                    <span />
                </div>

                <span className="home-cta-file">readme.txt</span>
            </div>

            <div className="home-cta-inner">
                <header className="home-cta-header" data-motion-item>
                    <h2 id="home-cta-title">Contact_Me</h2>
                    <p>05 / Connect</p>
                </header>

                <div className="home-cta-content">
                    <div className="home-cta-copy">
                        <p className="home-cta-lead" data-motion-item>
                            <span>Have an internship,</span>
                            project, or creative opportunity?
                        </p>

                        <p className="home-cta-description" data-motion-item>
                            I'm currently open to graphic design, UI/UX, and
                            frontend development internships, collaborations,
                            and creative projects.
                        </p>

                        {emailAction && (
                            <a
                                className="home-cta-link home-cta-link--email"
                                data-motion-item
                                href={emailAction.href}
                            >
                                <Mail size={21} aria-hidden="true" />
                                <span>Email</span>
                                <ArrowUpRight size={22} aria-hidden="true" />
                            </a>
                        )}
                    </div>

                    <div className="home-cta-side">
                        <div className="home-cta-actions">
                            <a
                                className="home-cta-link"
                                data-motion-item
                                href={resumeHref}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText size={21} aria-hidden="true" />
                                <span>View Resume</span>
                                <ArrowUpRight size={22} aria-hidden="true" />
                            </a>

                            {socialActions.map((item) => {
                                const SocialIcon = item.icon;

                                return (
                                    <a
                                        className="home-cta-link"
                                        data-motion-item
                                        href={item.href}
                                        key={item.id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SocialIcon aria-hidden="true" />
                                        <span>{item.label}</span>
                                        <ArrowUpRight
                                            size={22}
                                            aria-hidden="true"
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        <div
                            className="home-cta-details"
                            aria-label="Contact details"
                            data-motion-item
                        >
                            <div className="home-cta-details-head">
                                <span>Availability</span>
                                <span>Open</span>
                            </div>

                            <dl className="home-cta-detail-list">
                                {details.map((item) => (
                                    <div
                                        className="home-cta-detail"
                                        key={item.label}
                                    >
                                        <dt>{item.label}</dt>
                                        <dd>{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
