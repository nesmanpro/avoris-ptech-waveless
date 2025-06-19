import '../scss/index.scss';
import { manageSlider } from './components/slider';

class App {
    constructor() {
        document.body.style.opacity = '1';
        this._manageSlider();
    }

    _manageSlider() {
        manageSlider();
    }

}

new App()