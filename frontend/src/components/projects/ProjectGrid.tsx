import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects"

import "../../styles/project/projectgrid.css"
import Button from "../common/Button";

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
                    <span>{currentIndex.id} /</span>

                    {currentIndex.category}
                </div>

                <div className="project-grid-header-line"></div>

                <div className="project-grid-header-description">
                    {currentIndex.description}
                </div>

                <Button 
                    label="VIEW_ALL"
                    href="/"
                    variant="outline"
                    icon={<ArrowUpRight size={16}/>}/>
            </div>

            <div className="project-grid">

            </div>

        </div>
    );
}