
/* ***************************************
	* 카운트박스 영역 진입시 자동 카운트
	* .charity_count 오프셋탑값+세자리수 콤마찍기
	*************************************** */
  var oftop = $(".charity_count").offset().top - 100;
  // 화면절반
  let winH = $(window).height()/2;
  // console.log(oftop,"/",winH);

  let showSts = 1;
  

$(window).scroll(function(){
  let scTop = $(this).scrollTop();
  // console.log(scTop);

  if(scTop > oftop-winH && showSts){
    showSts = 0; // 한번만 실행
    counting();
  }
  
});

function counting(){
  $('.charity_count').each(function() { 
    var $this = $(this),
        countTo = $this.attr('data-count');
        // console.log(countTo); // 296454
        
         
    $({ countNum: $this.text()}).animate({
      countNum: countTo 
    },
    {
      duration: 1000, 
      easing:'linear',
      step: function() {
        $this.text(numberWithCommas(Math.floor(this.countNum)));
      },
      complete: function() { 
        $this.text(numberWithCommas(this.countNum));
      }
    });  
  });
  
}

//정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


