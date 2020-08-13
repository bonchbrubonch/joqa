$(function(){
  $('.product-slider__inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,             
    dots: false,
    arrows: false,
    variableWidth:true,
    infinite: true,
  });

  $('.instructors__slider-wrapper').slick({
    dots: true,
    arrows: false,
  });

  $('.rewiew-slider-wrapper').slick({
    arrows: true,
    dots: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/icons/arrow-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="../images/icons/arrow-right.png" alt=""></img>',
  });
});
