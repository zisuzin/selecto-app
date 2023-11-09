
let sigImg = document.querySelector(".signature_menu_img"); 
const sigTxt = document.querySelectorAll(".signature_menu_txt"); 
const createSgImg = document.createElement("img");
const menuListAll = document.querySelectorAll(".menu_list_top_info > a");
// const newMenu = document.querySelector(".Signature_menu_item > a > figure");

for(let x of menuListAll) {
    x.addEventListener("click",(e) => {
        e.preventDefault();

        menuListAll.forEach((ele)=>{
            // console.log(ele)
            ele.classList.remove("click_active");
        }); // forEach 

        x.classList.add("click_active");
        chgImg(e)
    }); // click event 
} // for of 

menuListAll[0].click();


function chgImg(e) {

    const btxt = e.currentTarget.innerText;

    let hcode = "<ul>";

    if(subpage_menu[btxt]["이미지"].length !== 1) {
        for(let i=0; i<subpage_menu[btxt]["이미지"].length; i++) {
            hcode += `
            <li class="Signature_menu_item">
                <a href="#">
                    <figure>
                        <img src="00.data/02.imgData/SELECTO_COFFEE/${subpage_menu[btxt]["이미지"][i]}.png" alt="${subpage_menu[btxt]["이미지"][i]}이미지">
                    <figcaption>
                        <div class="signature_menu_txt">
                        ${subpage_menu[btxt]["메뉴"][i]}
                        </div>
                    </figcaption>
                    </figure>
                </a>
            </li>
            `; 
        }
    }
        else {
            hcode += `
            <li class="Signature_menu_item">
                <a href="#">
                    <figure>
                        <img src="00.data/02.imgData/SELECTO_COFFEE/${subpage_menu[btxt]["이미지"]}.png" alt="${subpage_menu[btxt]}이미지">
                    <figcaption>
                        <div class="signature_menu_txt">
                        ${subpage_menu[btxt]["메뉴"]}
                        </div>
                    </figcaption>
                    </figure>
                </a>
            </li>
            `; 
            
        }
        hcode += "</ul>";
        // console.log(subpage_menu[btxt]["신상"])
        // if(subpage_menu[btxt]["신상"] != "false") {
        //     const newDiv = document.createElement("div");
        //     sigImg.appendChild(newDiv);
        //     newDiv.className = 'new_menu';
        // }  else {
        //     return;
        // }
        // let newTit = "";
        // if(subpage_menu[btxt]["신상"] !== undefined || subpage_menu[btxt]["신상"] !== "") {
        //     newMenu.innerText = "new";
        // } 
        // console.log(subpage_menu[btxt]["신상"] !== undefined)
    sigImg.innerHTML = hcode; 

} // chgImg 함수() 
