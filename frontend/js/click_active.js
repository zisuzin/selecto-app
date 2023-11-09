const historyAll = document.querySelectorAll(".history_top_info > a");

for(let x of historyAll) {
    x.addEventListener("click",(e) => {
        e.preventDefault();

        historyAll.forEach((ele)=>{
            // console.log(ele)
            ele.classList.remove("click_active");
        }); // forEach 

        x.classList.add("click_active");

    }); // click event 
} // for of 

historyAll[0].click();