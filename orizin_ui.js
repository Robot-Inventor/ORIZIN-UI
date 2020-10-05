class ToggleSwitch extends HTMLElement {
    static get observedAttributes() {
        return ["checked"];
    }

    constructor() {
        super();

        this._checked = null;

        const toggle_width = "2.5rem";
        const toggle_height = "1rem";
        const toggle_border_thickness = "0.05rem";
        const toggle_border_color = "gray";
        const toggle_disabled_color = "white";
        const toggle_enabled_color = "#adff99";
        const toggle_handle_color = "white";
        const toggle_handle_diameter = `calc(${toggle_height} + 0.4rem)`;

        const shadow = this.attachShadow({mode: "closed"});

        const checkbox_element = document.createElement("input");
        this._checkbox_element = checkbox_element;
        checkbox_element.setAttribute("type", "checkbox");
        checkbox_element.setAttribute("id", "checkbox");
        if(this.hasAttribute("checked")) {
            checkbox_element.checked = true;
        }

        const toggle_background_element = document.createElement("label");
        toggle_background_element.setAttribute("for", "checkbox");
        toggle_background_element.setAttribute("part", "foundation");

        const toggle_handle_element = document.createElement("div");
        toggle_handle_element.setAttribute("part", "handle");

        const style = document.createElement("style");
        style.textContent = `
        #checkbox {
            display: none;
            transition: 0.3s;
        }

        #checkbox+label {
            display: inline-block;
            background: ${toggle_disabled_color};
            width: ${toggle_width};
            height: ${toggle_height};
            border: solid ${toggle_border_thickness} ${toggle_border_color};
            border-radius: ${toggle_width};
            margin: calc(${toggle_handle_diameter} - ${toggle_height});
            padding: 0;
            vertical-align: bottom;
            overflow: visible;
            transition: 0.3s;
            cursor: pointer;
        }

        #checkbox:checked+label {
            background: ${toggle_enabled_color};
        }

        #checkbox+label div {
            display: block;
            background: ${toggle_handle_color};
            width: ${toggle_handle_diameter};
            height: ${toggle_handle_diameter};
            border: ${toggle_border_color} solid ${toggle_border_thickness};
            border-radius: ${toggle_width};
            transition: 0.3s;
            margin: 0;
            position: relative;
            top: calc(${toggle_border_thickness} * -1 - 0.2rem);
            left: calc(${toggle_border_thickness} * -1 - 0.2rem);
        }

        #checkbox:checked+label div {
            margin-left: 100%;
            transform: translateX(-50%);
        }

        :host {
            display: inline-block;
        }
        `;

        shadow.appendChild(checkbox_element);
        shadow.appendChild(toggle_background_element);
        shadow.appendChild(style);
        toggle_background_element.appendChild(toggle_handle_element);

        checkbox_element.addEventListener("change", () => {
            if(checkbox_element.checked) {
                this.setAttribute("checked", "");
            } else {
                this.removeAttribute("checked");
            }
            const change_event = new CustomEvent("change");
            this.dispatchEvent(change_event);
        });

        checkbox_element.addEventListener("input", () => {
            if(checkbox_element.checked) {
                this.setAttribute("checked", "");
            } else {
                this.removeAttribute("checked");
            }
        });
    }

    attributeChangedCallback(name, old_value, new_value) {
        switch(name) {
            case "checked":
                this._checked = new_value;
                if(new_value || new_value === "") {
                    this._checkbox_element.setAttribute("checked", "");
                } else {
                    this._checkbox_element.removeAttribute("checked");
                }
                break;
        }
    }

    get checked() {
        return this.hasAttribute("checked");
    }

    set checked(value) {
        if(value) {
            this._checkbox_element.setAttribute("checked", "");
            this.setAttribute("checked", "");
        } else {
            this._checkbox_element.removeAttribute("checked");
            this.removeAttribute("checked");
        }
    }
}

customElements.define("toggle-switch", ToggleSwitch);


class UnderlineTextbox extends HTMLElement {
    static get observedAttributes() {
        return ["value", "autocomplete", "list", "maxlength", "minlength", "pattern", "placeholder", "readonly", "required", "size"];
    }

