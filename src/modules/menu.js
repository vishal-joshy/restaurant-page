const createMenuCard = function (name, imageSrc) {
    const menuCard = document.createElement('div');
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    menuCard.setAttribute('id', 'menu-card');
    menuCard.appendChild(itemName);
    menuCard.appendChild(getImage(imageSrc));

    return menuCard;
};

const getImage = function (imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.height = 200;
    img.width = 200;

    return img;
};

const menuContent = function () {
    const menuList = document.createElement('div');
    menuList.setAttribute('id', 'menu-list');

    menuList.appendChild(createMenuCard('Sweet Roll', './images/sweetroll.png'));
    menuList.appendChild(createMenuCard('Skooma', './images/skooma.png'));
    menuList.appendChild(createMenuCard('Ale', './images/ale.png'));
    menuList.appendChild(createMenuCard('Potato', './images/potato.png'));

    return menuList;
};
export default menuContent;
