
//モーダル、スライドショー
window.addEventListener("DOMContentLoaded", () => {
    // モーダルを取得
    const modal = document.getElementById("originalModal");
    // モーダルを表示するボタンを全て取得
    const openModalBtns = document.querySelectorAll(".js-open-originalModal");
    // モーダルを閉じるボタンを全て取得
    const closeModalBtns = document.querySelectorAll(".js-close-originalModal");

    // Swiperの設定
    const swiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 30,
    });
  
    // モーダルを表示するボタンをクリックしたとき
    openModalBtns.forEach((openModalBtn) => {
      openModalBtn.addEventListener("click", () => {
        // data-slide-indexに設定したスライド番号を取得
        const modalIndex = openModalBtn.dataset.slideIndex;
        swiper.slideTo(modalIndex);
        modal.classList.add("is-active");
        $("body").addClass("no_scroll"); // 背景固定させるクラス削除
      });
    });

    // モーダルを閉じるボタンをクリックしたとき
    closeModalBtns.forEach((closeModalBtn) => {
      closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("is-active");
        $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
      });
    });
  });