import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import StatusBar from "../components/common/StatusBar";
import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";

function HomePage() {
    return(
        <div className="homepage">
        <HeroSection />
        <ProjectSection />
        <StatusBar index={"profile.env.example"}/>
        <AboutSection />
        <StatusBar index={"loading exp..."}/>
        <ExperienceSection />
        </div>
    );
}

export default HomePage
