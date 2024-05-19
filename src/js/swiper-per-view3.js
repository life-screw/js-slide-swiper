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

// Swiperの初期化（Gallery）------------------------
const swiperGallery = new Swiper(".js-swiper-slide", {
  // ●●必要なモジュールを読み込み(npmの時)
  modules: [Navigation, Pagination],
  // Swiperのオプションを設定===========
  slidesPerView: 1.15, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）。アクティブスライド以外のスライドを少し見せたい場合は、値を小数点にする。
  spaceBetween: 0, // スライド間の余白（px、%の場合は"20%"で囲む）
  centeredSlides: true, // アクティブなスライドを中央に配置する
  breakpoints: {
    769: {
      //769px以上
      slidesPerView: 3,
      spaceBetween: "5.6%", // スライド間の余白（px、%の場合は"20%"で囲む）
      centeredSlides: false, // アクティブなスライドを中央に配置する
    },
  },

  // 必要ならページャーを入れる
  pagination: {
    el: ".swiper-pagination--gallery",
  },

  // 必要ならナビゲーションボタンを入れる
  navigation: {
    nextEl: ".swiper-button-next--gallery",
    prevEl: ".swiper-button-prev--gallery",
  },
});
