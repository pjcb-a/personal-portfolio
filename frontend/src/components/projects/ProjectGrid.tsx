import { projects } from "../../data/projects"

import "../../styles/project/projectgrid.css"

interface ProjectGridProps {
    gridLabel: string
    index: number
}

export default function ProjectGrid({gridLabel, index}: ProjectGridProps) {

    const currentIndex = projects[index];

    const currentGrid = projects.find(
        (project) => project.category === gridLabel
    )

    const developmentProjects = projects.filter(
    (project) => project.category === "development"
    );

    const creativeProjects = projects.filter(
    (project) => project.category === "creative-media"
    );

    const posterProjects = projects.filter(
    (project) => project.category === "poster"
    );

    return(
        <div className="project-grid-container">
            <div className="project-grid-header">
                <div className="project-grid-header-subtitle">
                    <span>{currentIndex.id}</span>
                </div>

                <div className="project-header-line"></div>
            </div>

            <div className="project-grid">

            </div>

        </div>
    );
}