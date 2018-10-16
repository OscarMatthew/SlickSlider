////////////////////
//Slick-Slidder
///////////////////

// Bannner

$('.slick-swape').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  dotsClass: 'slick-dots banner-dots',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplaySpeed: 3000,
  autoplay: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
    breakpoint: 768,
    settings: {
      fade: false,
    }
  }
]
});

// Featured-Content

$('.featured-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  dotsClass: 'slick-dots featured-dots',
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        dots: true,
      }
    }
  ]
});

// Featured-Video

$('.featured-video-fullwidth').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  infinite: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  asNavFor: 'featured-video-nav',
});

$('.featured-video-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: false,
  focusOnSelect: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  asNavFor: 'featured-video-fullwidth',
  dotsClass: 'slick-dots video-dots',
});



// Author

$('.author-slidder').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: false,
  focusOnSelect: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  dotsClass: 'slick-dots author-dots',
});

// About

$('.featured-about').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  dotsClass: 'slick-dots about-dots',
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        dots: true,
      }
    }
  ]
});

