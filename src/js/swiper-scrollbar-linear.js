//Swiperを読み込む（npmでインストール）================
// ↓【API参考】これを参考にしながら、importするcssやコードを選定する。
//　https://swiperjs.com/swiper-api
//-------
// Swiper coreをインポート
import Swiper from "swiper";
// ●●必要なモジュールをインポート
import { Autoplay, Scrollbar } from "swiper/modules";

// Swiperの基本スタイル
import "swiper/css";
// ●●必要なモジュールのスタイル
import "swiper/css/autoplay";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Swiperの初期化（Gallery）------------------------
const swiperGallery = new Swiper(".js-swiper--gallery", {
  // ●●必要なモジュールを読み込み(npmの時)
  modules: [Autoplay, Scrollbar],
  // Swiperのオプションを設定===========
  slidesPerView: 1.4, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）。アクティブスライド以外のスライドを少し見せたい場合は、値を小数点にする。
  spaceBetween: 0, // スライド間の余白（px、%の場合は"20%"で囲む）
  centeredSlides: true, // アクティブなスライドを中央に配置する
  loop: true, // スライドをループさせるかどうか
  speed: 6900, // スライドのスピード（ms）
  breakpoints: {
    769: {
      //769px以上
      slidesPerView: 4,
      spaceBetween: "4.6%", // スライド間の余白（px、%の場合は"20%"で囲む）
      centeredSlides: false, // アクティブなスライドを中央に配置する
    },
    1600: {
      //1600px以上
      slidesPerView: 5,
      spaceBetween: "3%", // スライド間の余白（px、%の場合は"20%"で囲む）
      centeredSlides: false, // アクティブなスライドを中央に配置する
    },
  },

  // 自動再生
  autoplay: {
    delay: 0, // 自動再生の間隔（ms）
    disableOnInteraction: false, // ユーザーの操作後も自動再生を継続する
  },

  // 必要ならスクロールバーを入れる
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false, //スライドを動かす時だけ表示させたい時、trueにする
  },
});
