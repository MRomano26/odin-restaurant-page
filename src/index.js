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
        const content = document.querySelector('#content');
        content.textContent = '';

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
        content.appendChild(quotes);

        // Image

        const mySteakImage = new Image();
        mySteakImage.src = SteakImage;
        mySteakImage.id = 'steak-img';
        content.appendChild(mySteakImage);


    }

    const startPage = function() {
        _createNavbar();
        const content = document.createElement('div');
        content.id = 'content';
        _body.appendChild(content);
        _createHome();
    }
    return {startPage};
})();

displayController.startPage();