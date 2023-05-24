$(document).ready(function () {
  $(".view__down__first").hide();
  $("button.view__btn__first").click(function () {
    $("div.view__down__first").slideToggle();
  });
});
$(document).ready(function () {
  $(".view__down__second").hide();
  $("button.view__btn__second").click(function () {
    $("div.view__down__second").slideToggle();
    $("div.view__down__second-1").slideUp(400);
    $("div.view__down__second-2").slideUp(400);
  });
});
$(document).ready(function () {
  $(".view__down__second-1").hide();
  $("button.view__btn__second-1").click(function () {
    $("div.view__down__second-1").slideToggle();
    $("div.view__down__second").slideUp(400);
    $("div.view__down__second-2").slideUp(400);
  });
});
$(document).ready(function () {
  $(".view__down__second-2").hide();
  $("button.view__btn__second-2").click(function () {
    $("div.view__down__second-2").slideToggle();
    $("div.view__down__second").slideUp(400);
    $("div.view__down__second-1").slideUp(400);
  });
});
$(document).ready(function () {
  $(".text__icon").hide();
  $("button.bot").click(function () {
    $(".text__icon").slideToggle(600);
  });
});
$(document).ready(function () {
  $("#img2__pid").hide();
  $("#456").click(function () {
    $("#img2__pid").show();
    $("#img1__pid").hide();
  });
});
$(document).ready(function () {
  $("#123").click(function () {
    $("#img1__pid").show();
    $("#img2__pid").hide();
  });
});
