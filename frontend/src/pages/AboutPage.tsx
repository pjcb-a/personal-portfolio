import { ArrowUpRight } from "lucide-react";
import Button from "../components/common/Button";
import PageTitle from "../components/layout/PageTitle";

import "../styles/about/about.css"
import AboutCard from "../components/about/AboutCard";

export default function AboutPage() {
    return(
        <div className="about-container">
            <div className="about-container-grid">
                <div className="about-container-intro">
                    <PageTitle pageIndex={1}/>
                    <Button
                        label="Download Resume"
                        href="\about"
                        variant="secondary"
                        icon={<ArrowUpRight size={18}/>}
                        external={true}
                        download={true}/>
                </div>

                <AboutCard/>
            </div>

        </div>
    );
}
