!function(){
  var view = document.querySelector('#slide')
  var controller = {
    view:null,
    swiper:null,
    swiperOptions:{
      pagination: {
        el: '.swiper-pagination',clickable: true,
        renderBullet: function (index, className) {return '<span class="' + className + '">' + (index + 1) + '</span>';},
      },
      navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
    },
    init: function(){
      this.swiper = new Swiper('.swiper-container', this.swiperOptions);
    }
  }
  controller.init(view)
}.call()