
    /********************************************
	- 메뉴 cat 클릭시 배경이미지 변경
    - 'SIGNATURE' cat 강제선택 + 중복클릭 제어
	********************************************/
    // 대상선정 함수
    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);

    // 이벤트 대상
    const menu = qsa(".full_menu > span");
    const signature_bg = qs(".signature");
    const beverage_bg = qs(".beverage");
    const coffee_bg = qs(".coffee");
    const cookie_bg = qs(".cookie");
    const bgImage = document.createElement("img");
    const menuTit = document.querySelector(".select_menu_title");
    const menuText = document.querySelector(".select_menu_info");
    const menuImg = document.querySelectorAll(".topping_menu > img");
    const mainImg = document.querySelector(".display_menu_signature > img");
    const topingImg = document.querySelectorAll(".topping_item > img");
    const topingName = document.querySelectorAll(".topping_name");
    const bgssImg = document.querySelectorAll(".side_bg");
    const signature = document.querySelector('.side_bg.signature');


    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    for (let tg of menu) {

        tg.addEventListener("click", () => {
            const prev_img = document.querySelector('.side_bg');
            
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
            menu.forEach((ele) => {
                ele.classList.remove("txt_bold");
            });

            // tg 클릭시 클래스 추가
            tg.classList.add("txt_bold");

            // 공통기능함수 /////////////////
            const chgImgFn = (ele, isrc) => {
                // 우선 기존에 이미지가 있는 .side_bg 요소를
                // 모두 순회하여 체크후 지울 예약을 걸어준다!
                const side_bg = qsa(".side_bg");
                side_bg.forEach((el) => {
                    let bgItem = el.querySelector("img");
                    
                    switch(prev_img) {
                        case 'signature': 
                            bgItem.src = "./img/c-signature-bg.jpg";
                            break;
                        case 'beverage':
                            bgItem.src = "./img/c-beverage-bg.jpg";
                            break;
                        case 'coffee':
                            bgItem.src = "./img/c-coffee-bg.png";
                            break;
                        case 'cookie':
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
                
                ele.innerHTML = `<img src="${isrc}" alt="image">`;

                setTimeout(() => {
                    // 왼쪽으로 들어올때는 애니메이션!
                    ele.style.transition = "left 1s ease-in";
                    ele.style.left = "0";
                    ele.style.zIndex = "1";
                }, 1);

            }; // chgImgFn //

            for (let x in main_menu) {
                if (tg.innerText === main_menu[x].cat){
                    menuTit.innerText = main_menu[x].cat;
                    menuText.innerHTML = main_menu[x].msg;

                    // 시그니처 메뉴
                    // 메뉴 클릭시 메뉴이미지 변경
                    menuImg.forEach((ele,idx) => {
                        ele.src = `./img/${main_menu[x]['sImg'][idx]}.png`;
                    });

                    // 메뉴 클릭시 메인이미지 변경
                    mainImg.src = `./img/${main_menu[x]['mImg']}.png`;

                    /* 메뉴텍스트 클릭시 토핑이미지 변경 */
                    topingImg.forEach((ele,idx) =>{
                        ele.src = `./img/${main_menu[x]['tpImg'][idx]}.png`;

                        /* 'BEVERAGE' 갯수 외 이미지 숨기기/그외 보이기 */
                        if(tg.innerText==="BEVERAGE") {
                            topingImg[3].style.opacity = "0";
                        } else {
                            topingImg[3].style.opacity = "1";
                        }
                        /* 'COFFEE' 갯수 외 이미지 숨기기/그외 보이기 */
                        if(tg.innerText==="COFFEE") {
                            topingImg[2].style.display = "none";
                            topingImg[3].style.display = "none";
                        } else {
                            topingImg[2].style.display = "inline";
                            topingImg[3].style.display = "inline";
                        }
                    });

                    topingName.forEach((ele,idx)=>{
                        ele.innerText = `${main_menu[x]["토핑이름"][idx]}`;
                        /* 'BEVERAGE' 갯수 외 텍스트 숨기기/그외 보이기 */
                        if(tg.innerText==="BEVERAGE") {
                            topingName[3].style.opacity = "0";
                        } else {
                            topingName[3].style.opacity = "1";
                        }
                        if (tg.innerText==="COFFEE") {
                            topingName[3].style.display = "none";
                        } else {
                            topingName[3].style.display = "block";
                        }
                        /* 'COFFEE' 갯수 외 텍스트 숨기기/그외 보이기 */
                        if(tg.innerText==="COFFEE") {
                            topingName[2].style.display = "none";
                            topingName[3].style.display = "none";
                        } else {
                            topingName[2].style.display = "block";
                            topingName[3].style.display = "block";
                        }
                    });
                }
            }
            
            /* 1) 클릭대상이 "SIGNUTURE"인 경우 */
            if (tg.innerText === "SIGNATURE") {
                let isrc = decodeURIComponent(`./img/c-signature-bg.jpg`);
                chgImgFn(signature_bg, isrc);

                bgssImg.forEach(function(val, idx) {
                    if(val.classList[1] != signature_bg.classList[1]) {
                    val.classList.remove(`on`);
                    } else {
                    val.classList.add(`on`);
                    }   
                });
            /* 2) 클릭대상이 "BEVERAGE"인 경우 */
            } else if (tg.innerText === "BEVERAGE") {
                let isrc = decodeURIComponent(`./img/c-beverage-bg.jpg`);
                chgImgFn(beverage_bg, isrc);
                bgssImg.forEach(function(val, idx) {
                    if(val.classList[1] != beverage_bg.classList[1]) {
                        val.classList.remove(`on`);
                    } else {
                        val.classList.add(`on`);
                    }   
                    });
                /* 3) 클릭대상이 "COFFEE"인 경우 */
            } else if (tg.innerText === "COFFEE") {
                let isrc = decodeURIComponent(`./img/c-coffee-bg.png`);
                chgImgFn(coffee_bg, isrc);
                bgssImg.forEach(function(val, idx) {
                    if(val.classList[1] != coffee_bg.classList[1]) {
                        val.classList.remove(`on`);
                    } else {
                        val.classList.add(`on`);
                    }   
                    });
            /* 4) 클릭대상이 "COOKIE"인 경우 */
            } else if (tg.innerText === "COOKIE") {
                let isrc = decodeURIComponent(`./img/c-cookie-bg.png`);
                chgImgFn(cookie_bg, isrc);
                bgssImg.forEach(function(val, idx) {
                    if(val.classList[1] != cookie_bg.classList[1]) {
                        val.classList.remove(`on`);
                    } else {
                        val.classList.add(`on`);
                    }   
                    });
            } else {
                return;
            }
            
            
        }); // tg click 이벤트()
    }
