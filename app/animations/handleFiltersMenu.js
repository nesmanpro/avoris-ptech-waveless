import { gsap } from "gsap";

const filterOpenBtn = document.querySelector('.js-show-filters-btn');
const filterMenu = document.querySelector('.js-filter-menu');
const filterCloseBtn = document.querySelector('.js-close-menu-filter');

let mm = gsap.matchMedia();
let tl;

mm.add("(max-width: 1123px)", () => {

    gsap.set(filterMenu, {
        x: '-100%'
    })

    tl = gsap.timeline({ paused: true })
        .to(filterMenu, {
            x: '0%',
            left: 0,
            duration: 0.3,
            ease: 'power2.out',
        });


    return () => {
        gsap.set(filterMenu, { x: '0%' });
        if (tl) tl.kill();
    };
});


export function handleFilterMenu() {

    filterOpenBtn.addEventListener('click', () => {
        tl?.play();
    });
    filterCloseBtn.addEventListener('click', () => {
        tl?.reverse();
    });

} 