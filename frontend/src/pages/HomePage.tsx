import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import StatusBar from "../components/common/StatusBar";
import AboutSection from "../components/home/AboutSection";

function HomePage() {
    return(
        <div className="homepage">
        <HeroSection />
        <ProjectSection />
        <StatusBar index={"profile.env.example"}/>
        <AboutSection />
        </div>
    );
}

export default HomePage
