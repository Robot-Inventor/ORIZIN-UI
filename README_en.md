# ORIZIN UI

[日本語](README.md) | English

![Broken Link Check](https://github.com/Robot-Inventor/ORIZIN-UI/workflows/Broken%20Link%20Check/badge.svg) ![CodeQL](https://github.com/Robot-Inventor/ORIZIN-UI/workflows/CodeQL/badge.svg) [![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IlJvYm90LUludmVudG9yIiwicmVwbzEiOiJPUklaSU4tVUkiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoxOTUwNCwiaWF0IjoxNjAxNDgwMDM3fQ.6SSplvJLANbclZT-dLtCYyz-tYTmFlI5SFwiWuC1Ykc)](https://www.deepcode.ai/app/gh/Robot-Inventor/ORIZIN-UI/_/dashboard?utm_content=gh%2FRobot-Inventor%2FORIZIN-UI)

This document has been translated into English using machine translation. Please let me know if there are any errors.

--------------------

This is a library of UI-related that was created during the development of the ORIZIN series. This has been tested on Google Chrome 86. There is a possibility that this library will not work on older versions of Google Chrome or other web browsers. If you need to support web browsers other than Google Chrome, please be sure to check the operation beforehand.

## What you can do

When you use the ORIZIN UI, you can use the following

- Toggle switches
- Underlined text box that changes color as you enter text
- Material design style ripple effect
- Displaying notifications on the screen

## Demo

[https://robot-inventor.github.io/ORIZIN-UI/index.html](https://robot-inventor.github.io/ORIZIN-UI/index.html)

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
    <toggle-switch></toggle-switch>    <!-- toggle switch -->
    <underlined-textbox></underlined-textbox>    <!-- textbox with underline -->
</body>
<script src="orizin_ui.min.js"></script>
<script>
    new Ripple(".ripple_effect", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.4, // The opacity of the ripple
        color: "auto", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.7, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear'
    });

    const notifier = new Notification();
    notifier.notify({
        message: "Notification test", // Content of the notification
        callback: function() {  // What to do when the notification is closed
            alert("Notification closed.");
        },
        auto_close_time: 10000, // Time to close notifications automatically (milliseconds)
        type = "normal", // Type of notification. You can select from "normal", "caution" or "warning
    });
</script>
</html>
```

### About ripple effect

It provides a ripple effect with a material design look to a specified element.

This feature uses a customized version of [jakiestfu/Ripple.js](https://github.com/jakiestfu/Ripple.js). It is rewritten to be jQuery-independent and to work with only one JavaScript file.

### About On-Screen Notifications

It provides a function to display a notification in the lower right corner of the screen. For example, you can use it in the following way.

```javascript
const notifier = new Notification();
notifier.notify({
    message: "Notification test", // Content of the notification
    callback: function() {  // What to do when the notification is closed
        alert("Notification closed.");
    },
    auto_close_time: 10000, // Time to close notifications automatically (milliseconds)
    type = "normal", // Type of notification. You can select from "normal", "caution" or "warning
});
```

All arguments are optional and their default values are as follows:

|Argument|default value|
|:--|:--|
|message|(empty)|
|callback|(nothing)|
|auto_close_time|undefined（It won't close automatically.）|
|type|normal|

--------------------

From here on out, here's a description of the toggle switches and underlined text boxes.

### How to apply CSS

You can use ``::part()`` to apply styles.

#### For toggle switches

In the case of toggle switches, the styles should be applied like this

```css
toggle-switch::part(foundation) {
    /* Style of the toggle switch foundation in normal operation */
}

toggle-switch[checked]::part(foundation) {
    /* Style of the toggle switch foundation when the toggle switch is on */
}

toggle-switch::part(handle) {
    /* Handle style of the toggle switch in normal operation */
}

toggle-switch[checked]::part(handle) {
    /* Style of the toggle switch handle when the toggle switch is on */
}

toggle-switch::part(ripple) {
    /* Style of the toggle switch ripple effect */
}

toggle-switch:active::part(ripple) {
    /* Style of the ripple effect when clicking the toggle switch */
}
```

As a reminder, the size of the toggle switches will not change even if you specify ``width`` or ``height`` to ``toggle-switch`` themselves. If you want to change the size of the toggle switches, you should basically use the CSS above to change the size of each part, but if you don't want to change the ratio of height to width, ``transform`` may be enough. For example, if you want to make them twice as big, you can use the following.

```css
toggle-switch {
    transform: scale(2);
}
```

#### For underlined text boxes

For underlined text boxes, apply the style as follows

```css
underlined-textbox::part(textbox) {
    /* The style of the normal text entry part */
}

underlined-textbox::part(textbox):focus {
    /* The style of the text input part during text entry */
}

underlined-textbox::part(normal_underline) {
    /* Normal underline style */
}

underlined-textbox::part(focused_underline) {
    /* Underline style during text entry */
}
```

### Attributes

The toggle switches are internally normal input element check boxes, and the underlined text boxes are internally normal input element text boxes. Attributes given to toggle switches and underlined text boxes are passed directly to input elements used internally by this library. The attributes that toggle switches and underlined text boxes support are as follows

#### Attributes supported by the toggle switches

- checked

#### Attributes supported by the underlined text boxes

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

These attributes can be retrieved and set with ``getAttribute()`` and ``setAttribute()`` in JavaScript. They can also be retrieved and set using JavaScript properties.

#### Events

This corresponds to the change event and input event. In terms of event firing conditions, the toggle switch is the same as the check box of the input element, and the text box with underline is the same as the text box of the input element. This is because we are conveying the events of the input element as it is used internally.

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
<details>
    <summary>Ripple.js v1.2.1</summary>
The MIT License (MIT)

Copyright (c) 2014 Jacob Kelley

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
