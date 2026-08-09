import { UserRound, ArrowUpRight, ArrowDown } from "lucide-react";
import { Tools } from "../../data/tools";

// import { animate, scrambleText } from "animejs";
import "../../styles/home/herosection.css"

export default function HeroSection() {

    // animate('p', {
    //     innerHTML: scrambleText(),
    //     loop: true, 
    //     loopDelay: 1000,
    // });

    return(
        <div className="home-hero">
            <div className="main-hero">
                <p>
                    <UserRound 
                    className="hero-icon"
                    size={15}
                    /> 
                    <span className="hero-introduction">
                        HELLO, I’M JP — DESIGNING VISUALS, BUILDING EXPERIENCES
                    </span>
                </p>
            </div>

            <div className="hero-role">
                <h1 className="hero-title">
                   <span className="hero-title-primary"> GRAPHIC DESIGNER </span>
                <br/>
                    <span className="hero-title-secondary"> &amp; FRONTEND DEVELOPER</span>
                </h1>
            </div>

            <div className="hero-role-description">
                <p>I turn ideas into clear visual systems and responsive digital experiences that feel intentional, useful, and human.</p>
            </div>

            <div className="hero-btn">
                <button>View Projects <ArrowUpRight/></button>
                <button>Download Resume <ArrowDown/></button>
            </div>

            <div className="tools">
                <div className="tool-loop">
                    <span>TOOLS/</span>

                        <ul className="footer-socials">
                            {Tools.map((item) => {
                                const Tool = item.icon;

                                return (
                                    <li key={item.id}>                                               
                                        <Tool />
                                    </li>
                                );
                            })}
                        </ul>
                </div>
            </div>
        </div>
    );
}