import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects"

import "../../styles/project/projectgrid.css"
import Button from "../common/Button";
import ProjectGridHeader from "./ProjectGridHeader";

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

    const developmentDescription = "Interfaces, systems, and digital products built with code and designed with purpose. ";
    const creativeDescription = "Campaigns, publications, and digital materials for organizations and events.";
    const posterDescription = "Personal poster designs and visual experiments in typography and layout."; 
    return(
        <div className="project-grid-container">
            <ProjectGridHeader count={1} title="Development" description={developmentDescription} category="development"/>

            <ProjectGridHeader count={2} title="Creative Media" description={creativeDescription} category="creative-media"/>

            <ProjectGridHeader count={3} title="Posters" description={posterDescription} category="poster"/>
        </div>
    );
}