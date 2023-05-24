// let plus = document.querySelector("plus");
// let minus = document.querySelector("minus");
// let result = document.querySelector("#result");
// let totalcost = document.querySelector(".totalcost");
// let i = 1;
// plus.addEventListener("click", () => {
//   i++;
//   result.textContent = i;
//   let totalcostNum = i * 990000;
//   totalcost.textContent = "₩" + totalcostNum.toLocaleString();
// });
// minus.addEventListener("click", () => {
//   if (i > 0) {
//     i--;
//     result.textContent = i;
//     let totalcostNum = i * 990000;
//     totalcost.textContent = "₩" + totalcostNum.toLocaleString();
//   } else {dfdf
//     totalcost.textContent = "₩" + 0;
//   }
// });
$(document).ready(function () {
  $(".enter_a_promo_code").hide();
  $(".submit__hidden__button").hide();
  $(".add__add__add").click(function () {
    $(".enter_a_promo_code").slideToggle();
    $(".submit__hidden__button").slideToggle();
  });
});

$(document).ready(function () {
  $(".enter_a_promo_code1").hide();
  $(".add__add__add1").click(function () {
    $(".enter_a_promo_code1").slideToggle();
  });
});
