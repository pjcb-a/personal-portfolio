import { useEffect, type RefObject } from "react";
import { animate, createScope, onScroll, stagger, utils } from "animejs";
import type { ScrollObserver } from "animejs";

const SECTION_SELECTOR = "[data-motion-section]";
const ITEM_SELECTOR = "[data-motion-item]";

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useHomeMotion(rootRef: RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (!rootRef.current || prefersReducedMotion()) {
            return;
        }

        const scope = createScope({ root: rootRef }).add(() => {
            const sections = utils.$(SECTION_SELECTOR) as HTMLElement[];
            const scrollObservers: ScrollObserver[] = [];
            const revealedSections = new Set<HTMLElement>();

            const revealSection = (
                section: HTMLElement,
                items: HTMLElement[],
            ) => {
                if (revealedSections.has(section)) {
                    return;
                }

                revealedSections.add(section);

                animate(section, {
                    opacity: [0, 1],
                    translateY: [28, 0],
                    duration: 560,
                    ease: "outCubic",
                });

                if (items.length > 0) {
                    animate(items, {
                        opacity: [0, 1],
                        translateY: [18, 0],
                        duration: 520,
                        delay: stagger(65, { start: 110 }),
                        ease: "outCubic",
                    });
                }
            };

            sections.forEach((section) => {
                const items = Array.from(
                    section.querySelectorAll<HTMLElement>(ITEM_SELECTOR),
                );

                utils.set(section, {
                    opacity: 0,
                    translateY: 28,
                });

                utils.set(items, {
                    opacity: 0,
                    translateY: 18,
                });

                const observer = onScroll({
                    target: section,
                    enter: "bottom top",
                    leave: "top bottom",
                    onEnter: () => {
                        revealSection(section, items);
                    },
                    onEnterBackward: () => {
                        revealSection(section, items);
                    },
                });

                scrollObservers.push(observer);
            });

            return () => {
                scrollObservers.forEach((observer) => observer.revert());
            };
        });

        return () => {
            scope.revert();
        };
    }, [rootRef]);
}
