    /* 마우스무브시 logo이미지 따라옴JS - mouse.js */

    // 대상선정
    const mover = document.querySelector(".cursor");

    function mousemover(){
        /* 마우스 포인터 위치 알아내기 */
        // 1. x좌표 : event.pageX
        // 2. y좌표 : event.pageY

        // 무버에게 위치값 이동 셋팅하기
        mover.style.top = event.clientY+"px";
        mover.style.left = event.clientX+"px";
    }

    window.addEventListener("mousemove",mousemover);





