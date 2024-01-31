new Swiper('.event-header__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  slidesPerView: 1,

  effect: "fade",

  // Отступ между слайдами
  spaceBetween: 16,

  // Стартовый слайд
  initialSlide: 0,

  loop: true,

});