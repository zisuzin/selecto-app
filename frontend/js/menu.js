/********************************************
	- 메뉴 cat 클릭시 배경이미지 변경
    - 'SIGNATURE' cat 강제선택 + 중복클릭 제어
	********************************************/
// 대상선정 함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 이벤트 대상
const menu = qsa(".full_menu > span");
const signature_bg = qs(".signature");
const beverage_bg = qs(".beverage");
const coffee_bg = qs(".coffee");
const cookie_bg = qs(".cookie");
const bgImage = document.createElement("img");
const menuTit = document.querySelector(".select_menu_title");
const menuDsc = document.querySelector(".select_menu_info");
const menuImg = document.querySelectorAll(".topping_menu > img");
const mainImg = document.querySelector(".display_menu_signature > img");
const bgImg = document.querySelectorAll(".side_bg");
const signature = document.querySelector(".side_bg.signature");

// 광클금지변수 : 0 - 허용, 1 - 불허용
let prot = 0;

for (let tg of menu) {
    tg.addEventListener("click", () => {
        const prev_img = document.querySelector(".side_bg");

        // 광클금지
        if (prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0;
        }, 1000);

        // 현재 선택된 상태가 ".txt_bold"이면 리턴
        let chkSts = event.currentTarget.classList.contains("txt_bold");
        if (chkSts) return;

        // menu 기존 적용된 클래스 제거
        menu.forEach(ele => {
            ele.classList.remove("txt_bold");
        });

        // tg 클릭시 클래스 추가
        tg.classList.add("txt_bold");

        // 공통기능함수 /////////////////
        const chgImgFn = (ele, isrc) => {
            // 우선 기존에 이미지가 있는 .side_bg 요소를
            // 모두 순회하여 체크후 지울 예약을 걸어준다!
            const side_bg = qsa(".side_bg");
            side_bg.forEach(el => {
                let bgItem = el.querySelector("img");

                switch (prev_img) {
                    case "signature":
                        bgItem.src = "./img/c-signature-bg.jpg";
                        break;
                    case "beverage":
                        bgItem.src = "./img/c-beverage-bg.jpg";
                        break;
                    case "coffee":
                        bgItem.src = "./img/c-coffee-bg.png";
                        break;
                    case "cookie":
                        bgItem.src = "./img/c-cookie-bg.png";
                        break;
                }

                if (bgItem) {
                    // 이미지가 있는 경우 if문안으로!
                    // 1. z-index 아래로함(위로지나가야함!)
                    el.style.zIndex = "0";
                    // 2. 등장후(1초후) 그 이미지를 지움!
                    setTimeout(() => {
                        bgItem.remove();
                    }, 1000);
                }
            });

            // 여기서부터는 선택된 p요소에 이미지넣기임!

            // 오른쪽 바깥으로 보낼때는 애니없음!
            ele.style.transition = "none";
            ele.style.left = "100%";
            ele.innerHTML = `<img src="${isrc}" alt="배경이미지">`;

            setTimeout(() => {
                // 왼쪽으로 들어올때는 애니메이션!
                ele.style.transition = "left 1s ease-in";
                ele.style.left = "0";
                ele.style.zIndex = "1";
            }, 1);
        }; // chgImgFn //

        for (let x in main_menu) {
            if (tg.innerText === main_menu[x].cat) {
                chgMenu(x);
            }
        }

        switch (tg.innerText) {
            case "SIGNATURE":
                let sgImg = "./img/c-signature-bg.jpg";
                chgImgFn(signature_bg, sgImg);
                classFn(signature_bg);
                break;
            case "BEVERAGE":
                let bvImg = "./img/c-beverage-bg.jpg";
                chgImgFn(beverage_bg, bvImg);
                classFn(beverage_bg);
                break;
            case "COFFEE":
                let cfImg = "./img/c-coffee-bg.png";
                chgImgFn(coffee_bg, cfImg);
                classFn(coffee_bg);
                break;
            case "COOKIE":
                let ckImg = "./img/c-cookie-bg.png";
                chgImgFn(cookie_bg, ckImg);
                classFn(cookie_bg);
                break;
        }
    }); // tg click
}

// 클래스 비교 함수
function classFn(ele) {
    bgImg.forEach(function (val) {
        if (val.classList[1] != ele.classList[1]) {
            val.classList.remove(`on`);
        } else {
            val.classList.add(`on`);
        }
    });
}

// 토핑이미지 업데이트
function updateTp(item,txt) {
    let hcode = "";

    item.forEach((topping,idx) => {
        hcode += `
        <figure class="topping_item">
            <img src="./img/${topping}.png" alt=${txt[idx]}/>
            <figcaption class="topping_name">${txt[idx]}</figcaption>
        </figure>
        `;
    });
    document.querySelector(".topping_item_list").innerHTML = hcode;
}

function chgMenu(obj) {
    menuTit.innerText = main_menu[obj].cat;
    menuDsc.innerHTML = main_menu[obj].msg;

    // 메뉴이미지 변경
    menuImg.forEach((ele, idx) => {
        ele.src = `./img/${main_menu[obj]["sImg"][idx]}.png`;
    });

    // 메인이미지 변경
    mainImg.src = `./img/${main_menu[obj]["mImg"]}.png`;

    // 토핑이미지 변경
    const tpImgs = main_menu[obj].tpImg;
    const tpTxts = main_menu[obj].tgName;
    updateTp(tpImgs, tpTxts);
}

// 첫번째메뉴 트리거
menu[0].click();