import Category from "../components/common/Category";
import  Cta from "../components/common/Cta";
import ProjectHeader from "../components/projects/ProjectHeader"

import "../styles/project/projectpage.css";

export default function ProjectsPage() {
    return(
        <div className="project-container">   
            <ProjectHeader/>
            <Category/>
            <Cta/>
        </div>
    );
}
