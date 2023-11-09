

// 상단이동버튼클릭시 최상단 이동 
const goBtn = document.querySelector(".go_top_btn_wrapper");

goBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


