new Swiper('.first-time__slider', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  //centeredSlides: true,

  // Отступ между слайдами
  //spaceBetween: 15,

  loop: true,

  // Стартовый слайд
  initialSlide: 0,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  }

});