$(function () {
 $('.header__btn').on('click', function () {
  $('.rightside-menu').addClass('rightside-menu--close');
 });

 $('.rightside-menu__close').on('click', function () {
  $('.rightside-menu').removeClass('rightside-menu--close');
 });

  $('.top__slider').slick({
   arrows: false,
   dots: true,
   fade: true,
  });

  var mixer = mixitup('.gallery__inner',  {
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
 var mixer = mixitup('.gallery-page__inner',  {
 });
});