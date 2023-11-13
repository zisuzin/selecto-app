/* 텍스트 등장 애니JS - txt_fade.js */

const moveTxtL1 = document.querySelector(".left_side_moveIn_txt1");
const moveTxtL2 = document.querySelector(".left_side_moveIn_txt2");
const moveTxtR1 = document.querySelector(".right_side_moveIn_txt1");
const moveTxtR2 = document.querySelector(".right_side_moveIn_txt2");

window.addEventListener("scroll", () => {
    let scValue = window.scrollY;

    // 스크롤 down시 애니 사라짐
    if(scValue > 300) {
        moveTxtL1.style.animation = 'txtDisappearL 2s ease-out forwards'
        moveTxtL2.style.animation = 'txtDisappearL 2.1s ease-out forwards'
        moveTxtR1.style.animation = 'txtDisappearR 2s ease-out forwards'
        moveTxtR2.style.animation = 'txtDisappearR 2.1s ease-out forwards'
    }
    // 로드시 애니 등장!
    else {
        moveTxtL1.style.animation = 'txtSlideL 2s ease-out'
        moveTxtL2.style.animation = 'txtSlideL 2.1s ease-out'
        moveTxtR1.style.animation = 'txtSlideR 2s ease-out'
        moveTxtR2.style.animation = 'txtSlideR 2.1s ease-out'
        moveTxtR2.style.animation = 'txtSlideR 2.1s ease-out'
    }
});