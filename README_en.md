# ORIZIN UI

[日本語](README.md) | English

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IlJvYm90LUludmVudG9yIiwicmVwbzEiOiJPUklaSU4tVUkiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoxOTUwNCwiaWF0IjoxNjAxNDgwMDM3fQ.6SSplvJLANbclZT-dLtCYyz-tYTmFlI5SFwiWuC1Ykc)](https://www.deepcode.ai/app/gh/Robot-Inventor/ORIZIN-UI/_/dashboard?utm_content=gh%2FRobot-Inventor%2FORIZIN-UI)

This document has been translated into English using machine translation. Please let me know if there are any errors.

----

This is a library of UI-related that was created during the development of the ORIZIN series. This has been tested on Google Chrome 85. There is a possibility that this library will not work on older versions of Google Chrome or other web browsers. If you need to support web browsers other than Google Chrome, please be sure to check the operation beforehand.

## Usage

Here's a simple example using the ORIZIN UI.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ORIZIN UI Sample</title>
</head>
<body>
    <input type="checkbox" class="toggle">    <!-- toggle switch -->
    <input type="text" class="underline_textbox">    <!-- textbox with underline -->
</body>
<script src="orizin_ui.js"></script>
<script>
    const ui = new ORIZIN_UI();
    ui.all();
</script>
</html>
```

The ``ui.all();`` part can be written separately as follows with exactly the same result.

```javascript
ui.toggle_switch();
ui.underline_textbox();
```

You can improve processing speed and prevent class name interference by executing only what you need individually.

To run them individually, you can pass arguments as follows. The following are the default values.

```javascript
const toggle_arg = {
    toggle_switch_target: "input[type=checkbox].toggle", // specify the target with the CSS selector
    toggle_width: "2.5rem", // width of the toggle switch
    toggle_height: "1rem", // height of the toggle switch
    toggle_border_thickness: "0.05rem", // thickness of the toggle switch outline
    toggle_border_color: "gray", // color of the toggle switch outline
    toggle_disabled_color: "white", // background color when the toggle switch is off
    toggle_enabled_color: "#adff99", // background color when the toggle switch is on
    toggle_handle_color: "white", // background color of the toggle switch's handle
    toggle_handle_diameter: "calc(var(--toggle_height) + 0.4rem)" // diameter of the toggle switch's handle
};
ui.toggle_switch(toggle_arg);

const textbox_arg = {
    underline_textbox_target :"input[type=text].underline_textbox", // specify the target with the CSS selector
    underline_color_normal: "rgba(0, 0, 0, 0.7)", // normal underline color
    underline_color_focused: "#ff6a00", // underline color during text entry
    underline_thickness: "0.15rem", // thickness of underline
    underline_textbox_width: "50%" // width of the textbox
};
ui.underline_textbox(textbox_arg);
```

Even if you use the all() function, you can pass arguments to it as follows. The property values of the objects in the arguments are passed directly to the functions. The properties and default values are the same as when executing the toggle_switch() and underline_textbox() functions individually.

```javascript
const args = {
    toggle_switch_arg: {
        // toggle_switch()関数に渡す引数を記述
        toggle_switch_target: "input[type=checkbox].toggle", // specify the target with the CSS selector
        toggle_width: "2.5rem", // width of the toggle switch
        toggle_height: "1rem", // height of the toggle switch
        toggle_border_thickness: "0.05rem", // thickness of the toggle switch outline
        toggle_border_color: "gray", // color of the toggle switch outline
        toggle_disabled_color: "white", // background color when the toggle switch is off
        toggle_enabled_color: "#adff99", // background color when the toggle switch is on
        toggle_handle_color: "white", // background color of the toggle switch's handle
        toggle_handle_diameter: "calc(var(--toggle_height) + 0.4rem)" // diameter of the toggle switch's handle
    },
    underline_textbox_arg: {
        // underline_textbox()関数に渡す引数を記述
        underline_textbox_target :"input[type=text].underline_textbox", // specify the target with the CSS selector
        underline_color_normal: "rgba(0, 0, 0, 0.7)", // normal underline color
        underline_color_focused: "#ff6a00", // underline color during text entry
        underline_thickness: "0.15rem", // thickness of underline
        underline_textbox_width: "50%" // width of the textbox
    }
};
ui.all(args);
```

Whether you use the all() function or execute each function individually, you can specify the target's CSS selector as you like, but the target must be an input element and its type attribute must look like the following.

|Element|Type attribute|
|:--|:--|
|toggle switch|``checkbox``|
|textbox with underline|``text``|

### How to get/set the value

Values can be retrieved and set in the same way as regular check boxes for toggle switches and regular text boxes for underlined text boxes.

## What is ORIZIN Series

The ORIZIN series is a variety of software developed by Robot-Inventor.

|Software Name|Overview|
|:--|:--|
|ORIZIN Agent HTML|An open source AI assistant written in Python. Only Japanese language is supported. Its catchphrase is "Always, with you. Your open partner"|
|ORIZIN Paon|An open-source horror game using WebGL, inspired by the horror game "PIEN".|

## OSS Licences

The following OSS are used in this software. Click on the name of the OSS to view the license.

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
