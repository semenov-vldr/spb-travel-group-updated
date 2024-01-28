const selection = document.querySelector(".selection");
if (selection) {
  const filterOpenBtn = selection.querySelector(".filter-btn");
  const filterCloseBtn = selection.querySelector(".filter__close");
  const filter = selection.querySelector(".filter");

  filterOpenBtn.addEventListener("click", () => {
    filter.classList.add("js-filter-active");
  });

  filterCloseBtn.addEventListener("click", () => {
    filter.classList.remove("js-filter-active");
  });

}