// Swiper
const showMoreButton = document.querySelector('.swiper-button');
const toSwitchIndex = window.innerWidth > 768 && window.innerWidth <= 1440 ? 6 : 8; 
const brands = document.querySelectorAll('.swiper-slide');

const textSwitcher = (elem, initText, text) => elem.innerHTML === initText ? elem.innerHTML = text : elem.innerHTML = initText; 
const elementsShowSwitcher = (elements, index) => elements.forEach((el, i) => index <= i && el.classList.toggle('hidden')); 

const handleShowMoreClick = (event) => {
    const button = event.currentTarget; 
    let showMoreButtonText = showMoreButton.querySelector('.button__text');

    button.classList.toggle('swiper-button--active');

    elementsShowSwitcher(brands, toSwitchIndex);
    textSwitcher(showMoreButtonText, 'Показать всё', 'Скрыть');
}

const initialize = () => {
    window.innerWidth > 768 && elementsShowSwitcher(brands, toSwitchIndex);

    showMoreButton.addEventListener('click', handleShowMoreClick);

    initSwiper(swiper, () => window.innerWidth < 768 && swiper.init());
};

const initSwiper = (swiper, callback) => callback(swiper); 

const swiper = new Swiper('.swiper', {
    init: false,
    spaceBetween: 15,
    slidesPerView: 1.25,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// // Для демонстрации переключения табов

// const removeClass = (items) => items.forEach((el) => el.classList.remove('tabs__link--active'));

// const tabs = document.querySelector('.tabs__list');
// const tabsLinks = document.querySelectorAll('.tabs__link');

// tabs.addEventListener('click', (el) => {
//     const isLink = el.target.classList.contains('tabs__link');

//     if(isLink) {
//         removeClass(tabsLinks);
//         el.target.classList.add('tabs__link--active')
//     };
// });

initialize();