// navbar
const mobileMenu = document.querySelector(".nav__mobile__menu");
const menuBody = document.querySelector(".header__nav__wrapper");
if (mobileMenu) {
  mobileMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    mobileMenu.classList.toggle("active-menu");
    menuBody.classList.toggle("active-menu");
  });
}

// Скрол к секции
const menulinks = document.querySelectorAll(".header__nav-link[data-goto]");
if (menulinks.length > 0) {
  menulinks.forEach((menulink) => {
    menulink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menulink = e.target;
    if (
      menulink.dataset.goto &&
      document.querySelector(menulink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menulink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (mobileMenu.classList.contains("active-menu")) {
        document.body.classList.remove("_lock");
        mobileMenu.classList.remove("active-menu");
        menuBody.classList.remove("active-menu");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
        duration: 500, 
        easing: "linear", 
      });
      e.preventDefault();
    }
  }
}

// Slider
$('.slider__gallery').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow:"<img class='slick-arrow slick-prev-c' src='./src/Resources/public/img/slider-img/slider-arrow-left.svg'>",
    nextArrow:"<img class='slick-arrow slick-next-c' src='./src/Resources/public/img/slider-img/slider-arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // MODAL

let modal = document.querySelector(".modal");
let moreDetailsButton = document.querySelectorAll(".nav__left, .nav__right");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButton.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});