const createMenuCard = function (name) {
    const menuCard = document.createElement('div');
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    menuCard.appendChild(itemName);
    return menuCard;
};

const menuContent = function () {
    const menuList = document.createElement('div');
    menuList.appendChild(createMenuCard('Item 1'));
    menuList.appendChild(createMenuCard('Item 2'));
    menuList.appendChild(createMenuCard('Item 3'));
    menuList.appendChild(createMenuCard('Item 4'));
    return menuList;
};
export default menuContent;
