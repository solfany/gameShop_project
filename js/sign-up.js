const joinForm = document.querySelector("#joinForm");
const joinBtn = document.querySelector(".btn-8");
const newWindowDiv = document.querySelector(".form");

function congratulationJoin (event) {
    event.preventDefault();
    joinForm.style.display = 'none';
    paintCongratulation()
}

let opc = 0;

function animate() {
    opc += 0.05;
    newWindow.style.opacity = opc;
    if(opc < 0.75) {
        requestAnimationFrame(animate);
    }
}
function paintCongratulation() {
    const newWindow = document.createElement("div");
    newWindow.id = "newWindow";
    const spanCongratulation = document.createElement("span");
    spanCongratulation.innerText = "축하합니다! 회원가입이 성공적으로 이루어졌습니다.";
    newWindow.appendChild(spanCongratulation);
    newWindowDiv.appendChild(newWindow);
    const newBtn = document.createElement("button");
    const spanBtn = document.createElement("span");
    const anchor = document.createElement("a");
    newWindow.appendChild(anchor);
    anchor.appendChild(newBtn);
    newBtn.appendChild(spanBtn);
    anchor.href = "login.html";
    spanBtn.innerText = "로그인 페이지로 이동";
    newBtn.classList.add("newBtn");

    
    const signUpLogo = document.querySelector(".sign-up-h2");
    signUpLogo.style.marginBottom = '80px';

    animate();
}

joinBtn.addEventListener("submit", congratulationJoin);
