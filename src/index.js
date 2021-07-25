const createHeader = (() => {
    const createTabs = function (tabName) {
        const li = document.createElement('li');
        li.textContent = tabName;
        li.setAttribute('id', 'tabs');
        li.setAttribute('data-value', tabName);
        return li;
    };

    const onClickTabs = function () {
        const tabs = document.querySelectorAll('.tabs');
        tabs.forEach((tab) => {
            tab.addEventListener('click', changeTab);
        });
    };

    const changeTab = function (e) {
        console.log(e.target);
    };

    const header = document.createElement('header');
    const restaurantNameHeading = document.createElement('h1');
    restaurantNameHeading.textContent = 'RESTAURANT NAME';

    header.appendChild(restaurantNameHeading);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'tabs');

    ul.appendChild(createTabs('HOME'));
    ul.appendChild(createTabs('MENU'));
    ul.appendChild(createTabs('CONTACT'));

    nav.appendChild(ul);

    header.appendChild(nav);

    document.body.appendChild(header);

    onClickTabs();
})();
