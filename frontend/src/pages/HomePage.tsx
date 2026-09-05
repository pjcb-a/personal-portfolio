import { useRef } from "react";

import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";
import CtaSection from "../components/home/CtaSection";
import { useHomeMotion } from "../hooks/useHomeMotion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function HomePage() {
    const homeRef = useRef<HTMLDivElement>(null);

    useHomeMotion(homeRef);

    return(
        <div className="homepage" ref={homeRef}>
        <Header/>
        <HeroSection />
        <ProjectSection />

        <AboutSection />

        <ExperienceSection />
        <CtaSection />
        <Footer/>
        </div>
    );
}

export default HomePage
