
    /* **********************************************
	* .화살표버튼 클릭시(itemShow) 아코디언 메뉴 보이기
    * slideToggle 사용 
	********************************************** */
    // 이벤트 대상
    const itemShow = $(".more_menu_down_arrow");
    const hiddenMenu = $(".more_menu_hidden_list");

    $(".more_menu_hidden_list").hide();

    itemShow.on("click",function(){
        // console.log(this);
        $(this).toggleClass("clicked");

        $(this).parent().next().slideToggle(300)
        .siblings(".more_menu_hidden_list").slideUp(300)
        .prev().find(".more_menu_down_arrow").removeClass("clicked");
	});
