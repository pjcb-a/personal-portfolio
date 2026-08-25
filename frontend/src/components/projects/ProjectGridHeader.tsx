import Button from "../common/Button"
import { ArrowUpRight } from "lucide-react"

import "../../styles/project/projectgrid.css"
import { projects } from "../../data/projects";

interface ProjectGridHeaderProps {
    count: number;
    title: string;
    description: string;
    category: string;
}

export default function ProjectGridHeader({count, title, description, category}: ProjectGridHeaderProps) {
    
    const categoryCount = projects.filter(
    project => project.category === category
    ).length;
    
    return(
        <div className="project-grid-container">
           
            <div className="project-grid-header">
                <div className="project-grid-header-subtitle">
                    <span>0{count} /</span>

                    {title}
                </div>

                <div className="project-grid-header-line"></div>

                <div className="project-grid-header-description">
                    {description}
                </div>

                <Button 
                    label={`VIEW_ALL (${categoryCount})`}
                    href="/"
                    variant="outline"
                    icon={<ArrowUpRight size={16}/>}/>
            </div>
        </div>
    );
}