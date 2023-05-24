$(document).ready(function () {
  $(".text__icon").hide();
  $("button.bot").click(function () {
    $(".text__icon").slideDown();
  });
  $("#chat__top__btn").click(function () {
    $(".text__icon").slideUp();
  });
});
//product_detail alone
$(document).ready(function () {
  $(".text__icon__pidAlone").hide();
  $("button.bot").click(function () {
    $(".text__icon__pidAlone").slideDown();
  });
  $("#chat__top__btn").click(function () {
    $(".text__icon__pidAlone").slideUp();
  });
});
//dfd