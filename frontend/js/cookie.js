// 팝업창 제한 JS - cookie.js

// 쿠키 쓰기
// 이름, 값, 만료일
function setCookie(name, val, exp) {
    const date = new Date();

    // 만료 시간 구하기(exp를 ms단위로 변경)
    date.setDate(date.getTime() + exp * 24 * 60 * 60 * 1000);

    // 실제로 쿠기 작성하기
    document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + "; path=/";
}

// 쿠키 읽어오기(정규식 이용해서 가져오기)
function getCookie(name) {
    const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
}

// 오늘하루 보지 않기 버튼
function closePopup(popupId, ele) {
    // 현재 날짜
    const today = new Date();

    // 쿠키에 저장할 값
    const cookieValue = "closed";

    // 쿠키 만료일 설정 (하루 동안 유지)
    const expireDate = new Date(today.getTime() + 24 * 60 * 60 * 1000);

    // 쿠키 설정
    setCookie(popupId, cookieValue, expireDate);
    document.getElementById(popupId).style.visibility = "hidden";
}

// 일반 닫기

document.addEventListener("DOMContentLoaded", clkCookie);

// 페이지 로드시 쿠키 확인 및 처리
function clkCookie() {
    const cookieDate = document.cookie; 
    if (cookieDate.indexOf("popup1=closed") || cookieDate.indexOf("popup2=closed")< 0) {
        document.getElementById('popup1').style.visibility = "visible";
        document.getElementById('popup2').style.visibility = "visible";
    }
    else {
        document.getElementById('popup1').style.visibility = "hidden";
        document.getElementById('popup2').style.visibility = "hidden";
    }

    // 가져온 쿠키
}
