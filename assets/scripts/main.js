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
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');
    nav.querySelectorAll(".header-subnav").forEach(function (subnav) {
      subnav.classList.remove("js-mobile-subnav-open");
    });
  });
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
  var mobileWidthMediaQuery = window.matchMedia('(max-width: 1100px)');
  if (mobileWidthMediaQuery.matches) {
    var liveSearchInput = header.querySelector('.live-search--mobile .live-search__input');
    var headerTel = header.querySelector(".header__tel");
    var headerBurger = header.querySelector(".header__burger");
    liveSearchInput.addEventListener("focus", function () {
      headerTel.style.display = "none";
      headerBurger.style.display = "none";
    });
    liveSearchInput.addEventListener("blur", function () {
      headerTel.style.display = "";
      headerBurger.style.display = "";
    });
  }
}
mobileNav();

// //a.header__nav-link(href="./../blog/post-1.html") Post-1