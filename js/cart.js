const showCartBtn = document.querySelector("#cart-btn");
// 네비 카트 버튼
const cartBox = document.querySelector("#cart");
// 카트박스 몸체
const cartContainer = document.querySelector("#cart__container");
const cartInnerBtn = document.querySelector("#cart__top i");
// 카트박스 속 닫기버튼
const cartLightOff = document.querySelector("#lightoff");
//  조명

// 카트박스 보였다 숨기기---------------------
function showCartBox() {
  cartBox.style.transform = "translateX(-300px)";
  cartLightOff.classList.remove("lightoff-hidden");
}

function hideCartBox() {
  cartBox.style.transform = "translateX(300px)";
  cartLightOff.classList.add("lightoff-hidden");
}
function lightOn(){
  hideCartBox();
}
showCartBtn.addEventListener("click", showCartBox);
  cartInnerBtn.addEventListener("click", hideCartBox);
//   -------------------------------------------
  



//---------- 장바구니 시작 -----------------------

  const cartForm = document.getElementById("cart__form");
  const cartBtn = document.getElementsByClassName(".best-btn");
  const cartList = document.getElementById("cart__list");
  const CARTS_KEY = "carts";

let carts = [];
function saveCarts() {
  localStorage.setItem(CARTS_KEY, JSON.stringify(carts));
}

// -----------장바구니에 목록추가하는 함수 ----------
function paintCart(newCart) {
  const cartLi = document.createElement("li");
  const cartImg = document.createElement("img");
  const Name = document.createElement("span");
  const btn = document.createElement("button");
  const Div = document.createElement("div");
  const Price = document.createElement("span");
  cartImg.src = `${newCart.src}`;
  cartLi.id = newCart.id;
  btn.innerText = '⨉';
  btn.addEventListener("click", deleteCart);
  cartImg.classList.add("innerCart__img");
  cartLi.appendChild(cartImg);
  Name.innerText = `- ${newCart.text}`;
  Price.innerText = `$${newCart.price}`;
  cartLi.appendChild(Div);
  Div.appendChild(Name);
  Div.appendChild(Price);
  cartLi.appendChild(btn);
  cartList.appendChild(cartLi);
  calculatePrice();
}
// -----------장바구니 목록 삭제하는 함수 ----------------
function deleteCart(event) {
  const li = event.target.parentElement;
  li.remove();
  carts = carts.filter((cart) => cart.id !== parseInt(li.id));
  saveCarts();
  calculatePrice();
}
// ----------------------------------------------------

//---------------총 금액 계산하는 함수------------------
function calculatePrice () {
  var totalPrice = 0;
  for(var i = 0; i < carts.length; i++){
    var objPrice = parseFloat(carts[i].price);
    totalPrice += objPrice;
  }
  var fixedPrice = totalPrice.toFixed(2);
  document.querySelector("#cart__sum2").innerText = `$ ${fixedPrice}`;
}
// ---------------------------------------------------------

// -----------장바구니 추가된 상품 객체 생성하는 함수-----------
function handleCartSubmit(imgSrc, productName, price) {
  event.preventDefault();
  const newCart = productName;
  const imgLoad = imgSrc;
  const productPrice = price;
  console.log(newCart);
  console.log(imgLoad);
  const newCartObj = {
    text: productName,
    src: imgLoad,
    price: productPrice,
    id: Date.now(),
  };
  carts.push(newCartObj);
  paintCart(newCartObj);
  saveCarts();
  showCartBox();
}
//-----------------------------------------------------------


const savedCarts = localStorage.getItem(CARTS_KEY);
if (savedCarts !== null) {
  const parsedCarts = JSON.parse(savedCarts);
  carts = parsedCarts;
  parsedCarts.forEach(paintCart);
} 
