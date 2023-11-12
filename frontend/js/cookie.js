// 팝업창 제한 JS - cookie.js

// 쿠키 쓰기
// 이름, 값, 만료일
function setCookie(name, val, exp) {
    const date = new Date();

    // 만료 시간 구하기(exp를 ms단위로 변경)
    date.setDate(date.getDate() + exp);

    // 실제로 쿠기 작성하기
    document.cookie = name + "=" + val + "; expires=" + date.toUTCString() + "; path=/";
}

// 오늘하루 보지 않기 버튼
function todayclosePop(popupId) {
    // 쿠키 설정
    setCookie(popupId, "closed", 1);
    document.getElementById(popupId).style.visibility = "hidden";
}

// 일반 닫기
function closePop(popupId) {
    document.getElementById(popupId).style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", popupHide());

// 페이지 로드시 쿠키 확인 및 처리
function popupHide() {
    const cookieDate = document.cookie; 
    const popup1Closed = cookieDate.indexOf("popup1=closed")< 0;
    const popup2Closed = cookieDate.indexOf("popup2=closed")< 0;
    if (popup1Closed) {
        document.getElementById('popup1').style.visibility = "visible";
    }
    else {
        document.getElementById('popup1').style.visibility = "hidden";
    }
    if (popup2Closed) {
        document.getElementById('popup2').style.visibility = "visible";
    }
    else {
        document.getElementById('popup2').style.visibility = "hidden";
    }
}
