import { useEffect, useRef } from "react";
import { UserRound, ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { Tools } from "../../data/tools";

import Button from "../common/Button";

import { animate, createScope, scrambleText, stagger, utils, splitText } from "animejs";
import "../../styles/home/herosection.css"

export default function HeroSection() {
    
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const scope = createScope({
            root: heroRef,
        }).add(() => {
            const heroItems = utils.$("[data-hero-motion]") as HTMLElement[];
            const [introText] = utils.$(".hero-intro") as HTMLElement[];
            const [desc] = utils.$(".description") as HTMLElement[];
            const [mainItem] = utils.$(".hero-role") as HTMLElement[];

            if (!prefersReducedMotion) {
                utils.set(heroItems, {
                    opacity: 0,
                    translateY: 18,
                });

                animate(heroItems, {
                    opacity: [0, 1],
                    translateY: [18, 0],
                    delay: stagger(85),
                    duration: 640,
                    ease: "outCubic",
                });

                // tool display
                animate(".tool-track", {
                    x: ["-50%", "0%"],
                    duration: 20000,
                    ease: "linear",
                    loop: true,
                });

                // ANIMATION FOR DESCRIPTION //
                const split = splitText(desc, {
                    words: { wrap: 'clip' },
                    // debug: true,
                });

                split.addEffect((self) => animate(self.words, {
                    y: ['100%', '0%'],
                    duration: 1250,
                    ease: 'out(3)',
                    delay: stagger(100),
                    alternate: true,
                }));


                // ANIMATION FOR HOVER EFFECT
                const hover = splitText(mainItem, {
                    words: {wrap: 'clip' },
                })
                hover.addEffect(({ words }) => {
                    words.forEach((word: HTMLElement) => {
                        word.addEventListener("pointerenter", () => {
                            animate(word, {
                                color: utils.randomPick([
                                    "#5aad43",
                                    "#2f332e",
                                    "#9AAA94",
                                    "#165100",
                                ])
                            })
                        })
                    })
                })

                
            }

            if (introText && !prefersReducedMotion) {
                animate(introText, {
                    innerHTML: scrambleText({ cursor: "░▒▓█" }),
                    loop: true,
                    loopDelay: 10000,
                });
            }
        });

        return () => {
            scope.revert();
        };
    }, []);



    return(
        <div id="home-hero" ref={heroRef} className="home-hero">
            <div className="main-hero" data-hero-motion>
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
                   <span className="hero-title-primary" data-hero-motion> GRAPHIC DESIGNER </span>
    
                    <span className="hero-title-secondary" data-hero-motion> &amp; FRONTEND DEVELOPER</span>
                </h1>
            </div>

            <div className="description" data-hero-motion>
                <p>I turn ideas into clear visual systems and responsive digital experiences that feel intentional, useful, and human.</p>
            </div>
        </div>

        
            <div className="hero-btn" data-hero-motion>
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

            <div className="availability" data-hero-motion>
                <div className="availability-fill">
                    <div className="availability-info">
                        <Check size={19}/><span>OPEN TO GRAPHIC DESIGN, UI/UX & FRONTEND INTERNSHIPS</span>
                    </div>
                </div>
            </div>
            
            
            <div className="tools" data-hero-motion>
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
