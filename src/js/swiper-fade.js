//Swiperを読み込む（npmでインストール）================
// ↓【API参考】これを参考にしながら、importするcssやコードを選定する。
//　https://swiperjs.com/swiper-api
//-------
// Swiper coreをインポート
import Swiper from "swiper";
// ●●必要なモジュールをインポート
import { Autoplay, EffectFade } from "swiper/modules";

// Swiperの基本スタイル
import "swiper/css";
// ●●必要なモジュールのスタイル
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// Swiperの初期化（Gallery）------------------------
const swiperGallery = new Swiper(".js-swiper--gallery", {
  // ●●必要なモジュールを読み込み(npmの時)
  modules: [Autoplay, EffectFade],
  // Swiperのオプションを設定===============
  //Parameter(no modules)----------------
  slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  spaceBetween: 0, // スライド間の余白（px、%の場合は"20%"で囲む）
  centeredSlides: true, // アクティブなスライドを中央に配置する

  loop: true, // 無限ループさせる
  loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

  allowTouchMove: false, // マウスドラッグによるスライド移動を無効にする
  //Navigation--------------
  speed: 500, // スライドアニメーションのスピード（ミリ秒）

  // Effect settings
  effect: "fade", // エフェクトの種類を 'fade' に設定
  fadeEffect: {
    crossFade: true, // クロスフェード効果を有効（2つの要素の間で徐々にフェードインとフェードアウトを行うアニメーション効果）
  },

  //Autoplay--------------
  autoplay: {
    // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    pauseOnMouseEnter: false, // マウスがスライダー上にある時、自動再生を止めない
    // waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },

  //   on: {
  //     slideChangeTransitionStart: function () {
  //       // すべてのスライドから 'active-slide' クラスを削除
  //       this.slides.removeClass("active-slide");
  //       // 新しくアクティブになるスライドに 'active-slide' クラスを追加
  //       this.slides.eq(this.activeIndex).addClass("active-slide");
  //     },
  //   },
});
