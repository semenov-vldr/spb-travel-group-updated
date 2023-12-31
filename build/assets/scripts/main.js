"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-block-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";
"use strict";

var previousPosition = document.documentElement.scrollTop;
function scrollHeader(header) {
  var currentPosition = document.documentElement.scrollTop;
  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
  } else {
    header.classList.add('js-scroll');
  }
  previousPosition = currentPosition;
}
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

var mapFooter = document.querySelector('#footer-map');
if (mapFooter) ymaps.ready(initYaMap);
function initYaMap() {
  var pointAddress = [59.986484, 30.287868];
  var myMap = new ymaps.Map('footer-map', {
    center: pointAddress,
    zoom: 13,
    controls: []
  });
  var placemarkAddress = new ymaps.Placemark(pointAddress, {}, {
    iconLayout: 'default#image'
    //iconImageHref: './assets/img/icons/map-baloon.svg',
    // iconImageSize: [144, 68],
    // iconImageOffset: [-70, -68]
  });

  myMap.geoObjects.add(placemarkAddress);
}
;
"use strict";

var header = document.querySelector('header.header');
if (header) {
  var closeMobileMenu = function closeMobileMenu() {
    menu.classList.remove(menuActiveClass);
    unblockScrollBody();
    header.classList.remove(menuActiveClass);
  };
  var menu = header.querySelector('.header__nav');
  var burger = header.querySelector('.header__burger');
  var menuClose = header.querySelector('.header__nav-close');
  var navLinks = header.querySelectorAll(".header__nav-link");
  var menuActiveClass = "js-menu-open";
  ;
  burger.addEventListener('click', function () {
    header.classList.add(menuActiveClass);
    menu.classList.add(menuActiveClass);
    blockScrollBody();

    // if (menu.classList.contains(menuActiveClass)) {
    //   let mc = new Hammer(menu);
    //   mc.get('swipe').set({
    //     direction: Hammer.DIRECTION_ALL,
    //   });
    //   mc.on('swipeup', closeMobileMenu);
    // }
  });

  menuClose.addEventListener('click', closeMobileMenu);
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", closeMobileMenu);
  });
  window.addEventListener('scroll', function () {
    return scrollHeader(header);
  });
}