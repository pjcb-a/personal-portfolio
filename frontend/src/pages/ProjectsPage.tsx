import  Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";
import ProjectGrid from "../components/projects/ProjectGrid";

import "../styles/project/project.css";

export default function ProjectsPage() {
    return(
        <div className="project-container">   
            <PageTitle pageIndex={0}/>
            <div className="project-page-line"></div>
            <ProjectGrid/>
            <Cta/>
        </div>
    );
}
