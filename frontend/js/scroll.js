

// 상단이동버튼클릭시 최상단 이동 
const goBtn = document.querySelector(".go_top_btn_wrapper");
const jumpImg = document.querySelectorAll(".Signature_menu_item");

goBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


