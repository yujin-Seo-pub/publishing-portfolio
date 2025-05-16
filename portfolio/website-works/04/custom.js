$(function () {

    /* Header Scroll Event */
    $(window).scroll(function (){
      if($(window).scrollTop() > 50) {
        $('header, .top').addClass('active')
      }
      else {
        $('header, .top').removeClass('active')
      }
    })

  var swiper = new Swiper(".welcome-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".event-slide", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

})