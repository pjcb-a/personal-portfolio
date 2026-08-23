import Category from "../components/common/Category";
import  Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";
import ProjectGrid from "../components/projects/ProjectGrid";

import "../styles/project/projectpage.css";

export default function ProjectsPage() {
    return(
        <div className="project-container">   
            <PageTitle pageIndex={0}/>
            <Category/>
            <div className="project-page-line"></div>
            <ProjectGrid gridLabel="development" index={0}/>
            <Cta/>
        </div>
    );
}
