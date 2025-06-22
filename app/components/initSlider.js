const slidesNumber = document.querySelectorAll('.js-carousel-slide').length;
const slideContainer = document.querySelector('.carousel__slider');
const prevBtn = document.querySelector('.js-prev-btn');
const nextBtn = document.querySelector('.js-next-btn');
const dotsContainer = document.querySelector('.js-dots-container');


function createDots() {

    if (!dotsContainer) return

    for (let i = 0; i < slidesNumber; i++) {
        const dot = document.createElement('span');
        dot.classList.add('js-position-dot');
        dotsContainer.appendChild(dot);
    }

}

function scroll(direction) {
    slideContainer.scrollBy({
        left: direction * window.innerWidth,
        behavior: 'smooth'
    });
    setTimeout(updateActiveDot, 400);
}

function handleBtns() {
    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => scroll(-1))
    nextBtn.addEventListener('click', () => scroll(1))
}

function getCurrentSlideIndex() {
    const scrollLeft = slideContainer.scrollLeft;
    const slideWidth = window.innerWidth;
    return Math.round(scrollLeft / slideWidth);
}

function updateActiveDot() {
    const index = getCurrentSlideIndex();
    const allDots = dotsContainer.querySelectorAll('.js-position-dot');

    allDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}


export function handleSlider() {
    handleBtns()
    createDots()
    setTimeout(updateActiveDot, 200);
}