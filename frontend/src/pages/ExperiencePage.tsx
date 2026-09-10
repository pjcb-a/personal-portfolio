import Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";
import { experiences } from "../data/experiences";

import "../styles/experience/experience.css"

export default function ExperiencePage() {
    return(
        <section className="experience-container">

            <div className="experience-grid">
                <PageTitle pageIndex={2}/>
                <div className="experience-line"></div>
            </div>
            
            <div className="experience-content">
               
                {experiences.map((exp) => (
                    <div className="experience-timeline">

                        <div className="exp-box-container">
                            0{exp.count}
                        </div>

                            <div className="exp-card" key={exp.id}>
                                <span className="exp-period">{exp.period}</span>
                                <h3> {exp.title} </h3>
                                <span className="exp-org"> {exp.organization} </span>
                                <p> {exp.description} </p>
                            </div>
                    </div>
                    ))}
                </div>
                <Cta/>
        </section>
    );
}