const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

const menuItems = {
    signature: qs(".signature"),
    beverage: qs(".beverage"),
    coffee: qs(".coffee"),
    cookie: qs(".cookie"),
};

const bgssImg = qsa(".side_bg");
const menu = qsa(".full_menu > span");

let prot = 0;

function debounce(callback, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback();
        }, delay);
    };
}

function changeImage(element, imagePath) {
    const bgItem = element.querySelector("img");
    const prev_img = 'signature'; // Replace this with your actual logic for prev_img

    switch (prev_img) {
        case 'signature':
            bgItem.src = imagePath;
            break;
        case 'beverage':
            bgItem.src = imagePath;
            break;
        case 'coffee':
            bgItem.src = imagePath;
            break;
        case 'cookie':
            bgItem.src = imagePath;
            break;
    }

    if (bgItem) {
        element.style.zIndex = "0";
        setTimeout(() => {
            bgItem.remove();
        }, 1000);
    }

    element.style.transition = "none";
    element.style.left = "100%";
    element.innerHTML = `<img src="${imagePath}" alt="image">`;

    setTimeout(() => {
        element.style.transition = "left 1s ease-in";
        element.style.left = "0";
        element.style.zIndex = "1";
    }, 1);
}

function updateMenuContent(menuData) {
    menuTit.innerText = menuData.cat;
    menuText.innerHTML = menuData.msg;

    menuImg.forEach((ele, idx) => {
        ele.src = `./img/${menuData['sImg'][idx]}.png`;
    });

    mainImg.src = `./img/${menuData['mImg']}.png`;

    topingImg.forEach((ele, idx) => {
        ele.src = `./img/${menuData['tpImg'][idx]}.png`;
    });

    topingName.forEach((ele, idx) => {
        ele.innerText = `${menuData['tgName'][idx]}`;
    });
}

function handleMenuItemClick(menuType) {
    return function () {
        if (prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0;
        }, 1000);

        let chkSts = event.currentTarget.classList.contains("txt_bold");
        if (chkSts) return;

        menu.forEach((ele) => {
            ele.classList.remove("txt_bold");
        });

        event.currentTarget.classList.add("txt_bold");

        for (let x in main_menu) {
            if (event.currentTarget.innerText === main_menu[x].cat) {
                updateMenuContent(main_menu[x]);

                switch (menuType) {
                    case 'signature':
                        changeImage(menuItems.signature, decodeURIComponent(`./img/c-signature-bg.jpg`));
                        break;
                    case 'beverage':
                        changeImage(menuItems.beverage, decodeURIComponent(`./img/c-beverage-bg.jpg`));
                        break;
                    case 'coffee':
                        changeImage(menuItems.coffee, decodeURIComponent(`./img/c-coffee-bg.png`));
                        break;
                    case 'cookie':
                        changeImage(menuItems.cookie, decodeURIComponent(`./img/c-cookie-bg.png`));
                        break;
                    default:
                        return;
                }

                bgssImg.forEach((val) => {
                    if (val.classList[1] !== menuItems[menuType].classList[1]) {
                        val.classList.remove(`on`);
                    } else {
                        val.classList.add(`on`);
                    }
                });
            }
        }
    };
}

for (let type in menuItems) {
    menuItems[type].addEventListener("click", debounce(handleMenuItemClick(type), 1000));
}
