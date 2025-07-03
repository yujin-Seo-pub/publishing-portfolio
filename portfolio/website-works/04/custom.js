$(function () {
  /* Header Scroll Event */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .top, .qick-menu, .trigger").addClass("active");
    } else {
      $("header, .top, .qick-menu, .trigger").removeClass("active");
    }
  });

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

  $(function () {
    $(".sono-content h2").click(function () {
      $(".sono-content a").stop().slideUp();
      $(this).siblings().stop().slideToggle();
    });
  });

  $(function () {
    $(".trigger").click(function () {
      $(this).addClass('active')
      $(".side-menu").addClass('active')
    })
    $(".close-btn").click(function () {
      $(".side-menu").removeClass('active')
      $(".trigger").removeClass('active')
    })
  })
});
