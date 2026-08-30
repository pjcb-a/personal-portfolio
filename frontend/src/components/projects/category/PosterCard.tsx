import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../../types/project";

import "../../../styles/project/project.css"

interface PosterCardProps {
    project: Project;
}

export default function PosterCard({
    project,
}: PosterCardProps) {
    return (
        <article className="project-grid-card">

            <div className="project-grid-card-image">
                <img
                    src={project.image}
                    alt={project.title}
                />
            </div>

        <div className="project-grid-card-content">
            <div className="project-grid-card-header">
                <div>
                    <h3>{project.title}</h3>

                    <span>
                        {project.subtitle}
                    </span>
                </div>

                <a
                    href={`/projects/${project.slug}`}
                    aria-label={`View ${project.title}`}
                >
                    <ArrowUpRight size={16} />
                </a>
            </div>
        </div>
        </article>
    );
}