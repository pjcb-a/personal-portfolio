import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PageTitle from "../components/layout/PageTitle";

import "../styles/experience/experience.css"
function ExperiencePage() {
    return(
        <div className="container">
        <Header/>
        <PageTitle pageIndex={2}/>
        <h1>Experience Page</h1>
        <Footer/>
        </div>
    );
}

export default ExperiencePage