$(document).ready(function () {
  $(".FAQ__A").hide();
  $("#q1").click(function () {
    $("#a1").slideToggle();
  });
  $("#q2").click(function () {
    $("#a2").slideToggle();
  });
  $("#q3").click(function () {
    $("#a3").slideToggle();
  });
  $("#q4").click(function () {
    $("#a4").slideToggle();
  });
  $("#q5").click(function () {
    $("#a5").slideToggle();
  });
  $("#q6").click(function () {
    $("#a6").slideToggle();
  });
  $("#q7").click(function () {
    $("#a7").slideToggle();
  });
  $("#q8").click(function () {
    $("#a8").slideToggle();
  });
  $("#q9").click(function () {
    $("#a9").slideToggle();
  });
});

function openTab(event, tabName) {
    var i, tabContents, tabButton;
    tabContents = document.querySelectorAll(".FAQ__tabcontent");
    for (i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("show");
    }
    tabButton = document.querySelectorAll(".FAQ__btn");
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("show");
    event.currentTarget.classList.add("active");
    $(".FAQ__A").hide();
  }


