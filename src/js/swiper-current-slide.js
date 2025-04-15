//Swiperを読み込む（npmでインストール）================
// ↓【API参考】これを参考にしながら、importするcssやコードを選定する。
//　https://swiperjs.com/swiper-api
//-------
// Swiper coreをインポート
import Swiper from "swiper";
// ●●必要なモジュールをインポート
import { Autoplay, Virtual } from "swiper/modules";

// Swiperの基本スタイル
import "swiper/css";
// ●●必要なモジュールのスタイル
import "swiper/css/autoplay";
import "swiper/css/virtual";

// Swiperの初期化（Works）------------------------
const swiperWorks = new Swiper(".js-works-slide", {
  // ●●必要なモジュールを読み込み(npmの時)
  modules: [Autoplay, Virtual],

  //Parameter(no modules)----------------
  slidesPerView: 2.2, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）。アクティブスライド以外のスライドを少し見せたい場合は、値を小数点にする。
  spaceBetween: "20%", // スライド間の余白（px、%の場合は"20%"で囲む）
  centeredSlides: true, // アクティブなスライドを中央に配置する

  loop: true, // 無限ループさせる
  loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

  allowTouchMove: false, // マウスドラッグによるスライド移動を無効にする

  //Autoplay--------------
  autoplay: {
    // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    pauseOnMouseEnter: false, // マウスがスライダー上にある時、自動再生を止めない
    // waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },

  breakpoints: {
    769: {
      //769px以上
      slidesPerView: 4,
      spaceBetween: "4%", // スライド間の余白（px、%の場合は"20%"で囲む）
    },
    1100: {
      //900px以上
      slidesPerView: 5,
      spaceBetween: "4%", // スライド間の余白（px、%の場合は"20%"で囲む）
    },
    1700: {
      //900px以上
      slidesPerView: 6,
      spaceBetween: "4%", // スライド間の余白（px、%の場合は"20%"で囲む）
    },
  },
});
