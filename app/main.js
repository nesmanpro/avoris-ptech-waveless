import '../scss/index.scss';
import { initFilterMenu } from './animations/openFilterMenu.js';
import { handleSlider } from './components/initSlider.js';
import { onSetFilters } from './components/filtersManager.js';
import { initRenderCards } from './components/renderCards.js';
import { initFilterToggles } from './animations/toggleSection.js';



class App {
    constructor() {
        document.body.style.opacity = '1';
        this._initSlider();
        this._initFilterMenu();
        this._initContent();
    }

    _initSlider() {
        handleSlider();
    }

    _initFilterMenu() {
        initFilterMenu();
        onSetFilters()
        initFilterToggles()
    }

    _initContent() {
        initRenderCards();
    }

}



document.addEventListener('DOMContentLoaded', () => {
    new App();
});
