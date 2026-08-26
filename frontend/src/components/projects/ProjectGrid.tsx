import { projects } from "../../data/projects"

import "../../styles/project/project.css"

import CreativeMediaCard from "./category/CreativeMediaCard";
import DevelopmentCard from "./category/DevelopmentCard";
import PosterCard from "./category/PosterCard";

import ProjectGridHeader from "./ProjectGridHeader";


export default function ProjectGrid() {

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
            <div className="project-grid-cards">
            
                {developmentProjects.map((project) => (
                    <DevelopmentCard key={project.title} project={project}/>
                ))}

            </div>

            <ProjectGridHeader count={2} title="Creative Media" description={creativeDescription} category="creative-media"/>
            <div className="project-grid-cards">
                {creativeProjects.map((project) => (
                    <CreativeMediaCard key={project.title} project={project}/>
                ))}
            </div>

            <ProjectGridHeader count={3} title="Posters" description={posterDescription} category="poster"/>
            <div className="project-grid-cards">
                {posterProjects.map((project) => (
                    <PosterCard key={project.title} project={project}/>
                ))}
            </div>
        </div>
    );
}