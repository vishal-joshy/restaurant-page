import contactContent from './modules/contact';
import homeContent from './modules/home';
import menuContent from './modules/menu';

const createHeader = (() => {
    const createTabs = function (tabName) {
        const li = document.createElement('li');
        li.textContent = tabName;
        li.setAttribute('id', 'tabs');
        li.setAttribute('data-content', tabName);
        return li;
    };

    const onClickTabs = function (callback) {
        const tabs = document.querySelectorAll('.tabs');
        tabs.forEach((tab) => {
            tab.addEventListener('click', callback);
        });
    };

    const changeTab = function (e) {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        console.log(e.target.dataset.content);
        switch (e.target.dataset.content) {
            case 'HOME':
                content.appendChild(homeContent());
                break;
            case 'MENU':
                content.appendChild(menuContent());
                break;
            case 'CONTACT':
                content.appendChild(contactContent());
        }
    };

    const header = document.createElement('header');
    const restaurantNameHeading = document.createElement('h1');
    restaurantNameHeading.textContent = 'Candlehearth Hall';

    header.appendChild(restaurantNameHeading);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'tabs');

    ul.appendChild(createTabs('HOME'));
    ul.appendChild(createTabs('MENU'));
    ul.appendChild(createTabs('CONTACT'));

    nav.appendChild(ul);

    header.appendChild(nav);

    document.body.insertBefore(header, document.querySelector('#content'));
    document.querySelector('#content').appendChild(homeContent());
    onClickTabs(changeTab);
})();
