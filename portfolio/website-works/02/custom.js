let paradeSwiper;

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

  /* Section - Side Menu Modal */
  // Side Menu Modal 열기 
  $('.open-modal').click(function (){
    $('.modal').removeClass('active')
    $('.close-btn').removeClass('active')
  })
  // Side Menu Modal 닫기 
  $('.close-btn, .welcome').click(function (){
    $('.modal').addClass('active')
    $('.close-btn').addClass('active')
  })
  // Side Menu Modal - category slide
  $('.modal-item').eq(0).show()
  $('.modal-category').click(function (){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(this).children('.modal-item').stop().slideDown()
    $(this).siblings().children('.modal-item').slideUp()
  })

  /* Section - ride tabmenu */
  $('.ride-btn a').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    let tab = $(this).attr('data-alt')
    $('.ride-list').removeClass('active')
    $('#' + tab).addClass('active')
  })

  /* Section - parade slide - Swiper JS */
  paradeSwiper = new Swiper(".parade-swiper", {
    // slidesPerView: 5,
    // spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 1200,
    //   disableOnInteraction: false,
    // },
  });

  /* Wow JS */
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       100,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

})