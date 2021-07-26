const homeContent = () => {
    const homeContent = document.createElement('div');
    const homeMessage = document.createElement('h3');
    homeMessage.textContent =
        'To the citizens of Windhelm, Candlehearth Hall is a place of warmth, comfort, and security, where all the troubles of the outside world are drowned away by cold mead. ';
    homeContent.appendChild(homeMessage);
    return homeContent;
};

export default homeContent;
