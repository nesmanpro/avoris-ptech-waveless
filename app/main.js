import '../scss/index.scss';
import { getFilters } from './components/searchBar';
import { manageSlider } from './components/slider';


class App {
    constructor() {
        document.body.style.opacity = '1';
        this._manageSlider();
        // this._getFilters();
    }

    _manageSlider() {
        manageSlider();
    }
    // _getFilters() {
    //     getFilters();
    // }

}

new App()