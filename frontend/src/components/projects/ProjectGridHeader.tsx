import Button from "../common/Button"
import { ArrowUpRight } from "lucide-react"

import "../../styles/project/project.css"
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
            <div className="project-grid-header">
                <div className="project-grid-header-subtitle">
                    <p>
                        <span>0{count} / </span>

                        {title}
                    </p>
                </div>

                <div className="project-grid-header-description">
                    {description}
                </div>

                <div className="project-grid-header-button">
                    <Button 
                        label={`VIEW_ALL (${categoryCount})`}
                        href="/"
                        variant="outline"
                        icon={<ArrowUpRight size={16}/>}/>
                </div>
            </div>
    );
}