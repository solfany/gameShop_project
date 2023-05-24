var slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 390,
    slideMargin = 30,
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");
makeClone();
function makeClone() {
        // 기존에 존재하던 리스트 뒤에 클론리스트 추가하는 for문
    for(var i=0; i<slideCount; i++){
        // a.cloneNode() : a 복사, a.cloneNode(true) : a의 자식요소까지 복사
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        // a.appendChild(b) : a의 뒤에 b를 추가
        slides.appendChild(cloneSlide);
    }
        // 기존에 존재하던 리스트 앞에 클론리스트 추가하는 for문
    for(var i = slideCount-1; i>=0; i--){        // first앞에 last를 가져오기위한 조건식
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        // a.prepend(b) : a의 앞에 b를 추가
        slides.prepend(cloneSlide);
    }
        // 끝날때 updateWidth()함수를 발동
    updateWidth();
        //초기위치를 잡는 함수 발동
    setInitialPos();
        //이미지가 정렬되는 모습을 보이지 않게하기 위한 타임아웃
    setTimeout(function(){
        slides.classList.add("animated");
    }, 100);
}
function updateWidth() {
        // 앞뒤로 추가된 클론리스트를 포함하여 다시 새로이 선택
    var currentSlides = document.querySelectorAll(".slides li");
        // 새로 선택한 리스트들의 길이
    var newSlideCount = currentSlides.length;
        //  새로 선택한 리스트들의 넓이 계산
        // (슬라이드 넓이+마진값) * 슬라이드 개수 - 마지막슬라이드의 마진
    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
        // 기존 넓이값을 새로 계산한 넓이값으로 변경
    slides.style.width = newWidth;
}
function setInitialPos(){
    var inintialTranslateValue = (slideWidth + slideMargin)*slideCount;
    slides.style.transform = 'translateX(-' + inintialTranslateValue +'px)';
}
nextBtn.addEventListener("click", function(){
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function(){
    moveSlide(currentIdx - 1);
});
function moveSlide(num){
    slides.style.left= - num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        },500);
        //슬라이드가 끝에 도달하면
        // 슬라이드의 처음으로 돌아가는 애니메이션을 없애서 연결되어있다는 느낌을 주도록함
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
        // 다시 애니메이션 효과 추가
    }
}


