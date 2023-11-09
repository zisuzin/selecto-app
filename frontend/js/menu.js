
    /* *******************************************
	* 메뉴 카테고리 클릭시 배경이미지 변경
    * 'SIGNATURE' 카테고리 강제선택 + 중복클릭 제어
	******************************************* */
    /************ 공통함수 ************/
    // 대상선정 함수
    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);

    // 이벤트 대상
    const menuListA = qsa(".full_menu > span"),
        signature_bg = qs(".signature"),
        beverage_bg = qs(".beverage"),
        coffee_bg = qs(".coffee"),
        cookie_bg = qs(".cookie"),
        bgImage = document.createElement("img"),

        menuTit = document.querySelector(".select_menu_title"),
        menuText = document.querySelector(".select_menu_info"),
        menuImg = document.querySelectorAll(".topping_menu > img"),
        mainImg = document.querySelector(".display_menu_signature > img"),
        topingImg = document.querySelectorAll(".topping_item > img"),
        topingName = document.querySelectorAll(".topping_name"),
        bgssImg = document.querySelectorAll(".side_bg"),
        signature = document.querySelector('.side_bg.signature');


    // 광클금지변수 : 0 - 허용, 1 - 불허용
        let prot = 0;

        for (let eachMenu of menuListA) {

            eachMenu.addEventListener("click", () => {
                var before_image = document.querySelector('.side_bg.on'); //전에 활성화 이미지
                
                // 광클금지 설정하기 //////
                if (prot) return;
                prot = 1; // 잠금!
                setTimeout(() => {
                    prot = 0; // 해제!
                }, 1000); /// 0.4초후 해제! ///
                // 현재 클릭된 메뉴에 ".text_bold"이면 리턴
                let chkSts = event.currentTarget.classList.contains("text_bold");
                // console.log(chkSts);
                if (chkSts) return; // 현재선택상태면 리턴
    
    
                menuListA.forEach((ele, idx) => {
                    /* menuListA 기존 적용된 클래스 효과 제거 */
                    ele.classList.remove("text_bold");
                });
                /* eachMenu 클릭시 클래스 효과 추가 */
                eachMenu.classList.add("text_bold");
    
                // 공통기능함수 /////////////////
                const commonFn = (ele, isrc) => {
                    // ele - 선택된 p요소, isrc-넣을이미지경로
    
                    // 우선 기존에 이미지가 있는 p.side_bg 요소를
                    // 모두 순회하여 체크후 지울 예약을 걸어준다!
                    const side_bg = qsa(".side_bg");
                    // console.log(side_bg);
                    side_bg.forEach((el) => {
                        let bgItem = el.querySelector("img");
                        
                        if(before_image == 'signature') {
                            bgItem.src = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-signature-bg.jpg`);
                        } else if(before_image == 'beverage') {
                            bgItem.src = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-beverage-bg.jpg`);
                        } else if(before_image == 'coffee') {
                            bgItem.src = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-coffee-bg.png`);
                        } else if(before_image == 'cookie') {
                            bgItem.src = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-cookie-bg.png`);
                        }

                        if (bgItem) {
                            // 이미지가 있는 경우 if문안으로!
                            // 1. z-index 아래로함(위로지나가야함!)
                            el.style.zIndex = "0";
                            // 2. 등장후(1초후) 그 이미지를 지움!
                            setTimeout(() => {
                                // el.style.transition= "none";
                                console.log(el);
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
    
                }; // commonFn //
    
                let hcode = "";
                // console.log(main_menu);
                for(let x in main_menu) {
                    if(eachMenu.innerText === main_menu[x].카테고리){
                        menuTit.innerText = main_menu[x].카테고리;
                        menuText.innerHTML = `${main_menu[x].메시지}`;
                        // let isrc = `./00.자료수집/02.이미지데이터/SELECTO_COFFEE/c-${main_menu[x]["카테고리"].toLowerCase()}-bg-1.jpg`;
                        let isrc = decodeURIComponent(`./00.data/02.imgData/SELECTO_COFFEE/c-${main_menu[x]["카테고리"].toLowerCase()}-bg.png`);

                        // 시그니처 메뉴
                        /* 메뉴텍스트 클릭시 메뉴이미지 변경 */
                        menuImg.forEach((ele,idx) => {
                            ele.src = decodeURIComponent(`./00.data/02.imgData/SELECTO_COFFEE/${main_menu[x]["서브이미지"][idx]}.png`);
                        });

                        /* 메뉴텍스트 클릭시 메인이미지 변경 */
                        mainImg.src = decodeURIComponent(`./00.data/02.imgData/SELECTO_COFFEE/${main_menu[x]["메인이미지"]}.png`);

                        /* 메뉴텍스트 클릭시 토핑이미지 변경 */
                        topingImg.forEach((ele,idx) =>{
                            ele.src = decodeURIComponent(`./00.data/02.imgData/SELECTO_COFFEE/${main_menu[x]["토핑이미지"][idx]}.png`);
                            // console.log(ele);

                            /* 'BEVERAGE' 갯수 외 이미지 숨기기/그외 보이기 */
                            if(eachMenu.innerText==="BEVERAGE") {
                                topingImg[3].style.opacity = "0";
                            } else {
                                topingImg[3].style.opacity = "1";
                            }
                            /* 'COFFEE' 갯수 외 이미지 숨기기/그외 보이기 */
                            if(eachMenu.innerText==="COFFEE") {
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
                            if(eachMenu.innerText==="BEVERAGE") {
                                topingName[3].style.opacity = "0";
                            } else {
                                topingName[3].style.opacity = "1";
                            }
                            if (eachMenu.innerText==="COFFEE") {
                                topingName[3].style.display = "none";
                            } else {
                                topingName[3].style.display = "block";
                            }
                            /* 'COFFEE' 갯수 외 텍스트 숨기기/그외 보이기 */
                            if(eachMenu.innerText==="COFFEE") {
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
                if (eachMenu.innerText === "SIGNATURE") {
                    let isrc = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-signature-bg.jpg`);
                    commonFn(signature_bg, isrc);

                    bgssImg.forEach(function(val, idx) {
                       if(val.classList[1] != signature_bg.classList[1]) {
                        val.classList.remove(`on`);
                       } else {
                        val.classList.add(`on`);
                       }   
                    });
                /* 2) 클릭대상이 "BEVERAGE"인 경우 */
                } else if (eachMenu.innerText === "BEVERAGE") {
                    let isrc = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-beverage-bg.jpg`);
                    commonFn(beverage_bg, isrc);
                    bgssImg.forEach(function(val, idx) {
                        if(val.classList[1] != beverage_bg.classList[1]) {
                         val.classList.remove(`on`);
                        } else {
                         val.classList.add(`on`);
                        }   
                     });
                    /* 3) 클릭대상이 "COFFEE"인 경우 */
                } else if (eachMenu.innerText === "COFFEE") {
                    let isrc = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-coffee-bg.png`);
                    commonFn(coffee_bg, isrc);
                    bgssImg.forEach(function(val, idx) {
                        if(val.classList[1] != coffee_bg.classList[1]) {
                         val.classList.remove(`on`);
                        } else {
                         val.classList.add(`on`);
                        }   
                     });
                /* 4) 클릭대상이 "COOKIE"인 경우 */
                } else if (eachMenu.innerText === "COOKIE") {
                    let isrc = decodeURIComponent(`00.data/02.imgData/SELECTO_COFFEE/c-cookie-bg.png`);
                    commonFn(cookie_bg, isrc);
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
                
                
            }); // eachMenu click 이벤트()
    }
