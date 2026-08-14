import { useEffect, useRef } from "react";
import { UserRound, ArrowUpRight, ArrowDown } from "lucide-react";
import { Tools } from "../../data/tools";

import Button from "../common/Button";

import { animate, createScope, scrambleText, utils } from "animejs";
import "../../styles/home/herosection.css"

export default function HeroSection() {
    
    const heroRef = useRef<HTMLDivElement>(null);

// INTRO ANIMATION
    const [ $p ] = utils.$('.hero-intro');
        animate($p, {
            innerHTML: scrambleText({cursor: '░▒▓█'}),
            loop: true,
            loopDelay: 6000,
        });
    

// TOOLS SLIDING ANIMATION
    useEffect(() => {
  if (!heroRef.current) return;

  const scope = createScope({
    root: heroRef,
  }).add(() => {

    animate(".tool-track", {
      x: ["-50%", "0%"],
      duration: 18000,
      ease: "linear",
      loop: true,
    });

  });

  return () => {
    scope.revert();
  };
}, []);



    return(
        <div ref={heroRef} className="home-hero">
            <div className="main-hero">
                <p>
                    <UserRound 
                    className="hero-icon"
                    size={15}
                    /> 
                    <span className="hero-intro">
                        HELLO, I’M JP — DESIGNING VISUALS, BUILDING EXPERIENCES
                    </span>
                </p>
            </div>
            
        <div className="hero-content">

            <div className="hero-role">
                <h1 className="hero-title">
                   <span className="hero-title-primary"> GRAPHIC DESIGNER </span>
    
                    <span className="hero-title-secondary"> &amp; FRONTEND DEVELOPER</span>
                </h1>
            </div>

            <div className="description">
                <p>I turn ideas into clear visual systems and responsive digital experiences that feel intentional, useful, and human.</p>
            </div>
        </div>

            <div className="hero-btn">
                <Button
                label="View Projects"
                href="/projects"
                variant="primary"
                icon={<ArrowUpRight size={16} />}
                />

                <Button
                label="Download Resume"
                href="/resume.pdf"
                variant="secondary"
                icon={<ArrowDown size={16} />}
                /> 
            </div>

            <div className="tools">
                <span className="tool-label">
                    TOOLS/
                </span>

                <div className="tool-loop">
                    <div className="tool-track">

                    <ul className="tool-group">
                        {Tools.map((item) => {
                        const Tool = item.icon;

                        return (
                            <li key={`first-${item.id}`}>
                            <Tool size={25}/>
                            <p>{item.id}</p>
                            </li>
                        );
                        })}
                    </ul>

                    <ul
                        className="tool-group"
                    >
                        {Tools.map((item) => {
                        const Tool = item.icon;

                        return (
                            <li key={`second-${item.id}`}>
                            <Tool size={23}/>
                            <p>{item.id}</p>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}