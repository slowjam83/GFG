$(document).ready(function () {
  // social btn
  $(".social_btn").mouseover(function () {
    $(".util .social_group").addClass("active");
  });
  $(".util .social_group").mouseover(function () {
    $(this).addClass("active");
  });
  $(".util .social_group").mouseout(function () {
    $(this).removeClass("active");
  });

  // language btn
  $(".language_btn").mouseover(function () {
    $(".util .language_group").addClass("active");
  });
  $(".util .language_group").mouseover(function () {
    $(this).addClass("active");
  });
  $(".util .language_group").mouseout(function () {
    $(this).removeClass("active");
  });

  $(".language_group a").hover(function () {
    if ($(".language_group a").hasClass("active")) {
      $(".language_group a").removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  // loading script
  $.fakeLoader({
    timeToHide: 700,
    bgColor: "#2d2d2f",
    spinner: "spinner5",
  });

  // mobile nav
  $(".ham").click(function () {
    $(this).toggleClass("active");
    $(".mo-nav").toggleClass("active");
  });

  // $('.carousel').carousel({
  //     interval: 5000
  // });

  // go top button
  btnTop();

  $(document).on("scroll", function () {
    btnTop();
  });

  $(document).on("click", "#goTop", function () {
    $("html,body").animate({
      scrollTop: "0",
    });
    return false;
  });

  function btnTop() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $("#goTop").stop().show().animate(
        {
          opacity: "1",
        },
        300
      );
    } else {
      $("#goTop")
        .stop()
        .animate(
          {
            opacity: "0",
          },
          300,
          function () {
            $("#goTop").hide();
          }
        );
    }
  }
});
