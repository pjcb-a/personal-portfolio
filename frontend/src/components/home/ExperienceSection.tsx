import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import { experiences } from "../../data/experiences";
import Button from "../common/Button";

import "../../styles/home/experiencesection.css";

export default function ExperienceSection() {
    return (
        <section className="home-experience" aria-labelledby="home-experience-title">
            <header className="home-experience-header">
                <div>
                    <p className="home-experience-eyebrow">Career trace</p>
                    <h2 id="home-experience-title">Experience_Log</h2>
                </div>

                <p className="home-experience-index">04 / Journey</p>
            </header>

            <div className="home-experience-board">
                <div className="home-experience-timeline">
                    {experiences.map((experience, index) => (
                        <Link
                            className="home-experience-event"
                            key={experience.id}
                            to="/experience"
                            aria-label={`View full experience for ${experience.title}`}
                        >
                            <span className="home-experience-marker">
                                <span className="home-experience-count">
                                    0{index + 1}
                                </span>
                            </span>

                            <span className="home-experience-card">
                                <span className="home-experience-period">
                                    {experience.period}
                                </span>

                                <span className="home-experience-role">
                                    <strong>{experience.title}</strong>
                                    <span>{experience.organization}</span>
                                </span>

                                <span className="home-experience-description">
                                    {experience.description}
                                </span>

                                <ArrowUpRight
                                    className="home-experience-item-icon"
                                    size={22}
                                    aria-hidden="true"
                                />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="home-experience-action">
                    <Button
                        label="View Full Experience"
                        href="/experience"
                        variant="outline"
                        icon={<ArrowUpRight size={24} />}
                    />
                </div>
            </div>
        </section>
    );
}
