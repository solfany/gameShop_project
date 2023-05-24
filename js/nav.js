// search 관련
const searchInput = document.querySelector("#search-input");
const toggleBtn = document.querySelector("#toggle-vibility");
const navList = document.querySelector(".nav__list");

// cart 관련


  let width = 0;
function animate1() {
  width += 5;
  searchInput.style.width = width + "px";
  if (width < 200) {
    requestAnimationFrame(animate1);
  }
}
function animate2(){
  width += -5;
  searchInput.style.width = width + "px";
  if (width > 0) {
    requestAnimationFrame(animate2);
  }
  setTimeout(visibilityHidden,700);
  function visibilityHidden(){
    searchInput.style.visibility = 'hidden';
  }
}
function showInput() {
      searchInput.classList.toggle("v-hidden");
      if (searchInput.className !== "v-hidden") {
      searchInput.style.visibility = 'visible';
      animate1();
      } else {
       animate2();
      }
    }



toggleBtn.addEventListener("click", showInput);




