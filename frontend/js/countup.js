
/* ****************************************
* 화면스크롤시 work_list별로 년도 +1씩 증가
**************************************** */

const history_items = document.querySelectorAll(".company_history_cycle");
const windowHeight = window.innerHeight;
const history_year = document.querySelector(".company_history_year");

window.addEventListener("scroll",()=>{

    history_items.forEach((ele,idx)=>{

    let tgOffTop = ele.offsetTop;
    
    windowH = window.scrollY + window.innerHeight / 2;
    // console.log(tgOffTop,window.scrollY + window.innerHeight / 2);
    
        if(windowH > tgOffTop + window.innerHeight / 2 - 100) {
            history_year.innerText = `${2023 - idx}`;
        }
    });// foreach
});// scroll
