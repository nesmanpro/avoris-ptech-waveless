import { filterCardsByParams } from '../utils/filterUtils';
import { initRenderCards } from './showCards';
import cardsData from '../mock/data.json';

function onFiltersChange(cb) {
    const formFilters = document.querySelector('#js-search-form');
    if (!formFilters) return;

    formFilters.addEventListener('change', () => {
        const formData = new FormData(formFilters);
        const filters = {
            destino: formData.getAll('destino[]'),
            aventura: formData.getAll('aventura[]'),
            minPrice: parseFloat(formData.get('min-price')) || null,
            maxPrice: parseFloat(formData.get('max-price')) || null
        };

        cb(filters);
    });
};


export function onSetFilters() {

    onFiltersChange(filters => {
        const filteredData = filterCardsByParams(cardsData, filters);
        initRenderCards(filteredData);
    });

}