"use strict";
//gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother.create({
//   wrapper: '.container',
//   content: '.about-us__list',
//   smooth: 1.5,
//   effects: true
// })
//
// gsap.fromTo(".about-us-item", {x: -200, opacity: 0 }, {
//   opacity: 1, x: 0,
//   scrollTrigger: {
//     trigger: ".about-us-item",
//     scrub: true
//   }
// })
"use strict";
"use strict";

new Swiper('.catalog__slider', {
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
      spaceBetween: 16
    },
    480: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});
"use strict";

var accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

if (accordionItems) {
  var toggleClass = function toggleClass(item) {
    return item.classList.toggle('js-accordion-active');
  };
  accordionItems.forEach(function (accordionItem) {
    accordionItem.addEventListener('click', function () {
      return toggleClass(accordionItem);
    });
  });
}
"use strict";

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
      spaceBetween: 16
    },
    480: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});
"use strict";

function mobileFooterNav() {
  var footer = document.querySelector("footer.footer");
  if (!footer) return;
  var footerNavs = footer.querySelectorAll(".footer-nav");
  footerNavs.forEach(function (footerNav) {
    var footerTitle = footerNav.querySelector(".footer__title");
    footerTitle.addEventListener("click", function () {
      footerTitle.classList.toggle("js-mobile-nav-open");
    });
  });
}
mobileFooterNav();
"use strict";

function mobileNav() {
  var header = document.querySelector("header.header");
  if (!header) return;
  var nav = header.querySelector(".header__nav");
  var burger = header.querySelector(".header__burger");

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');
    nav.querySelectorAll(".header-subnav").forEach(function (subnav) {
      subnav.classList.remove("js-mobile-subnav-open");
    });
  });

  // Переключение экранов мобильных меню и подменю
  var navLinksHasSubNavs = nav.querySelectorAll(".header-nav__link--subnav");
  navLinksHasSubNavs.forEach(function (navLinksHasSubNav) {
    var subNav = navLinksHasSubNav.parentNode.querySelector(".header__subnav");
    navLinksHasSubNav.addEventListener("click", function () {
      subNav.classList.add("js-mobile-subnav-open");
    });
    var navBtnBack = subNav.querySelector(".header-subnav__button-back");
    navBtnBack.addEventListener("click", function () {
      subNav.classList.remove("js-mobile-subnav-open");
    });
  });

  // Live Search
  var mobileWidthMediaQuery = window.matchMedia('(max-width: 1100px)');
  var liveSearchInputDesktop = header.querySelector('.live-search--desktop .live-search__input');
  var headerUnderlay = header.querySelector(".header__underlay");
  function handleHeaderUnderlay(liveSearchInput) {
    liveSearchInput.addEventListener("focus", function () {
      headerUnderlay.classList.add('js-underlay-active');
    });
    liveSearchInput.addEventListener("blur", function () {
      headerUnderlay.classList.remove('js-underlay-active');
    });
  }
  handleHeaderUnderlay(liveSearchInputDesktop);
  if (mobileWidthMediaQuery.matches) {
    var liveSearchInputMobile = header.querySelector('.live-search--mobile .live-search__input');
    var headerTel = header.querySelector(".header__tel");
    var headerBurger = header.querySelector(".header__burger");
    handleHeaderUnderlay(liveSearchInputMobile);
    liveSearchInputMobile.addEventListener("focus", function () {
      headerTel.style.display = "none";
      headerBurger.style.display = "none";
    });
    liveSearchInputMobile.addEventListener("blur", function () {
      headerTel.style.display = "";
      headerBurger.style.display = "";
    });
  }
}
mobileNav();

