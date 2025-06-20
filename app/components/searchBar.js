const formFilters = document.querySelector('#js-search-form');

export const getFilters = () => {
    formFilters.addEventListener('change', () => {

        const formData = new FormData(formFilters);
        const filters = {
            destino: formData.getAll("destino[]"),
            aventura: formData.getAll("aventura[]"),
        }

        return filters
    })
}

