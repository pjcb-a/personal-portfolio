import { ArrowUpRight, Dot } from "lucide-react";
import Button from "../components/common/Button";
import PageTitle from "../components/layout/PageTitle";

import "../styles/about/about.css"
import AboutCard from "../components/about/AboutCard";
import AboutChart from "../components/about/AboutChart";

export default function AboutPage() {
    return(
        <section className="about-container">
            
            <div className="about-container-grid">

                <div className="about-container-intro">
                    <PageTitle pageIndex={1}/>
                    <Button
                        label="Download Resume"
                        href="src\assets\files\John_Paul_Jacob_Resume.pdf"
                        variant="secondary"
                        icon={<ArrowUpRight size={18}/>}
                        external={true}
                        download={true}/>
                </div>

                <AboutCard/>
            </div>

            <div className="about-container-skills">
                <div className="about-container-skills-header">
                    <div className="about-container-skills-title">
                        <div className="dot">
                            <Dot size={14}/>
                        </div>

                        <h2>Creative Skills</h2>
                    </div>
                
                    <div className="about-container-skills-description">
                        <p>A collection of skills that shape how I design, and build. From visual concepts to functional digital experiences.</p>
                    </div>

                    <div className="about-container-skills-title">
                        <div className="dot">
                            <Dot size={14}/>
                        </div>

                        <h2>Tools I Use</h2>
                    </div>
                </div>

                <div className="about-container-skills-content">
                    <AboutChart title="Development"/>
                </div>
            </div>
                

        </section>
    );
}
