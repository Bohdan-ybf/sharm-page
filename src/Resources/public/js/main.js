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