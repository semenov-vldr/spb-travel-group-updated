function mobileNav () {
  const header = document.querySelector("header.header");
  if (!header) return;
  const nav = header.querySelector(".header__nav");
  const burger = header.querySelector(".header__burger");

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", () => {
    nav.classList.toggle("js-mobile-nav-open");
    document.querySelector('html').classList.toggle('js-no-scroll');
    nav.querySelectorAll(".header-subnav").forEach(subnav => {
      subnav.classList.remove("js-mobile-subnav-open")
    })
  });


  // Переключение экранов мобильных меню и подменю
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


  // Live Search
  const mobileWidthMediaQuery = window.matchMedia('(max-width: 1100px)');
  const liveSearchInputDesktop = header.querySelector('.live-search--desktop .live-search__input');
  const headerUnderlay = header.querySelector(".header__underlay");

  function handleHeaderUnderlay (liveSearchInput) {
    liveSearchInput.addEventListener("focus", () => {
      headerUnderlay.classList.add('js-underlay-active');
    });

    liveSearchInput.addEventListener("blur", () => {
      headerUnderlay.classList.remove('js-underlay-active');
    });
  }

  handleHeaderUnderlay(liveSearchInputDesktop)

  if (mobileWidthMediaQuery.matches) {
    const liveSearchInputMobile = header.querySelector('.live-search--mobile .live-search__input');
    const headerTel = header.querySelector(".header__tel");
    const headerBurger = header.querySelector(".header__burger");
    handleHeaderUnderlay(liveSearchInputMobile)

    liveSearchInputMobile.addEventListener("focus", () => {
      headerTel.style.display = "none";
      headerBurger.style.display = "none";
    });

    liveSearchInputMobile.addEventListener("blur", () => {
      headerTel.style.display = "";
      headerBurger.style.display = "";
    });

  }

}

mobileNav()


// //a.header__nav-link(href="./../blog/post-1.html") Post-1
