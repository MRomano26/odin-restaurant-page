import './style.css';
import SteakImage from './assets/steak.avif';

const menuCreator = (function() {
    const _createMenu = function() {
        const menu = document.createElement('div');
        menu.classList.add('page');

        return menu;
    }

    const _menu = menuCreator();

    const appendMenu = function() {
        const content = document.querySelector('#content');
        content.textContent = '';
    }

    return {appendMenu}
})();

const contactCreator = (function() {
    const _createContact = function() {
        const contact = document.createElement('div');
        contact.classList.add('page');

        return contact;
    }

    const _contact = _createContact();

    const appendContact = function() {
        const content = document.querySelector('#content');
        content.textContent = '';
    }

    return {appendContact}
})();

const homeCreator = (function(){
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

        return navbar;
    }

    const _navbar = _createNavbar();

    const _appendNavbar = function() {
        _body.appendChild(_navbar);
        const links = document.querySelectorAll('li');
        links[0].addEventListener('click', appendHome);
        links[1].addEventListener('click', menuCreator.appendMenu);
        links[2].addEventListener('click', contactCreator.appendContact);
    }

    const _createHome = function() {
        const home = document.createElement('div');
        home.classList.add('page');

        // Quotes

        const quotes = document.createElement('div');
        quotes.id = 'quotes';
        const quote1 = [document.createElement('div'),
                 document.createElement('div')];
        const quote2 = [document.createElement('div'),
                 document.createElement('div')];
        quote1[0].classList.add('quote');
        quote1[0].textContent = 'Greatest Steak in Steakland, bar none.';
        quote1[1].classList.add('name');
        quote1[1].textContent = '-Steak Weekly';
        quotes.appendChild(quote1[0]);
        quotes.appendChild(quote1[1]);
        quote2[0].classList.add('quote');
        quote2[0].textContent = `The meat is tender as the night. It's so soft,
                 steak knives are optional.`;
        quote2[1].classList.add('name');
        quote2[1].textContent = '-Meat Lover Digest';
        quotes.appendChild(quote2[0]);
        quotes.appendChild(quote2[1]);
        home.appendChild(quotes);

        // Image

        const mySteakImage = new Image();
        mySteakImage.src = SteakImage;
        mySteakImage.id = 'steak-img';
        home.appendChild(mySteakImage);

        return home;
    }

    const _home = _createHome();

    const appendHome = function() {
        const content = document.querySelector('#content');
        content.textContent = '';
        content.appendChild(_home);
    }

    const startPage = function() {
        _appendNavbar();
        const content = document.createElement('div');
        content.id = 'content';
        _body.appendChild(content);
        appendHome();
    }
    return {startPage, appendHome};
})();

homeCreator.startPage();