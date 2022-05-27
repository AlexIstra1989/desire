$(function () {
 // $('.header__btn').on('click', function () {
 //  $('.rightside-menu').addClass('rightside-menu--close');
 // });

 // $('.rightside-menu__close').on('click', function () {
 //  $('.rightside-menu').removeClass('rightside-menu--close');
 // });
 $('.header__btn').on('click', function () {
  $('.rightside-menu').removeClass('rightside-menu--close');
 });

 $('.rightside-menu__close').on('click', function () {
  $('.rightside-menu').addClass('rightside-menu--close');
 });

 $('.header__btn-menu').on('click', function () {
  $('.menu').toggleClass('menu--active')
 });

 $('.top__slider').slick({
  arrows: false,
  dots: true,
  fade: true,
 });

 $('.contacts__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
   {
    breakpoint: 1730,
    settings: {
     slidesToShow: 8,
     slidesToScroll: 8,
    }
   },
   {
    breakpoint: 1380,
    settings: {
     slidesToShow: 6,
     slidesToScroll: 6,
    }
   },
   {
    breakpoint: 1201,
    settings: {
     slidesToShow: 4,
     slidesToScroll: 4,
    }
   },
   {
    breakpoint: 841,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
    }
   },
   {
    breakpoint: 576,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
    }
   },
   {
    breakpoint: 450,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: false,
     arrows: true,
     prevArrow: '<button type="button" class="slick-contacts slick-left"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.470814 7.29199C0.555523 7.206 0.647415 7.13343 0.744097 7.07031L7.21188 0.481925C7.84285 -0.16054 8.86654 -0.160845 9.49781 0.48223C10.1291 1.125 10.1291 2.16752 9.49781 2.8109L3.9277 8.48514L9.52655 14.189C10.1578 14.8317 10.1578 15.8739 9.52655 16.5176C9.21076 16.8396 8.79679 17 8.38373 17C7.97066 17 7.5564 16.8396 7.24091 16.5176L0.744097 9.89874C0.647415 9.83562 0.554924 9.76305 0.470814 9.67706C0.148144 9.34836 -0.00750451 8.91538 0.000277895 8.48453C-0.00750451 8.05367 0.148144 7.62099 0.470814 7.29199Z" fill="black"/></svg></button>',
     nextArrow: '<button type="button" class="slick-contacts slick-right"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.52862 7.29242C9.44481 7.20643 9.35202 7.13386 9.25564 7.07074L2.78769 0.481933C2.15643 -0.160543 1.13336 -0.160848 0.501805 0.482238C-0.129455 1.12502 -0.129455 2.16756 0.501805 2.81095L6.0724 8.48529L0.47367 14.1895C-0.15789 14.832 -0.15789 15.8748 0.47367 16.5182C0.789449 16.8393 1.20281 17 1.61616 17C2.02952 17 2.44378 16.8393 2.75866 16.5176L9.25564 9.89983C9.35202 9.83671 9.44451 9.76445 9.52862 9.67815C9.85188 9.34883 10.0069 8.91645 9.99974 8.48529C10.0072 8.05382 9.85188 7.62083 9.52862 7.29242Z" fill="black"/></svg></button>'
    }
   }
  ]
 });

 $('.blog__slider-box').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.470814 7.29199C0.555523 7.206 0.647415 7.13343 0.744097 7.07031L7.21188 0.481925C7.84285 -0.16054 8.86654 -0.160845 9.49781 0.48223C10.1291 1.125 10.1291 2.16752 9.49781 2.8109L3.9277 8.48514L9.52655 14.189C10.1578 14.8317 10.1578 15.8739 9.52655 16.5176C9.21076 16.8396 8.79679 17 8.38373 17C7.97066 17 7.5564 16.8396 7.24091 16.5176L0.744097 9.89874C0.647415 9.83562 0.554924 9.76305 0.470814 9.67706C0.148144 9.34836 -0.00750451 8.91538 0.000277895 8.48453C-0.00750451 8.05367 0.148144 7.62099 0.470814 7.29199Z" fill="black"/></svg></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.52862 7.29242C9.44481 7.20643 9.35202 7.13386 9.25564 7.07074L2.78769 0.481933C2.15643 -0.160543 1.13336 -0.160848 0.501805 0.482238C-0.129455 1.12502 -0.129455 2.16756 0.501805 2.81095L6.0724 8.48529L0.47367 14.1895C-0.15789 14.832 -0.15789 15.8748 0.47367 16.5182C0.789449 16.8393 1.20281 17 1.61616 17C2.02952 17 2.44378 16.8393 2.75866 16.5176L9.25564 9.89983C9.35202 9.83671 9.44451 9.76445 9.52862 9.67815C9.85188 9.34883 10.0069 8.91645 9.99974 8.48529C10.0072 8.05382 9.85188 7.62083 9.52862 7.29242Z" fill="black"/></svg></button>'
 });

 var mixer = mixitup('.gallery__inner', {
  load: {
   filter: '.living'
  },
  animation: {
   effects: 'fade translateZ(-100px)',
   duration: 900,
   effects: 'rotateY(-25deg)',
   perspectiveDistance: '2000px'
  }
 });

});

$(function () {
 var mixer = mixitup('.gallery-page__inner', {
 });
});