// //a.header__nav-link(href="./../blog/post-1.html") Post-1
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// The Slideshow class.
var Slideshow = /*#__PURE__*/function () {
  function Slideshow(el) {
    _classCallCheck(this, Slideshow);
    this.DOM = {
      el: el
    };
    this.config = {
      slideshow: {
        delay: 3000,
        pagination: {
          duration: 3
        }
      }
    };

    // Set the slideshow
    this.init();
  }
  _createClass(Slideshow, [{
    key: "init",
    value: function init() {
      var self = this;

      // Charmed title
      this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
      this.DOM.slideTitle.forEach(function (slideTitle) {
        //charming(slideTitle);
      });

      // Set the slider
      this.slideshow = new Swiper(this.DOM.el, {
        loop: true,
        autoplay: {
          delay: this.config.slideshow.delay,
          disableOnInteraction: false
        },
        speed: 500,
        preloadImages: true,
        updateOnImagesReady: true,
        // lazy: true,
        // preloadImages: false,

        pagination: {
          el: '.slideshow-pagination',
          clickable: true,
          bulletClass: 'slideshow-pagination-item',
          bulletActiveClass: 'active',
          clickableClass: 'slideshow-pagination-clickable',
          modifierClass: 'slideshow-pagination-',
          renderBullet: function renderBullet(index, className) {
            var slideIndex = index,
              number = index <= 8 ? '0' + (slideIndex + 1) : slideIndex + 1;
            var paginationItem = '<span class="slideshow-pagination-item">';
            paginationItem += '<span class="pagination-number">' + number + '</span>';
            paginationItem = index <= 8 ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
            paginationItem += '</span>';
            return paginationItem;
          }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.slideshow-navigation-button.next',
          prevEl: '.slideshow-navigation-button.prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        on: {
          init: function init() {
            self.animate('next');
          }
        }
      });

      // Init/Bind events.
      this.initEvents();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;
      this.slideshow.on('paginationUpdate', function (swiper, paginationEl) {
        return _this.animatePagination(swiper, paginationEl);
      });
      //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

      this.slideshow.on('slideNextTransitionStart', function () {
        return _this.animate('next');
      });
      this.slideshow.on('slidePrevTransitionStart', function () {
        return _this.animate('prev');
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      // Get the active slide
      this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'), this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'), this.DOM.activeSlideTitle = this.DOM.activeSlide.querySelector('.slide-title'), this.DOM.activeSlideTitleLetters = this.DOM.activeSlideTitle.querySelectorAll('span');

      // Reverse if prev
      this.DOM.activeSlideTitleLetters = direction === "next" ? this.DOM.activeSlideTitleLetters : [].slice.call(this.DOM.activeSlideTitleLetters).reverse();

      // Get old slide
      this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
      if (this.DOM.oldSlide) {
        // Get parts
        this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'), this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span');
        // Animate
        this.DOM.oldSlideTitleLetters.forEach(function (letter, pos) {
          TweenMax.to(letter, .3, {
            ease: Quart.easeIn,
            delay: (_this2.DOM.oldSlideTitleLetters.length - pos - 1) * .04,
            y: '50%',
            opacity: 0
          });
        });
      }

      // Animate title
      this.DOM.activeSlideTitleLetters.forEach(function (letter, pos) {
        TweenMax.to(letter, .6, {
          ease: Back.easeOut,
          delay: pos * .05,
          startAt: {
            y: '50%',
            opacity: 0
          },
          y: '0%',
          opacity: 1
        });
      });

      // Animate background
      TweenMax.to(this.DOM.activeSlideImg, 1.5, {
        ease: Expo.easeOut,
        startAt: {
          x: direction === 'next' ? 200 : -200
        },
        x: 0
      });

      //this.animatePagination()
    }
  }, {
    key: "animatePagination",
    value: function animatePagination(swiper, paginationEl) {
      // Animate pagination
      this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
      this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');

      //console.log(swiper.pagination);
      // console.log(swiper.activeIndex);

      // Reset and animate
      TweenMax.set(this.DOM.paginationItemsLoader, {
        scaleX: 0
      });
      TweenMax.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
        startAt: {
          scaleX: 0
        },
        scaleX: 1
      });
    }
  }]);
  return Slideshow;
}();
var slideshowBlock = document.querySelector('.slideshow');
if (slideshowBlock) {
  var slideshow = new Slideshow(slideshowBlock);
}
"use strict";

var datepicker = new Datepicker("#datepicker");
"use strict";

var rangePrice = document.getElementById('range-price');
if (rangePrice) {
  var minPrice = +rangePrice.dataset.min;
  var maxPrice = +rangePrice.dataset.max;
  var utilsRange = {
    start: [minPrice, maxPrice],
    connect: true,
    range: {
      'min': minPrice,
      'max': maxPrice
    }
  };
  noUiSlider.create(rangePrice, utilsRange);
}

// const filter = document.querySelector(".filter");
// if (filter) {
//
//   const rangeInput = document.querySelectorAll(".range__items input"),
//     priceInput = document.querySelectorAll(".range__fields input"),
//     range = document.querySelector(".range__progress");
//   let priceGap = 1000;
//
//   priceInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//       let minPrice = parseInt(priceInput[0].value),
//         maxPrice = parseInt(priceInput[1].value);
//
//       if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//         if (e.target.className === "input-min") {
//           rangeInput[0].value = minPrice;
//           range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//         } else {
//           rangeInput[1].value = maxPrice;
//           range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//         }
//       }
//     });
//   });
//
//   rangeInput.forEach((input) => {
//     input.addEventListener("input", (e) => {
//       let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);
//
//       if (maxVal - minVal < priceGap) {
//         if (e.target.className === "range-min") {
//           rangeInput[0].value = maxVal - priceGap;
//         } else {
//           rangeInput[1].value = minVal + priceGap;
//         }
//       } else {
//         priceInput[0].value = minVal;
//         priceInput[1].value = maxVal;
//         range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//         range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//       }
//     });
//   });
//
// }
//