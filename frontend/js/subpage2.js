
let sigImg = document.querySelector(".signature_menu_img"); 
const sigTxt = document.querySelectorAll(".signature_menu_txt"); 
const createSgImg = document.createElement("img");
const menuListAll = document.querySelectorAll(".menu_list_top_info > a");

for(let x of menuListAll) {
    x.addEventListener("click",(e) => {
        e.preventDefault();

        menuListAll.forEach((ele)=>{
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

    if(subpage_menu[btxt]["img"].length !== 1) {
        for(let i=0; i<subpage_menu[btxt]["img"].length; i++) {
            hcode += `
            <li class="Signature_menu_item">
                <a href="#">
                    <figure>
                        <img src="00.data/02.imgData/SELECTO_COFFEE/${subpage_menu[btxt][img][i]}.png" alt="${subpage_menu[btxt][img][i]}이미지">
                    <figcaption>
                        <div class="signature_menu_txt">
                        ${subpage_menu[btxt][menu][i]}
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
                        <img src="00.data/02.imgData/SELECTO_COFFEE/${subpage_menu[btxt][img]}.png" alt="${subpage_menu[btxt]}이미지">
                    <figcaption>
                        <div class="signature_menu_txt">
                        ${subpage_menu[btxt][menu]}
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
