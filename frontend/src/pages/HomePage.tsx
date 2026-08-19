import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import ProfileStatusBar from "../components/common/StatusBar";
import AboutSection from "../components/home/AboutSection";

function HomePage() {
    return(
        <div className="homepage">
        <HeroSection />
        <ProjectSection />
        <ProfileStatusBar />
        <AboutSection />
        </div>
    );
}

export default HomePage
