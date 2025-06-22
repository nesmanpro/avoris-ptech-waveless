import { gsap } from "gsap";

export function scaleUp(element) {
    gsap.set(element, { scale: 0 });

    gsap.to(element, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
    });
}