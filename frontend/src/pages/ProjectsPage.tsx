import  Cta from "../components/common/Cta";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PageTitle from "../components/layout/PageTitle";
import ProjectGrid from "../components/projects/ProjectGrid";

import "../styles/project/project.css";

export default function ProjectsPage() {
    return(
        <div className="container">   
            <Header/>
            <PageTitle pageIndex={0}/>
            <div className="project-page-line"></div>
            <ProjectGrid/>
            <Cta/>
            <Footer/>
        </div>
    );
}
