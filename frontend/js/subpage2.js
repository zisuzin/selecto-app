let sigImg = document.querySelector(".menu_img");
const sigTxt = document.querySelectorAll(".menu_txt");
const createSgImg = document.createElement("img");
const menuListAll = document.querySelectorAll(".menu_list_top_info > a");
const urlParams = new URLSearchParams(window.location.search);
const initmenu = urlParams.get('menu');

// 클래스 active 넣기
function moveMenu() {
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

    if (initmenu) {
        for (let menu of menuListAll) {
            const menuTxt = menu.innerText;
            if (menuTxt === initmenu) {
                menu.click();
            }
        }
    }
}

moveMenu();

// 메뉴 이미지 변경
function chgImg(txt) {
    let hcode = "<ul>";

    for (let i = 0; i < subpage_menu[txt]["img"].length; i++) {
        hcode += `
        <li class="menu_item">
            <figure>
                <a href="#" onclick="alert('공사중입니다.')">
                    <img src="./img/${subpage_menu[txt]["img"][i]}.png" alt="${subpage_menu[txt]["img"][i]}이미지">
                </a>
            </figure>
            <figcaption>
                <div class="menu_txt">
                ${subpage_menu[txt]["menu"][i]}
                </div>
            </figcaption>
        </li>
        `;
    }

    hcode += "</ul>";
    sigImg.innerHTML = hcode;
} // chgImg 함수()
