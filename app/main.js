import '../scss/index.scss';
import { handleFilterMenu } from './animations/handleFiltersMenu';
import { manageSlider } from './components/handleSlider';
import { onSetFilters } from './components/filters.js';
import { initRenderCards } from './components/showCards.js';



class App {
    constructor() {
        document.body.style.opacity = '1';
        this._manageSlider();
        this._toggleMenu();
        this._showContent();
        this._onFilterChange();
    }

    _manageSlider() {
        manageSlider();
    }

    _toggleMenu() {
        handleFilterMenu();
    }

    _showContent() {
        initRenderCards();
    }

    _onFilterChange() {
        onSetFilters()
    }
}

new App();