    constructor() {
        super();

        this._value = null;
        this._autocomplete = null;
        this._list = null;
        this._maxlength = null;
        this._minlength = null;
        this._pattern = null;
        this._placeholder = null;
        this._readonly = null;
        this._required = null;
        this._size = null;

        const underline_color_normal = "rgba(0, 0, 0, 0.7)";
        const underline_color_focused = "#ff6a00";
        const underline_thickness = "0.15rem";

        const shadow = this.attachShadow({mode: "closed"});

        const input_element = document.createElement("input");
        this._input_element = input_element;
        input_element.setAttribute("type", "text");
        input_element.setAttribute("id", "textbox");
        input_element.setAttribute("part", "textbox");

        if(this.hasAttribute("value")) {
            input_element.value = this.getAttribute("value");
        }
        if(this.hasAttribute("autocomplete")) {
            input_element.setAttribute("autocomplete", this.getAttribute("autocomplete"));
        }
        if(this.hasAttribute("list")) {
            input_element.setAttribute("list", this.getAttribute("list"));
        }
        if(this.hasAttribute("maxlength")) {
            input_element.setAttribute("maxlength", this.getAttribute("maxlength"));
        }
        if(this.hasAttribute("minlength")) {
            input_element.setAttribute("minlength", this.getAttribute("minlength"));
        }
        if(this.hasAttribute("pattern")) {
            input_element.setAttribute("pattern", this.getAttribute("pattern"));
        }
        if(this.hasAttribute("placeholder")) {
            input_element.setAttribute("placeholder", this.getAttribute("placeholder"));
        }
        if(this.hasAttribute("readonly")) {
            input_element.setAttribute("readonly", this.getAttribute("readonly"));
        }
        if(this.hasAttribute("required")) {
            input_element.setAttribute("required", this.getAttribute("required"));
        }
        if(this.hasAttribute("size")) {
            input_element.setAttribute("size", this.getAttribute("size"));
        }

        const underline_group = document.createElement("div");
        underline_group.setAttribute("id", "underline_group");

        const normal_underline = document.createElement("div");
        normal_underline.setAttribute("id", "normal_underline");
        normal_underline.setAttribute("part", "normal_underline");

        const focused_underline = document.createElement("div");
        focused_underline.setAttribute("id", "focused_underline");
        focused_underline.setAttribute("part", "focused_underline");

        const style = document.createElement("style");
        style.textContent = `
        #textbox {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: transparent;
            margin: 0 0 ${underline_thickness} 0;
            padding: ${underline_thickness};
            box-sizing: border-box;
        }

        #textbox + #underline_group {
            width: 100%;
            height: ${underline_thickness};
            position: relative;
            left: 0;
            top: calc(-1.5 * ${underline_thickness});
            margin: 0;
            padding: 0;
        }

        #textbox + #underline_group #normal_underline {
            width: 100%;
            height: 100%;
            position: absolute;
            background: ${underline_color_normal};
            border-radius: ${underline_thickness};
            margin: 0;
            padding: 0;
        }

        #textbox + #underline_group #focused_underline {
            width: 0;
            height: 100%;
            position: absolute;
            background: ${underline_color_focused};
            transition: 0.3s;
            margin: 0 0 0 50%;
            padding: 0;
            border-radius: ${underline_thickness};
        }

        #textbox:focus + #underline_group #focused_underline {
            width: 100%;
            margin: 0;
        }

        :host {
            display: inline-block;
        }
        `;

        shadow.appendChild(input_element);
        underline_group.appendChild(normal_underline);
        underline_group.appendChild(focused_underline);
        shadow.appendChild(underline_group);
        shadow.appendChild(style);

        input_element.addEventListener("change", () => {
            this.setAttribute("value", input_element.value);
            const change_event = new CustomEvent("change");
            this.dispatchEvent(change_event);
        });

        input_element.addEventListener("input", () => {
            this.setAttribute("value", input_element.value);
        });

        Object.keys(this).forEach(function(property_name) {
            const attribute_name = property_name.replace(/^_+/, '');
            Object.defineProperty(this, attribute_name, {
                get: function() {
                    return this.getAttribute(attribute_name);
                },
                set: function(v) {
                    this.setAttribute(attribute_name, v);
                    this._input_element.setAttribute(attribute_name, v);
                }
            });
        }, this);
    }

    attributeChangedCallback(name, old_value, new_value) {
        function change_attribute(attribute_name) {
            const property_name = "_" + attribute_name;
            this[property_name] = new_value;
            this._input_element.setAttribute(attribute_name, new_value);
        }

        if(name in ["value", "autocomplete", "list", "maxlength", "minlength", "pattern", "placeholder", "readonly", "required", "size"]) {
            change_attribute.bind(this)(name);
        }
    }
}

customElements.define("underlined-textbox", UnderlineTextbox);

