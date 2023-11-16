function mobileNav () {
  const header = document.querySelector("header.header");

  if (!header) return;

  const nav = header.querySelector(".header__nav");
  const burger = header.querySelector(".header__burger");

  burger.addEventListener("click", () => {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');
    nav.querySelectorAll(".header-subnav").forEach(subnav => {
      subnav.classList.remove("js-mobile-subnav-open")
    })
  });


  const navLinksHasSubNavs = nav.querySelectorAll(".header-nav__link--subnav");

  navLinksHasSubNavs.forEach(navLinksHasSubNav => {
    const subNav = navLinksHasSubNav.parentNode.querySelector(".header__subnav");
    navLinksHasSubNav.addEventListener("click", () => {
      subNav.classList.add("js-mobile-subnav-open");
    });

    const navBtnBack = subNav.querySelector(".header-subnav__button-back");

    navBtnBack.addEventListener("click", () => {
      subNav.classList.remove("js-mobile-subnav-open");
    })
  });


}

mobileNav()

// //a.header__nav-link(href="./../blog/post-1.html") Post-1
