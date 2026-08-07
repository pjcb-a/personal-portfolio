import { UserRound, ArrowUpRight, ArrowDown } from "lucide-react";
import { Tools } from "../../data/tools";

export default function HeroSection() {
    return(
        <div className="home-hero">
            <div className="main-hero">
                <p>
                    <UserRound 
                    className="hero-icon"
                    /> 
                    <span className="hero-introduction">
                        HELLO, I’M JP — DESIGNING VISUALS , BUILDING EXPERIENCES
                    </span>
                </p>
            </div>

            <div className="hero-role">
                <h1>GRAPHIC DESIGNER</h1>
                <br/>
                <h1>& FRONTEND DEVELOPER</h1>
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