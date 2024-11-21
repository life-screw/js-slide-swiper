# [npm]Swiper のテンプレート集

npm を使用した Swiper スライド のテンプレート集です。
「HTML と CSS、JavaScript のコーディングで悩む時間を減らしたい」という思いから、実際に実装したものをテンプレート化しています。

以下の技術ブログで詳細を紹介しています。

<dl>
	<dt>▽ Webもがきブログ</dt>
	<dd>https://lifescrewdesign.com/blog/category/cord-stock/
</dl>

以下は、自分で行う時のコーディングルールになります。<br>このテンプレートも同じような構造にしているので、利用される際はご参考にしてください。---------------------

## コンパイルアプリ

- prepros7 を使用
- Webpack、Gulp の使用経験もありますが、使いやすさを優先して prepros を使用しています。
- 基本、JavaScript・CSS はミニファイ化しています。保守を誰がやるかに合わせてミニファイするかどうか決めています。

### prepros について

- ダウンロードと使用は無料で可能。（定期的に購入を促すポップアップが出てくるが無視して大丈夫です）
- PROJECT でこのフォルダを設定すると、prepros.config の設定を使用できます。
- ファイル設定など、ご不明点があればご連絡ください。

## 注意事項

### HTML について

- src/pug ファイルで静的コーディング後、PHP に移植しています。必ず Pug でコーディングする必要はありません。やりやすい方法でコーディングしてください。

### メディアクエリ

#### タブレット・パソコンのメディアクエリ

- @media print, screen and (min-width: 769px)

#### スマホのみのメディアクエリ

- @media only screen and (max-width: 768px)

## フォントの単位

- フォントサイズの単位は、スマホとタブレットでは基本 vw を使用します。パソコンでは rem か px を使用します。
- XD の px を rem に直すときは、px に 0.1 を乗算した値を rem に入れてください。
- （例：12px → 1.2rem）

## 全体のフォルダ構造

- dist（コンパイル後のファイル）
- src（コンパイル前のファイル）
  - src フォルダ内の js,scss は、dist フォルダの js,css 内のフォルダにそれぞれコンパイルするように設定しています。
- src 内の pug は、dist フォルダ内ではなく、html にコンパイルして第一階層に書き出しています。

### ファイル名のルール（CSS,JavaScript）

- common ファイル：ページ全体の設定。
- home ファイル：トップページ（PHP の設定で、トップのみに読み込ませます）
- 各ページ名のファイル：各ページに関するもの（functions.php で各ページごとに読み込ませます）
- 例外として、投稿一覧・詳細は同じファイルにまとめることもあります。

## 画像

### 画像のフォルダ構成

- dist > img の各ページ or パーツごとのフォルダに入れる
- 全ページに使う画像は common フォルダに入れる
- 他の画像は基本ページ名のフォルダに入れる

### 画像の命名ルール（ あくまで参考程度 ）

- 画像の命名の基本ルール、セクション名\_img 番号.png（例：fv_img01.png）
  　 PC とスマホで画像を分けるときは、セクション名\_img 番号\_pc.png、セクション名\_img 番号\_sp.png と拡張子の前に\_pc,\_sp をつける。
- 背景画像は、セクション名\_bg_img 番号.png（例：fv_bg_img01.png）
- アイコンは、icon*アイコン名.png。ボタンは、btn*ボタン名.png 　と分かりやすい名前をつける

### 画像の拡張子

- Webp は、後でプラグインで変換できるので、使用しないです。

## class

- 命名ルールは FLOCSS。
- 絶対厳守ではないですが、保守性を担保するためになるべく守るようにお願いします。
- 参考サイト：https://qiita.com/super-mana-chan/items/644c6827be954c8db2c0

## CSS について

- dartSass
- FLOCSS
- スマホファーストコーディング
- リキッドレイアウト

## SCSS 内のディレクトリ構造説明

<p>
├── Foundation<br>
│   ├── _base.scss（rootで設定する色・フォント,html,body,aなどサイトの根幹のタグのSCSS）<br>
│   ├── _index.scss<br>
│   └── _reset.scss（リセットCSS）<br>
├── Module（サイト構築全体でよく使うパーツのSCSSを入れている）<br>
│   ├── Component（使い回しできる部品。主にボタンやタイトル。）<br>
│   ├── Javascript（JavaScriptで付与したクラスにCSSを付けたい時に記述。）<br>
│   ├── Layout（全体の骨組みになる部分。ほとんどPage > Commonに記載）<br>
│   └── Utility（プロパティ単体で使用。スマホのみ、PCのみ出すためのCSSを記載。）<br>
├── Page（サイト固有のCSS）<br>
│   ├── Common （header,footerなど全体で使用）<br>
│   ├── CommonPage （下層ページ全体で使用）<br>
│   └── 各ページスラッグ（各ページのみで使用）<br>
├── Setting（各SCSSに読み込ませるSCSSを入れている）<br>
│   ├── _animation.scss（CSSアニメーション）<br>
│   ├── _index.scss<br>
│   ├── _mixin.scss（mixinパーツ）<br>
│   └── _variable.scss（function,breakpoint,英文などの特殊フォントの関数）
</p>

##　 コンポーネントと関数の使い方について

### ブレイクポイント、英語フォント

scss > Setting > \_variable に記載

### フォント一括設定の@mixin f_around について

scss > Setting > \_mixin に記載

### JavaScript

- src/js/parts にモジュール化（機能ごとにファイルを分けた）JavaScript ファイルを入れています。これを common.js、home.js などのそれぞれのファイルに export で読み込んでコンパイルしています。
- jQuery は必要なページにのみ functions.php で読み込むページを設定します。
- head タグ内に JavaScript を読み込んでください。読み込みを遅らせたいときは「defer」を設定してください。
