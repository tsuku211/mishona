var voice_swiper = new Swiper('.voice_swiper', {
        // autoplay: {
        //     delay: 3000,
        // },
        loop: true,
      
        //ページネーション
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        centerSlides: true,
        slidesPerView: 1.1,
        spaceBetween: 25,

});


var step_swiper = new Swiper('.step_swiper', {
    // autoplay: {
    //     delay: 3000,
    // },
    loop: true,
  
    //ページネーション
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centerSlides: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
      },

});