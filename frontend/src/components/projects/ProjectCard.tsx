import type { Project } from "../../types/project"
import { ArrowUpRight } from "lucide-react";
import { Tools } from "../../data/tools";
import '../../styles/project/projectcard.css'
import Button from "../common/Button";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const toolsByName = new Map(
    Tools.map((tool) => [tool.id.toLowerCase(), tool])
);

export default function ProjectCard({
    project, index
}: ProjectCardProps) {
    const roleLabel = project.role.join(" & ");

    return (
        <article
            className="project-card"
            data-motion-item
            data-project-category={project.category}
        >

            <header className="project-card-header">
                <p className="project-card-kicker">
                    1.{index + 1} / {project.categoryLabel}
                </p>
            </header>
        
            <div className="project-card-content">

                <div className="project-card-image">
                    <div className="project-card-preview" aria-hidden="true">
                        <span className="project-card-preview-index">
                            0{index + 1}
                        </span>
                        <span className="project-card-preview-title">
                            {project.title}
                        </span>
                        <span className="project-card-preview-category">
                            {project.categoryLabel}
                        </span>
                    </div>

                    <img src={project.image}
                    alt={`${project.title} project preview`}
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                    />
                </div>

                <div className="project-card-info">
                    <div className="project-card-title">
                        <h3>{project.title}</h3>

                        <span className="project-card-year">
                            {project.year}
                        </span>
                    </div>

                    <p className="project-card-subtitle">
                        {project.subtitle}
                    </p>

                    <p className="project-card-description">
                        {project.description}
                    </p>

                    <div className="project-card-role">
                        <span className="project-card-label">ROLE</span>
                        <p>{roleLabel}</p>
                    </div>

                    <div className="project-card-bottom">
                        <div className="project-card-tools">
                            <span className="project-card-label">TOOLS</span>
                            <ul className="project-card-tools-list">
                                {project.tools.map((toolName) => {
                                    const tool = toolsByName.get(toolName.toLowerCase());

                                    if (!tool) {
                                        return (
                                            <li
                                                className="project-card-tool project-card-tool--text"
                                                key={toolName}
                                            >
                                                {toolName}
                                            </li>
                                        );
                                    }

                                    const ToolIcon = tool.icon;

                                    return (
                                        <li
                                            className="project-card-tool"
                                            key={toolName}
                                            title={tool.label}
                                            
                                        >
                                            <ToolIcon size={32} aria-hidden="true" focusable="false" />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="project-card-action">
                            <Button
                                label="View Project"
                                href="/projects"
                                variant="secondary"
                                icon={<ArrowUpRight size={18} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
