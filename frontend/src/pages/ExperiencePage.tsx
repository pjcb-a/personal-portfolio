import Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";
import { experiences } from "../data/experiences";

import "../styles/experience/experience.css"

export default function ExperiencePage() {
    return(
        <section className="experience-container">

            <div className="experience-grid">
                <PageTitle pageIndex={2}/>
            </div>
            
            <div className="experience-content">
               
                <div className="experience-timeline">

                    {experiences.map((exp) => (
                        <div className="experience-event" key={exp.id}>

                            <span className="exp-marker">
                                    <span className="exp-count">
                                        0{exp.count}
                                    </span>
                                </span>

                                <div className="exp-card">
                                    <span className="exp-period">{exp.period}</span>

                                    <h3> {exp.title} </h3>

                                    <span className="exp-org"> {exp.organization} </span>
                                   
                                    <p> {exp.description} </p>
                                </div>
                        </div>
                    ))}
                </div> 
                
                 
            </div>
                
                <Cta/>
        </section>
    );
}