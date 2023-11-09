 
    /* ********************************
	* 햄버거버튼 클릭시 사이드메뉴 보이기
    * 클로즈버튼 클릭시 사이드메뉴 숨기기
	******************************** */
    $('.mobile_menu').click(function(){
        $('#content_wrap').show()
        .css({
            filter: "blur(10px)", 
         });

        $('.sidebar_menu').show()
        .animate({
            right: 0
        });  
    });

    $('.close_btn').click(function(){
        $('.sidebar_menu').hide()
        .css({
            right:  '-' + 50 + '%',
        }); 
        
        $('#content_wrap')
        .css({
            filter: "blur(0)",
    }); 
});
