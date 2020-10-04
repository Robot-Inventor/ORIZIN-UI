# ORIZIN UI

日本語 | [English](README_en.md)

![Broken Link Check](https://github.com/Robot-Inventor/ORIZIN-UI/workflows/Broken%20Link%20Check/badge.svg) ![CodeQL](https://github.com/Robot-Inventor/ORIZIN-UI/workflows/CodeQL/badge.svg) [![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IlJvYm90LUludmVudG9yIiwicmVwbzEiOiJPUklaSU4tVUkiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoxOTUwNCwiaWF0IjoxNjAxNDgwMDM3fQ.6SSplvJLANbclZT-dLtCYyz-tYTmFlI5SFwiWuC1Ykc)](https://www.deepcode.ai/app/gh/Robot-Inventor/ORIZIN-UI/_/dashboard?utm_content=gh%2FRobot-Inventor%2FORIZIN-UI)

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
    <toggle-switch></toggle-switch>    <!-- トグルスイッチ -->
    <underlined-textbox></underlined-textbox>    <!-- アンダーライン付きテキストボックス -->
</body>
<script src="orizin_ui.min.js"></script>
</html>
```

### CSSの適用方法

``::part()``を使用してスタイルを適用することが出来ます。

#### トグルスイッチの場合

トグルスイッチの場合は以下のようにしてスタイルを適用してください。

```css
toggle-switch::part(foundation) {
    /* 通常時のトグルスイッチの土台部分のスタイル */
}

toggle-switch[checked]::part(foundation) {
    /* onのときのトグルスイッチの土台部分のスタイル */
}

toggle-switch::part(handle) {
    /* 通常時のトグルスイッチのハンドル部分のスタイル */
}

toggle-switch[checked]::part(handle) {
    /* onのときのトグルスイッチのハンドル部分のスタイル */
}
```

注意点として，``toggle-switch``そのものに``width``や``height``を指定してもトグルスイッチの大きさは変わりません。大きさを変更したい場合は基本的には上記のCSSの書き方でパーツごとに行うことになりますが，縦と横の比率を変えないのであれば``transform``で十分かもしれません。例えば2倍の大きさにする場合は以下のようになります。

```css
toggle-switch {
    transform: scale(2);
}
```

#### アンダーライン付きテキストボックスの場合

アンダーライン付きテキストボックスの場合は以下のようにしてスタイルを適用してください。

```css
underlined-textbox::part(textbox) {
    /* 通常時のテキスト入力部分のスタイル */
}

underlined-textbox::part(textbox):focus {
    /* テキスト入力中のテキスト入力部分のスタイル */
}

underlined-textbox::part(normal_underline) {
    /* 通常時のアンダーラインのスタイル */
}

underlined-textbox::part(focused_underline) {
    /* テキスト入力中のアンダーラインのスタイル */
}
```

### 属性

トグルスイッチは内部的には通常のinput要素のチェックボックス，アンダーライン付きテキストボックスは内部的には通常のinput要素のテキストボックスを利用しています。トグルスイッチやアンダーライン付きテキストボックスに与えられた属性は内部で使用しているinput要素にそのまま渡されます。トグルスイッチとアンダーライン付きテキストボックスが対応している属性は以下のとおりです。

#### トグルスイッチが対応している属性

- checked

#### アンダーライン付きテキストボックスが対応している属性

- value
- autocomplete
- list
- maxlength
- minlength
- pattern
- placeholder
- readonly
- required
- size

これらの属性はJavaScriptの``getAttribute()``や``setAttribute()``で取得/設定できます。また，JavaScriptプロパティーを使用して取得/設定することも出来ます。

### イベント

changeイベントとinputイベントに対応しています。イベントの発火条件はトグルスイッチはinput要素のチェックボックス，アンダーライン付きテキストボックスはinput要素のテキストボックスと同じです。これは，内部で使用しているinput要素のイベントをそのまま伝えているためです。

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
