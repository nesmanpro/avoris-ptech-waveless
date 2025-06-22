import gsap from "gsap";

export function initFilterToggles() {

    const filterForm = document.getElementById('js-search-form');


    if (!filterForm) return;

    filterForm.addEventListener('click', (event) => {

        const toggle = event.target.closest('.js-section-toggle-btn');

        if (!toggle || !filterForm.contains(toggle)) return;

        const content = toggle.nextElementSibling;
        const chevron = toggle.querySelector('.js-chevron');
        const isOpen = toggle.classList.contains('is-open');


        toggle.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', !isOpen);


        if (isOpen) {

            gsap.to(content, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut'
            })
            gsap.to(chevron, {
                rotate: 0,
                duration: 0.3
            });
        } else {

            gsap.set(content, {
                height: 'auto'
            });

            const height = content.clientHeight;

            gsap.fromTo(content, {
                height: 0
            }, {
                height: height,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.inOut'
            });
            gsap.to(chevron, {
                rotate: 90,
                duration: 0.3
            });
        }
    });
}