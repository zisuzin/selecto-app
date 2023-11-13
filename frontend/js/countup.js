/* 년도 증감JS - countup.js */



// 대상선정 함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

const history_items = qsa(".company_history_cycle");
const history_year = qs(".company_history_year");
const lnbtxt = qsa(".history_top_info > a");
const windowHeight = window.innerHeight;

window.addEventListener("scroll",()=>{
    history_items.forEach((ele,idx)=>{

    let tgOffTop = ele.offsetTop;
    
    windowH = window.scrollY + window.innerHeight / 2;
        if(windowH > tgOffTop + window.innerHeight / 2 - 100) {
            history_year.innerText = `${2023 - idx}`;
        }
    });// foreach
});// scroll


for(let x of lnbtxt) {
    x.addEventListener("click",(e) => {
        e.preventDefault();

        lnbtxt.forEach((ele)=>{
            ele.classList.remove("click_active");
        }); // forEach 

        x.classList.add("click_active");

    }); // click event 
} // for of 

lnbtxt[0].click();
