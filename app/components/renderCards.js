import cardsData from '../mock/data.json';
import { renderSummaryModal } from './initModal.js';

export function initRenderCards(data = cardsData) {
  const container = document.querySelector('.js-results-container');
  if (!container) return;

  container.innerHTML = '';

  if (data.length < 1) {
    const section = document.createElement('section');
    section.classList.add('empty-earch');
    const text1 = document.createElement('p');
    const text2 = document.createElement('p');
    text1.textContent = 'Lo sentimos! '
    text2.textContent = 'No se encontraron aventuras con esos parametros.'
    section.appendChild(text1)
    section.appendChild(text2)
    container.appendChild(section);

    return
  }

  data.forEach(continent => {
    const section = renderSeccionContinente(continent);
    container.appendChild(section);
  });

  addShowModalListeners();
}



function renderSeccionContinente({ continent, cards }) {

  const section = document.createElement('section');
  section.classList.add('results__section', 'js-results-section');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('results__title');

  const h2 = document.createElement('h2');
  h2.textContent = continent;

  titleDiv.appendChild(h2);
  section.appendChild(titleDiv);
  section.appendChild(renderCardsGrid(cards));

  return section;
}



function renderCardsGrid(cards) {
  const grid = document.createElement('div');
  grid.classList.add('results__grid', 'js-results-grid');

  cards.forEach(place => {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
          <header class="card__header">
            <img src="${place.imagen}" alt="${place.aventura}">
            <span><p>${place.aventura}</p></span>
          </header>

          <div class="card__body">
            <div class="card-body__info">
              <p class="location">${place.destino.pais}, ${place.destino.continente}</p>
              <p class="date">9 días</p>
            </div>
            <h3 class="card-body__title">${place.titulo}</h3>
          </div>

          <footer class="card__footer">
            <div class="card-footer__summary">
              <small>Desde</small>
              <p class="price">${place.precio} €</p>
              <span><p>Ver desglose</p> <sup>&#8964;</sup></span>
            </div>
            <button class="card-button">Reservar</button>
          </footer>
        `;

    grid.appendChild(card);
  });

  return grid;
}


function addShowModalListeners() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const link = card.querySelector('.card-footer__summary span');
    if (!link) return;

    link.style.cursor = 'pointer';

    link.addEventListener('click', (e) => {
      e.preventDefault();


      const cardData = {
        destino: {
          pais: card.querySelector('.location').textContent.split(',')[0].trim(),
          continente: card.querySelector('.location').textContent.split(',')[1].trim()
        },
        dias: card.querySelector('.date').textContent,
        precio: card.querySelector('.price').textContent.replace(' €', ''),
      };

      renderSummaryModal(card, cardData);
    });
  });
}