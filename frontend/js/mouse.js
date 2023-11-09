    
    /* ********************************
	* 마우스무브시 로고 이미지 따라오게
    * .cursor fixed 상태 -> e.clientX/Y
	******************************** */
    // 대상선정
    const mover = document.querySelector(".cursor");
    // console.log(mover);

    function mousemover(){
        /* 마우스 포인터 위치 알아내기 */
        // 1. x좌표 : event.pageX
        // 2. y좌표 : event.pageY
        // console.log("x:",event.pageX,"\ny:",event.pageY);
        // console.log("x:",event.clientX,"\ny:",event.clientY);

        // 무버에게 위치값 이동 셋팅하기
        mover.style.top = event.clientY+"px";
        mover.style.left = event.clientX+"px";
    }

    window.addEventListener("mousemove",mousemover);





