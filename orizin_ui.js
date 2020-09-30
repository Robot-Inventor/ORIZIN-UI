class ORIZIN_UI {
    toggle_switch(toggle_switch_target="input[type=checkbox].toggle") {
        let toggle_element_num = 0;
        document.querySelectorAll(toggle_switch_target).forEach(function(toggle_element) {
            let toggle_id = toggle_element.getAttribute("id");
            if (!toggle_id) {
                toggle_element.setAttribute("id", "toggle_element_" + toggle_element_num);
                toggle_id = "toggle_element_" + toggle_element_num;
                toggle_element_num += 1;
            }
            toggle_element.insertAdjacentHTML("afterend", "<label for='" + toggle_id + "'><div></div></label>");
        });

        document.body.insertAdjacentHTML("afterend", `
            <style>
                :root {
                    --toggle_width: 2.5rem;
                    --toggle_height: 1rem;
                    --toggle_border_thickness: 0.05rem;
                    --toggle_border_color: gray;
                    --toggle_disabled_color: white;
                    --toggle_enabled_color: #adff99;
                    --toggle_handle_color: white;
                    --toggle_handle_radius: calc(var(--toggle_height) + 0.4rem);
                }

                ${toggle_switch_target} {
                    display: none;
                    transition: 0.3s;
                }

                ${toggle_switch_target}+label {
                    display: inline-block;
                    background: var(--toggle_disabled_color);
                    width: var(--toggle_width);
                    height: var(--toggle_height);
                    border: solid var(--toggle_border_thickness) var(--toggle_border_color);
                    border-radius: var(--toggle_width);
                    margin: calc(var(--toggle_handle_radius) - var(--toggle_height));
                    padding: 0;
                    vertical-align: bottom;
                    overflow: visible;
                    transition: 0.3s;
                    cursor: pointer;
                }

                ${toggle_switch_target}:checked+label {
                    background: var(--toggle_enabled_color);
                }

                ${toggle_switch_target}+label div {
                    display: block;
                    content: "";
                    background: var(--toggle_handle_color);
                    width: var(--toggle_handle_radius);
                    height: var(--toggle_handle_radius);
                    border: var(--toggle_border_color) solid var(--toggle_border_thickness);
                    border-radius: var(--toggle_width);
                    box-shadow: 0 2px 5px var(--shadow);
                    transition: 0.3s;
                    margin: 0;
                    position: relative;
                    top: calc(var(--toggle_border_thickness) * -1 - 0.2rem);
                    left: calc(var(--toggle_border_thickness) * -1 - 0.2rem);
                }

                ${toggle_switch_target}:checked+label div {
                    margin-left: calc(100% - var(--toggle_height));
                }
            </style>
        `);
    }

    underline_textbox(underline_textbox_target="input[type=text].underline_textbox") {
        let input_element_num = 0;
        document.querySelectorAll(underline_textbox_target).forEach(function(input_element) {
            const input_group_id = "input_group_" + input_element_num;
            input_element.insertAdjacentHTML("afterend", "<div class='text_input_group' id='" + input_group_id + "'><div class='text_underline_group'><div class='text_underline_normal'></div><div class='text_underline_focused'></div></div></div>");
            const text_input_group = document.querySelector("div.text_input_group#" + input_group_id);
            text_input_group.insertBefore(input_element, document.querySelector("div.text_input_group#" + input_group_id + " div.text_underline_group"));
            input_element_num += 1;
        });

        document.body.insertAdjacentHTML("afterend", `
            <style>
                :root {
                    --underline_color_normal: rgba(0, 0, 0, 0.7);
                    --underline_color_focused: #ff6a00;
                    --underline_thickness: 0.15rem;
                    --underline_textbox_width: 50%;
                }

                .text_input_group {
                    width: var(--underline_textbox_width);
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                }

                .text_input_group input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                    margin: 0 0 var(--underline_thickness) 0;
                    padding: var(--underline_thickness);
                    box-sizing: border-box;
                }

                .text_input_group .text_underline_group {
                    width: 100%;
                    height: var(--underline_thickness);
                    position: relative;
                    left: 0;
                    top: calc(-1.5 * var(--underline_thickness));
                    margin: 0;
                    padding: 0;
                }

                .text_input_group input + .text_underline_group .text_underline_normal {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background: var(--underline_color_normal);
                    border-radius: var(--underline_thickness);
                    margin: 0;
                    padding: 0;
                }

                .text_input_group input + .text_underline_group .text_underline_focused {
                    width: 0;
                    height: 100%;
                    position: absolute;
                    background: var(--underline_color_focused);
                    transition: 0.3s;
                    margin: 0 0 0 50%;
                    padding: 0;
                    border-radius: var(--underline_thickness);
                }

                .text_input_group input:focus + .text_underline_group .text_underline_focused {
                    width: 100%;
                    margin: 0;
                }
            </style>
        `);
    }

    all({toggle_switch_arg, underline_textbox_arg} = {}) {
        this.toggle_switch(toggle_switch_arg);
        this.underline_textbox(underline_textbox_arg);
    }
}
