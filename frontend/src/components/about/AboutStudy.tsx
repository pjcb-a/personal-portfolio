import { Dot } from "lucide-react";
import "../../styles/about/about.css"

export default function AboutStudy() {
    return(
        <div className="about-study-container">
            <div className="about-study-title">
                        <div className="dot">
                            <Dot size={14}/>
                        </div>

                        <h2>Education</h2>
            </div>

            <div className="about-study-content">
                <div className="study-logo">
                    <img src="src/assets/images/Ateneo_de_Naga_University_logo.png" alt="Ateneo de Naga University"/>
                </div>

                <div className="school-title">
                    <h2>Ateneo de Naga University</h2>
                    <h3>BS - Informations Technology</h3>
                    <p>2024-PRESENT</p>
                </div>

                <div className="school-description">
                    <p>Building a strong foundation in software development, design, systems, and emerging technologies.</p>
                </div>
            </div>
        </div>
    );
}