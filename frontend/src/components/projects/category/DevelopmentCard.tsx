
import type { Project } from "../../../types/project";

import "../../../styles/project/project.css"

interface DevelopmentCardProps {
    project: Project;
}

export default function DevelopmentCard({ 
    project, }: DevelopmentCardProps) {
        return (
            <article className="project-grid-card">
                <a href={`/projects/${project.slug}`}>
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

                        </div>

                        <p className="project-grid-card-description">
                            {project.description}
                        </p>

                        <div className="project-grid-card-role">
                            <span>ROLE</span>

                            <p>
                                {project.role.join(" / ")}
                            </p>
                        </div>

                        <ul className="project-grid-card-tools">
                            {project.tools.map((tool) => (
                                <li key={tool}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </a>
            </article>
        );
}