$(document).ready(function () {
  number = 7;
  $(".text1").hide();
  $(".text2").hide();
  $(".text3").hide();
  $(".text4").hide();
  $(".text5").hide();
  $(".text6").hide();
  $(".text7").hide();
  $(".read").click(function () {
    $(".unread").hide(500);
    $(".active").css("background", "white");
    number = 0;
    $("#son").text(number);
    if (number == 0) {
      $(".message").removeClass("active");
    }
  });
  $("#mark").click(function () {
    $(".text1").toggle(500);
    $("#unread-mark").hide(500);
    $("#mark").css("background", "white");
    if ($("#mark").hasClass("active")) {
      number--;
      $("#mark").removeClass("active");
    }
    $("#son").text(number);
  });
  $("#angela").click(function () {
    $(".text2").toggle(500);
    $("#unread-angela").hide(500);
    $("#angela").css("background", "white");
    if ($("#angela").hasClass("active")) {
      number--;
      $("#angela").removeClass("active");
    }
    $("#son").text(number);
  });
  $("#jacob").click(function () {
    $(".text3").toggle(500);
    $("#unread-jacob").hide(500);
    $("#jacob").css("background", "white");
    if ($("#jacob").hasClass("active")) {
      number--;
      $("#jacob").removeClass("active");
    }
    $("#son").text(number);
  });
  $("#rizky").click(function () {
    $(".text4").toggle(500);
    $("#unread-rizky").hide(500);
    $("#rizky").css("background", "white");
    if ($("#rizky").hasClass("active")) {
      number--;
      $("#rizky").removeClass("active");
    }
    $("#son").text(number);
  });

  $("#kimberly").click(function () {
    $(".text5").toggle(500);
    $("#unread-kimberly").hide(500);
    $("#kimberly").css("background", "white");
    if ($("#kimberly").hasClass("active")) {
      number--;
      $("#kimberly").removeClass("active");
    }
    $("#son").text(number);
  });
  $("#nathan").click(function () {
    $(".text6").toggle(500);
    $("#unread-nathan").hide(500);
    $("#nathan").css("background", "white");
    if ($("#nathan").hasClass("active")) {
      number--;
      $("#nathan").removeClass("active");
    }
    $("#son").text(number);
  });
  $("#anna").click(function () {
    $(".text7").toggle(500);
    $("#unread-anna").hide(500);
    $("#anna").css("background", "white");
    if ($("#anna").hasClass("active")) {
      number--;
      $("#anna").removeClass("active");
    }
    $("#son").text(number);
  });

  $("#son").text(number);
});
