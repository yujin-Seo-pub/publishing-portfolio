$(function (){

  /* Header Scroll Event */
  $(window).scroll(function (){
    if($(window).scrollTop() > 50) {
      $('header, .top').addClass('active')
    }
    else {
      $('header, .top').removeClass('active')
    }
  })

  /* Header Trigger */
  $('.trigger').click(function (){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function (){
    $('.gnb, .trigger').removeClass('active')
  })

  /* Section Welcome - Slick Slider */
  $('.main-slider').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* Section welcome - TypeIt */ 
  new TypeIt("#typing", {
    strings: "모든 제품을 손으로 만듭니다.",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  /* Section faq - Slide Event */
  $('.faq-item').click(function(){
    $(this).siblings().children('.faq-desc').stop().slideUp()
    $(this).children('.faq-desc').stop().slideDown()
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })

  /* Section lush-pick -  Slick Slider */
  $('.lush-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    pauseOnHover: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  /* Section editor-pick - TypeIt */ 
  new TypeIt("#typing-editor", {
    strings: "에디터 노트에서 찾은 특별한 큐레이션",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       150,          // default
    mobile:       true,       // default
    })
  wow.init();

})