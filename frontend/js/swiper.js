
/* ************************
	* SNS 이미지 드래그 슬라이드
	* swiper.js 필요
	************************ */
  var swiper = new Swiper(".selecto_insta_photo", {
    slidesPerView: 3,
    spaceBetween: 30,
    // watchSlidesVisibility: true,
    scrollbar: {
      el: " .swiper-scrollbar",
      hide: false,
      draggable: true,
      dragSize: 30,
    },
		navigation: {
        prevEl: ".arrow-prev",
        nextEl: ".arrow-next",
      },
    /* 미디어쿼리 */
		breakpoints: {
        // 620: {
        //     slidesPerView: 3,
        //     spaceBetween: 5,
        //   },
        1230: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".swiper-container2", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});