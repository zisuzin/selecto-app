/* count영역 진입시 자동 카운트JS - number.js */

  const oftop = $(".charity_count").offset().top - 100;
  let winH = $(window).height()/2;
  let showSts = 1;

$(window).scroll(function(){
  let scTop = $(this).scrollTop();

  if(scTop > oftop-winH && showSts){
    showSts = 0;
    counting();
  }
  
});

function counting(){
  $('.charity_count').each(function() { 
    const $this = $(this),
        countTo = $this.attr('data-count');
         
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

// 정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


