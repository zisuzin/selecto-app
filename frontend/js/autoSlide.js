// 오토슬라이드 JS - autoslide.js
window.addEventListener("DOMContentLoaded", autoSlide());

function autoSlide() {
    // 대상선정 함수
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);

    // 클래스 추가/제거함수
    const addCls = (x, y) => x.classList.add(y);
    const removeCls = (x, y) => x.classList.remove(y);

    // 변경 대상 1 : 슬라이드 리스트
    const slide = qsa(".main_content_wrapper li");
    // 변경 대상 2 : 타임바
    const rtimeBar = qs(".main_timebar");
    // 현재 슬라이드번호
    const ctnum = qs(".ctnum");

    // 인터벌 함수 지우기 위한 변수
    let autoI;
    // 타임아웃 함수 지우기 위한 변수
    let autoT;

    // 슬라이드번호 변수
    let snum = 0;
    // 슬라이드 개수
    let slideLength = slide.length;

    const fadeSlide = () => {
        // 클래스 초기화
        for (let x of slide) removeCls(x,"on");
        // 클래스 추가
        addCls(slide[snum],"on");

        // 슬라이드 번호 증가
        setTimeout(()=>{
            snum++;
            // 한계값 체크
            if (snum === slideLength) snum = 0;
        }, 1000)
        
        addCls(rtimeBar,"on");
        // 현재 슬라이드 번호 표시
        ctnum.innerText = snum + 1;
    };
    
    fadeSlide();
    setInterval(fadeSlide, 5000);
}
