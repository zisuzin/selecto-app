
/* *******************************************
* 1) .menu 호버시 header 높이값 변경(100px->400px)
* 2) 스크롤 up & down 
******************************************* */

/* 1) .menu 호버시 header 높이값 변경(100px->400px) */
const header = document.querySelector("#top"),
    mainManuListA = document.querySelectorAll(".menu>ul>li"),
    tgsTxt = document.querySelectorAll(".sub_menu>ol a"),
    tgmTxt = document.querySelectorAll(".menu>ul>li>a"),
    btn = document.querySelector(".link > button"),
    subMenu = document.querySelectorAll(".sub_menu"),
    scrollInfoBar = document.querySelector(".visual_vertical_bar"),

    horizontal_evt = document.querySelector("#horizontal_circle"),
    vertical_evt = document.querySelector("#vertical_circle");
    // console.log(horizontal_evt)
    

    mainManuListA.forEach((ele, idx) => {
    ele.addEventListener("mouseover", (e) => {
        subMenu.forEach((ele) => {
            (ele.style.height = "300px"), (ele.style.transition = ".3s ease-in-out");
        });

        header.style.height = "400px";
        header.style.transition = ".3s ease-in-out";
        header.style.borderBottom = "2px solid #ff4713";

        /* .menu li호버시 버튼색상 변경  */
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#ff4713";
        btn.style.border = "1px solid #ff4713";
        
    }); // .menu li mouseover 이벤트()
}); // mainManuListA forEach()

header.addEventListener("mouseleave", () => {
    subMenu.forEach((ele) => (ele.style.height = "0"));

    header.style.height = "100px";
    header.style.border = "none";

    btn.style.color = "#fff";
    btn.style.backgroundColor = "#ff4713";
}); // header mouseleave 이벤트()


/* 2) 스크롤 up & down  */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#top').removeClass('visible').addClass('invisible');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#top').removeClass('invisible').addClass('visible');
        }
    }
    
    lastScrollTop = st;
}

// gnb메뉴 호버시 슬라이딩 애니메이션
$('#horizontal_circle').on('mouseover',function(){
    $(this).addClass('is_active');
    // $(this).addClass('is_active');

});