//Swiperを読み込む（npmでインストール）================
// ↓【API参考】これを参考にしながら、importするcssやコードを選定する。
//　https://swiperjs.com/swiper-api
//-------
// Swiper coreをインポート
import Swiper from "swiper";
// ●●必要なモジュールをインポート
import { Navigation, Pagination } from "swiper/modules";

// Swiperの基本スタイル
import "swiper/css";
// ●●必要なモジュールのスタイル
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiperの初期化（Member）------------------------
const swiperMember = new Swiper(".js-swiper-slide-member", {
  // ●●必要なモジュールを読み込み(npmの時)
  modules: [Navigation, Pagination],
  // Swiperのオプションを設定===========
  autoHeight: true, //高さを自動調整
  spaceBetween: "39.5vw", //padding-left（or padding-right）の値*4を入れる
  breakpoints: {
    769: {
      //769px以上
      autoHeight: false, //高さを自動調整しない
      direction: "vertical", // スライドを縦方向にする
      slidesPerView: 1,
      spaceBetween: 220,
    },
  },

  // 必要ならページャーを入れる
  //固有のクラスを設定すると、swiperスライドを複数設置しても、それぞれのページャーが動作する
  pagination: {
    el: ".swiper-pagination--member",
  },

  // 必要ならナビゲーションボタンを入れる
  //固有のクラスを設定すると、swiperスライドを複数設置しても、それぞれのページャーが動作する
  navigation: {
    nextEl: ".swiper-button-next--member",
    prevEl: ".swiper-button-prev--member",
  },
});
