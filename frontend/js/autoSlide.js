// 로드구역
window.addEventListener("DOMContentLoaded",loadFn_selecto);

function loadFn_selecto(){
    // console.log("로드완료");

    /************ 공통함수 ************/
    // 대상선정 함수
    const qsa = (x) => document.querySelectorAll(x);

    // 클래스 추가/제거함수
    const addCls = (x,y) => x.classList.add(y);
    const removeCls = (x,y) => x.classList.remove(y);

    /************ 슬라이드 깜빡거림(연습) ************/

    // 1. 대상선정 : .main_innerWrap li 
    const autoSlide = qsa(".main_content_wrapper > ul> li");
    let NowSlideNum = qs(".current-pagination");
    // console.log(autoSlide); 

    // 슬라이드번호 변수
    let slideNum = 0;
    // 슬라이드 개수
    let slideLength = autoSlide.length;

    // 2. 함수생성
    const fadeSlide = () => {
        // 클래스초기화
        for(let x of autoSlide) removeCls(x,"on");
        // 클래스 주기
        addCls(autoSlide[slideNum],"on");
        // 슬라이드번호 증감
        slideNum++;
        // 슬라이드 번호 fraction
        if(slideNum<5) {
            NowSlideNum.innerText = slideNum;
        }
        // 한계값
        if(slideNum === slideLength) slideNum = 0;
    }; // fadeSlide()
    
    // 3. 함수호출
    // 함수최초호출
    fadeSlide();

    // 5초간격으로 함수호출
    // setInterval(fadeSlide,4000);
    setInterval(fadeSlide,4000);


} // loadFn()

// 1. 슬라이드 자동넘김 호출