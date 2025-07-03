$(function () {
  /* Scroll Event */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .top").addClass("active");
    } else {
      $("header, .top").removeClass("active");
    }
  });

  /* Section - Practical Tab */
  $(".tab-btn a").click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $('.tab').removeClass('active')
    let tab = $(this).attr("data-alt");
    $("#" + tab).addClass('active');
  });
});