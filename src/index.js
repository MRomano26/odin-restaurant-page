import './style.css';
import SteakImage from './assets/steak.avif';

const displayController = (function(){
    const _body = document.querySelector('body');
    const _createNavbar = function() {
        const navbar = document.createElement('div');
        navbar.id = 'navbar';

        // Logo and title

        const logoAndTitle = document.createElement('div');
        const logo = document.createElement('div');
        const title = document.createElement('div');
        logo.id = 'logo';
        logo.innerHTML = '&#129385;';
        title.id = 'title';
        title.textContent = 'Steak Steakhouse';
        logoAndTitle.appendChild(logo);
        logoAndTitle.appendChild(title);
        navbar.appendChild(logoAndTitle);

        // Other Pages

        const pageList = document.createElement('ul');
        const home = document.createElement('li');
        const menu = document.createElement('li');
        const contact = document.createElement('li');
        home.textContent = 'Home';
        menu.textContent = 'Menu';
        contact.textContent = 'Contact';
        pageList.appendChild(home);
        pageList.appendChild(menu);
        pageList.appendChild(contact);
        navbar.appendChild(pageList);

        _body.appendChild(navbar);
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