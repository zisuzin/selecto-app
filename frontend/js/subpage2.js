let sigImg = document.querySelector(".menu_img");
const sigTxt = document.querySelectorAll(".menu_txt");
const createSgImg = document.createElement("img");
const menuListAll = document.querySelectorAll(".menu_list_top_info > a");

// 클래스 active 넣기
function moveMenu(gnb) {
    for (let x of menuListAll) {
        x.addEventListener("click", e => {
            e.preventDefault();
            // 클릭한 메뉴명
            const btxt = e.currentTarget.innerText;

            menuListAll.forEach(ele => {
                ele.classList.remove("click_active");
                window.history.pushState({}, "", `?menu=${btxt}`);
            });

            x.classList.add("click_active");
            chgImg(btxt);
        });
    }
    menuListAll[0].click();
}

moveMenu('Signature');

// 메뉴 이미지 변경
function chgImg(txt) {
    let hcode = "<ul>";

    for (let i = 0; i < subpage_menu[txt]["img"].length; i++) {
        hcode += `
        <li class="menu_item">
            <a href="#" onclick="alert('공사중입니다.')">
                <figure>
                    <img src="./img/${subpage_menu[txt]["img"][i]}.png" alt="${subpage_menu[txt]["img"][i]}이미지">
                <figcaption>
                    <div class="menu_txt">
                    ${subpage_menu[txt]["menu"][i]}
                    </div>
                </figcaption>
                </figure>
            </a>
        </li>
        `;
    }

    hcode += "</ul>";
    sigImg.innerHTML = hcode;
} // chgImg 함수()
