import './style.css';
import SteakImage from './assets/steak.avif';

const displayController = (function(){
    const _body = document.querySelector('body');
    const _createNavbar = function() {

    }

    const _createHome = function() {

    }

    const startPage = function() {
        _createNavbar();
        _createHome();
    }
    return {startPage};
})();

displayController.startPage();