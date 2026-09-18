
import type { Project } from "../../../types/project";

import "../../../styles/project/project.css"
import type React from "react";

interface CreativeMediaCardProps {
    project: Project;
}

export default function CreativeMediaCard({
    project,
}: CreativeMediaCardProps) {
    return (
        <article className="project-grid-card">
        <a href={project.link}>

            <div className="project-grid-card-image"
            style={{
                "--project-image": `url(${project.image})`,
            } as React.CSSProperties}
            >
                <img
                    src={project.image}
                    alt={project.title}
                />

                <div className="project-grid-card-overlay">
                    <h3>{project.title}</h3>

                    <span>
                        {project.subtitle}
                    </span>

                    <p className="project-grid-card-description">
                        {project.description}
                    </p>
                </div>
            </div>


        </a>
        </article>
    );
}