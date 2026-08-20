import { useRef } from "react";

import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import StatusBar from "../components/common/StatusBar";
import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";
import CtaSection from "../components/home/CtaSection";
import { useHomeMotion } from "../hooks/useHomeMotion";

function HomePage() {
    const homeRef = useRef<HTMLDivElement>(null);

    useHomeMotion(homeRef);

    return(
        <div className="homepage" ref={homeRef}>
        <HeroSection />
        <ProjectSection />
        <StatusBar index={"profile.env.example"}/>
        <AboutSection />
        <StatusBar index={"loading exp..."}/>
        <ExperienceSection />
        <CtaSection />
        </div>
    );
}

export default HomePage
