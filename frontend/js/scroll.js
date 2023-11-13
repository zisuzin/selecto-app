/* 상단이동JS - scroll.js */

const goBtn = document.querySelector(".go_top_btn_wrapper");

goBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}