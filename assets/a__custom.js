jQuery(function(){

    let maxSlideNum = 0,
    thisSlideIndex = 0;
  
      var mySwiper = new Swiper ('.swiper', {
          effect: "slide",
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 7000,
            disableOnInteraction: false,
            waitForTransition: false,
          },  
          
          // 前後の矢印
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
  
            // ページネーション
          pagination: {
              el: ".swiper-pagination",
              clickable: true, // クリック有効化
          },
          on: {
        init: function () {
        // Swiper起動時に実行される
        let slideNum = []; // スライドの最大枚数を取得するための配列
        /*
          下記の繰り返しで swiper-slide の data属性に付与されている swiper-slide-index を取得して
          配列に格納していく、 Math.maxで配列の中に格納されている数値の中で一番数が大きいものを maxSlideNum に入れる
        */
        let slideLength = document.querySelectorAll('.swiper .swiper-slide').length;
        // loop が true かチェックする
        // loop が true の場合、loopedSlidesが1になるのでこの分岐で確認が出来る false の場合は undefined が返ってくる
        if (this.loopedSlides) {
          for (let i = 0; i < slideLength; i++) {
            slideNum.push(document.querySelector('.swiper').getElementsByClassName('swiper-slide')[i].dataset.swiperSlideIndex);
            maxSlideNum = Math.max(...slideNum) + 1;
          }
        } else {
          maxSlideNum = slideLength;
        }
        // スライドの最大枚数を出力
        document.querySelector('.js-Maxnum').innerHTML = maxSlideNum;
        // 最初の数値を出力（スライドの初期位置が違う場合は、ここを変更する）
        document.querySelector('.js-currentNum').innerHTML = 1;
      },
      transitionStart: function () {
        /* 
         * スライドが切り替わった時に実行される
         * インデックスは 0 スタートなので 1 を足した数値にする
         */
        thisSlideIndex = [].slice.call(document.querySelector('.swiper-pagination').querySelectorAll('.swiper-pagination-bullet')).indexOf(document.querySelector('.swiper-pagination-bullet-active')) + 1;
        document.querySelector('.js-currentNum').innerHTML = thisSlideIndex;
      },
    }
      });
  });


function fadeAnime(){

  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeInというクラス名を追記
    }
  });

}

// 画面をスクロールをしたら動かしたい場合
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});
