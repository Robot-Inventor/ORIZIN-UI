# ORIZIN UI

日本語 | [English](README_en.md)

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IlJvYm90LUludmVudG9yIiwicmVwbzEiOiJPUklaSU4tVUkiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoxOTUwNCwiaWF0IjoxNjAxNDgwMDM3fQ.6SSplvJLANbclZT-dLtCYyz-tYTmFlI5SFwiWuC1Ykc)](https://www.deepcode.ai/app/gh/Robot-Inventor/ORIZIN-UI/_/dashboard?utm_content=gh%2FRobot-Inventor%2FORIZIN-UI)

ORIZINシリーズの開発過程でできたUI関連のライブラリーです。Google Chrome 85で動作確認しています。古いGoogle Chromeのバージョンや他のWEBブラウザーでは正常に動作しない可能性があります。Google Chrome以外のWEBブラウザーにも対応する必要がある場合は必ず事前に動作確認を行ってください。

## 使い方

ORIZIN UIを使った簡単な例です。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ORIZIN UI Sample</title>
</head>
<body>
    <input type="checkbox" class="toggle">    <!-- トグルスイッチ -->
    <input type="text" class="underline_textbox">    <!-- アンダーライン付きテキストボックス -->
</body>
<script src="orizin_ui.js"></script>
<script>
    const ui = new ORIZIN_UI();
    ui.all();
</script>
</html>
```

``ui.all();``の部分は以下のように個別に書いても全く同じ結果になります。

```javascript
ui.toggle_switch();
ui.underline_textbox();
```

個別に必要なもののみ実行することで処理速度を向上させたり，クラス名の干渉を防いだりすることが出来ます。

個別に実行する際は以下のようにして引数を渡すことが出来ます。以下は全てデフォルト値です。

```javascript
const toggle_arg = {
    toggle_switch_target: "input[type=checkbox].toggle", // ターゲットをCSSセレクターで指定
    toggle_width: "2.5rem", // トグルスイッチの幅
    toggle_height: "1rem", // トグルスイッチの高さ
    toggle_border_thickness: "0.05rem", // トグルスイッチの輪郭線の太さ
    toggle_border_color: "gray", // トグルスイッチの輪郭線の色
    toggle_disabled_color: "white", // トグルスイッチがOFFの際の背景色
    toggle_enabled_color: "#adff99", // トグルスイッチがONの際の背景色
    toggle_handle_color: "white", // トグルスイッチのハンドルの色
    toggle_handle_radius: "calc(var(--toggle_height) + 0.4rem)" // トグルスイッチのハンドルの直径
};
ui.toggle_switch(toggle_arg);

const textbox_arg = {
    underline_textbox_target :"input[type=text].underline_textbox", // ターゲットをCSSセレクターで指定
    underline_color_normal: "rgba(0, 0, 0, 0.7)", // 通常時のアンダーラインの色
    underline_color_focused: "#ff6a00", // テキスト入力中のアンダーラインの色
    underline_thickness: "0.15rem", // アンダーラインの太さ
    underline_textbox_width: "50%" // テキストボックスの幅
};
ui.underline_textbox(textbox_arg);
```

all()関数を使用する場合でも以下のようにして引数を渡すことが出来ます。引数のオブジェクトのプロパティー値は各関数にそのまま渡されます。指定できるプロパティーやデフォルト値はtoggle_switch()関数とunderline_textbox()関数を個別に実行する際と同じです。

```javascript
const args = {
    toggle_switch_arg: {
        // toggle_switch()関数に渡す引数を記述
        toggle_switch_target: "input[type=checkbox].toggle", // ターゲットをCSSセレクターで指定
        toggle_width: "2.5rem", // トグルスイッチの幅
        toggle_height: "1rem", // トグルスイッチの高さ
        toggle_border_thickness: "0.05rem", // トグルスイッチの輪郭線の太さ
        toggle_border_color: "gray", // トグルスイッチの輪郭線の色
        toggle_disabled_color: "white", // トグルスイッチがOFFの際の背景色
        toggle_enabled_color: "#adff99", // トグルスイッチがONの際の背景色
        toggle_handle_color: "white", // トグルスイッチのハンドルの色
        toggle_handle_radius: "calc(var(--toggle_height) + 0.4rem)" // トグルスイッチのハンドルの直径
    },
    underline_textbox_arg: {
        // underline_textbox()関数に渡す引数を記述
        underline_textbox_target :"input[type=text].underline_textbox", // ターゲットをCSSセレクターで指定
        underline_color_normal: "rgba(0, 0, 0, 0.7)", // 通常時のアンダーラインの色
        underline_color_focused: "#ff6a00", // テキスト入力中のアンダーラインの色
        underline_thickness: "0.15rem", // アンダーラインの太さ
        underline_textbox_width: "50%" // テキストボックスの幅
    }
};
ui.all(args);
```

all()関数を使用する場合でも各関数を個別に実行する場合でもターゲットのCSSセレクターは自由に指定できますが，ターゲットはinput要素であり，かつtype属性が以下のようになっている必要があります。

|種類|type属性値|
|:--|:--|
|トグルスイッチ|``checkbox``|
|アンダーライン付きテキストボックス|``text``|

### 値の取得/設定の方法

値は，トグルスイッチは通常のチェックボックス，アンダーライン付きテキストボックスは通常のテキストボックスと同じ方法で取得したり設定したり出来ます。

## ORIZINシリーズとは

ORIZINシリーズは，Robot-Inventorが開発した様々なソフトウェアです。

↓一覧

|名称|概要|
|:--|:--|
|ORIZIN Agent HTML|Pythonで作られたオープンソースのAIアシスタント。キャッチコピーは「いつもあなたと共に。オープンな相棒」|
|ORIZIN Paon|ホラーゲームの「ぴえん」に触発されたWebGLを使用したオープンソースのホラーゲーム|

## OSSライセンス

本ソフトウェアでは，以下のOSSを使用しています。OSSの名前をクリックするとライセンスが表示されます。

<details>
    <summary>ORIZIN Agent HTML</summary>
MIT License

Copyright (c) 2019 - 2020 Robot-Inventor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</details>
