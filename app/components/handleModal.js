import { formatPrice, formatTax } from "../utils/formatPrice";

export function showSummaryModal(cardElement, cardData) {

    const modal = document.getElementById('js-summary-modal');

    if (!modal) return;

    const priceFormatted = formatPrice(cardData.precio);
    const taxesFormatted = '16%';
    const extraFormatted = priceFormatted * 0.16;
    const finalPriceFormatted = formatTax(priceFormatted);


    modal.querySelector('.location').textContent = `${cardData.destino.pais}, ${cardData.destino.continente}`;
    modal.querySelector('.date').textContent = cardData.dias || 'N/A';
    modal.querySelector('.price span').textContent = `${cardData.precio} €` || '-- €';
    modal.querySelector('.taxes span').textContent = taxesFormatted || '16%';
    modal.querySelector('.extra_text span').textContent = `${extraFormatted} €` || '-- €';
    modal.querySelector('.modal__footer span').textContent = `${finalPriceFormatted} €` || '-- €';

    modal.classList.add('visible');

    const rect = cardElement.getBoundingClientRect();
    const modalRect = modal.getBoundingClientRect();


    let top = rect.bottom - 10;
    let left = rect.right - 264;


    modal.style.top = '0px';
    modal.style.left = '0px';


    if (left + modalRect.width > window.innerWidth) {
        left = rect.left - 135;
        if (left < 0) left = 0;
    }


    if (top + modalRect.height > window.innerHeight) {
        top = rect.top - 30;
        if (top < 0) top = 0;
    }


    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;


    // Manejador para cerrar modal
    const closeBtn = modal.querySelector('.js-close-modal');

    function closeHandler() {
        modal.classList.remove('visible');
        closeBtn.removeEventListener('click', closeHandler);
    }

    closeBtn.addEventListener('click', closeHandler);
}
