import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";

function HomePage() {
    return(
        <div className="homepage">
        <HeroSection />
        <ProjectSection />
        </div>
    );
}

export default HomePage