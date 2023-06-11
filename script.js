const swiper = new Swiper('.mySwiper', {

    direction: 'horizontal',

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesOffsetBefore: 15,

    slidesPerView: "auto",
    spaceBetween: 0,
    slidesToShow: 3,
});


const showMoreButton = document.querySelector('.description__next-button');
const buttonIcon = document.querySelector('.description__next-button-logo');
const container = document.querySelector('.brands-list__list');
const btnText = document.querySelector('.description__next-button-text');

showMoreButton.addEventListener('click', function () {
    container.classList.toggle('brands-list__list-open')
    buttonIcon.classList.toggle('description__next-button-logo_revealed');
    if(btnText.textContent === 'Скрыть'){
        btnText.textContent = 'Показать все'
    }else {
        btnText.textContent = 'Скрыть'
    }
});