class Ripple {
    /*! The Orizinal Program: Ripple.js v1.2.1
    * The MIT License (MIT)
    * Copyright (c) 2014 Jacob Kelley 
    * Improved by Copyright (c) 2020 Robot-Inventor */
    constructor(selector, options) {
        const self = this;
        const ripple_style = document.createElement("style");
        ripple_style.textContent = `
.has-ripple{
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}

.ripple{
    display: block;
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    background: #fff;
    opacity: 1;
}

.ripple-animate{
    -webkit-animation: ripple;
    -o-animation: ripple;
    animation: ripple;
}

@-webkit-keyframes ripple{
    100%{
        opacity: 0;
        -webkit-transform: scale(2);
        transform: scale(2);
    }
}

@-o-keyframes ripple{
    100%{
        opacity: 0;
        -o-transform: scale(2);
        transform: scale(2);
    }
}

@keyframes ripple{
    100%{
        opacity: 0;
        transform: scale(2);
    }
}
        `;
        document.body.appendChild(ripple_style);

        const _log = self.log = function() {
            if(self.defaults.debug && console && console.log) {
                console.log.apply(console, arguments);
            }
        };

        self.selector = selector;
        self.defaults = {
            debug: false,
            on: "mousedown",

            opacity: 0.4,
            color: "auto",
            multi: false,

            duration: 0.7,
            rate: function(pxPerSecond) {
                return pxPerSecond;
            },

            easing: "linear"
        };

        self.defaults = Object.assign({}, self.defaults, options);

        function Trigger(e) {

            let ripple;

            this.classList.add("has-ripple");

            // This instances settings
            const settings = Object.assign({}, self.defaults, this.dataset);

            // Create the ripple element
            if (settings.multi || (!settings.multi && this.querySelectorAll(".ripple").length === 0)) {
                ripple = document.createElement("span");
                ripple.classList.add("ripple");
                this.appendChild(ripple);

                _log("Create: Ripple");

                // Set ripple size
                if (!ripple.clientHeight && !ripple.clientWidth) {
                    const size = Math.max(this.offsetWidth, this.offsetHeight);
                    ripple.style.height = size + "px";
                    ripple.style.width = size + "px";
                    _log("Set: Ripple size");
                }

                // Give the user the ability to change the rate of the animation
                // based on element width
                if(settings.rate && typeof settings.rate == "function") {

                    // rate = pixels per second
                    const rate = Math.round(ripple.clientWidth / settings.duration);

                    // new amount of pixels per second
                    const filteredRate = settings.rate(rate);

                    // Determine the new duration for the animation
                    const newDuration = (ripple.clientWidth / filteredRate);

                    // Set the new duration if it has not changed
                    if(settings.duration.toFixed(2) !== newDuration.toFixed(2)) {
                        _log("Update: Ripple Duration", {
                            from: settings.duration,
                            to: newDuration
                        });
                        settings.duration = newDuration;
                    }
                }

                // Set the color and opacity
                const color = (settings.color == "auto") ? getComputedStyle(this, null).getPropertyValue("color") : settings.color;
                const css = {
                    animationDuration: (settings.duration).toString() + "s",
                    animationTimingFunction: settings.easing,
                    background: color,
                    opacity: settings.opacity
                };

                _log("Set: Ripple CSS", css);
                ripple.style.animationDuration = (settings.duration).toString() + "s";
                ripple.style.animationTimingFunction = settings.easing;
                ripple.style.background = color;
                ripple.style.opacity = settings.opacity;
            }

            // Ensure we always have the ripple element
            if(!settings.multi) {
                _log("Set: Ripple Element");
                ripple = this.querySelector(".ripple");
            }

            // Kill animation
            _log("Destroy: Ripple Animation");
            ripple.classList.remove("ripple-animate");


            // Retrieve coordinates
            const x = e.pageX - this.getBoundingClientRect().left - document.documentElement.scrollLeft - ripple.clientWidth / 2;
            const y = e.pageY - this.getBoundingClientRect().top - document.documentElement.scrollTop - ripple.clientHeight / 2;

            /**
             * We want to delete the ripple elements if we allow multiple so we dont sacrifice any page
             * performance. We don't do this on single ripples because once it has rendered, we only
             * need to trigger paints thereafter.
             */
            if(settings.multi) {
                _log("Set: Ripple animationend event");
                ["animationend", "webkitAnimationEnd", "oanimationend", "MSAnimationEnd"].forEach(function(e) {
                    ripple.addEventListener(e, function() {
                        _log("Note: Ripple animation ended");
                        _log("Destroy: Ripple");
                        ripple.remove();
                    }, {
                        once: true
                    });
                });
            }

            // Set position and animate
            _log("Set: Ripple location");
            _log("Set: Ripple animation");
            ripple.style.top = y + "px";
            ripple.style.left = x + "px";
            ripple.classList.add("ripple-animate");
        }

        const ripple_elements = document.querySelectorAll(self.selector);
        ripple_elements.forEach(element => {
            element.addEventListener(self.defaults.on, Trigger);
        });
    }
}
