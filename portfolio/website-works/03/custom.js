let welcomeSwiper;
let bannerSwiper;
let goodsSwiper;
let influencerSwiper;
let videoSwiper;

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .top").addClass("active");
    } else {
      $("header, .top").removeClass("active");
    }
  });

  /* Header sub-menu */
  $(".mein-menu a").mouseenter(function () {
    $(".sub-menu-box").hide();
    const menu = $(this).attr("data-alt");
    $("#" + menu).show();
    $("header").addClass("active");
  });

  $(".sub-menu-box").mouseleave(function (e) {
    // 페이지 위치
    const topPos = $(window).scrollTop();

    // 페이지 최상담일 때만 적용
    if (topPos === 0) {
      $("header").removeClass("active");
    }
    $(".sub-menu-box").hide();
  });

  /* Header Trigger */
  $('.trigger').click(function (){
    $(this).toggleClass('active')
    $('.util-menu').toggleClass('active')
  })
  $('section').click(function (){
    $('.util-menu, .trigger').removeClass('active')
  })

  /* Section - Welcome Slide */
  welcomeSwiper = new Swiper(".welcome-slide", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Section - Welcome Typeit S */
  new TypeIt("#type-1", {
    strings: [
      "어디에나 쉽고 편하게 매치하기 좋은",
      "커버낫 라이트 백팩과 일상을 함께 해보세요.",
    ],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#type-2", {
    strings: ["도심의 깊이가 느껴지는", "웨빙 백팩 스타일링을 제안합니다."],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt("#type-3", {
    strings: ["커버낫의 다운 파카와", "함께 도시의 매력을 찾아보세요."],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  /* Section - Welcome Typeit E */

  $(".best-btn a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".best-list").removeClass("active");
    var best = $(this).attr("data-text");
    $("#" + best).addClass("active");
  });

  bannerSwiper = new Swiper(".banner-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* section - season tab-btn */
  $(".season-btn a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".season-list").removeClass("active");
    var season = $(this).attr("data-alt");
    $("#" + season).addClass("active");
  });

  /* section - season Slide */
  goodsSwiper = new Swiper(".season-swiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    // freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 35,
      },
    },
  });

  /* section - influencer tab-btn */
  $(".influencer-btn a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".influencer-list").removeClass("active");
    var influencer = $(this).attr("data-alt");
    $("#" + influencer).addClass("active");
  });

  /* section - influencer Slide */
  influencerSwiper = new Swiper(".influencer-swiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    // freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 35,
      },
    },
  });

  videoSwiper = new Swiper(".video-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
