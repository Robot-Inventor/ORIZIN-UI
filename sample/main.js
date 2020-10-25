function parse_url_parameter() {
    const url_parameters_list = location.search.substring(1).split("&");
    const url_parameters = {};
    for(let i = 0; i < url_parameters_list.length; i++) {
        const parsed_parameter = url_parameters_list[i].split("=");
        url_parameters[parsed_parameter[0]] = parsed_parameter[1];
    }
    return url_parameters;
}

function normalize_language_setting(language) {
    const browser_language = navigator.language;
    const default_language = browser_language ==="ja" ? "ja" : language === "en" ? "en" : "ja";
    return language === "ja" ? "ja" : language === "en" ? "en" : default_language;
}

function load_texts(language) {
    const language_setting = normalize_language_setting(language);

    function return_text(object) {
        return language_setting === "ja" ? object["ja"] : language_setting === "en" ? object["en"] : object["ja"];
    }

    const h1 = document.querySelector("h1");
    const h1_text = {
        ja: "ORIZIN UIサンプル",
        en: "ORIZIN UI Sample"
    }
    h1.textContent = return_text(h1_text);

    const download_link = document.getElementById("download_link");
    const download_link_text = {
        ja: "ダウンロード",
        en: "Download"
    }
    download_link.textContent = return_text(download_link_text);

    const h2_list = document.querySelectorAll("h2");
    const h2_texts = {
        ja: ["トグルスイッチ", "アンダーライン付きテキストボックス", "リップルエフェクト", "通知"],
        en: ["Toggle Switch", "Underlined Textbox", "Ripple Effect", "Notification"]
    };
    for(let i = 0; i < h2_list.length; i++) {
        h2_list[i].textContent = return_text(h2_texts)[i];
    }

    const button_list = document.querySelectorAll("button");
    const button_texts = {
        ja: ["値を取得", "通知を表示"],
        en: ["Get value", "Notify"]
    };
    for(let i = 0; i < button_list.length; i++) {
        button_list[i].textContent  = return_text(button_texts)[i];
    }

    const multi_language_support_element = document.querySelectorAll(".multi_language_support_text");
    const multi_language_support_text = {
        ja: ["結果：", "クリックしてください", "ダブルクリックしてください", "通常", "注意", "警告"],
        en: ["Result: ", "Click me!", "Double click me!", "normal", "caution", "warning"]
    }
    for(let i = 0; i < multi_language_support_element.length; i++) {
        multi_language_support_element[i].textContent = return_text(multi_language_support_text)[i];
    }
}

let language = parse_url_parameter().lang || "ja";
document.getElementById("language_select").language.value = normalize_language_setting(language);
load_texts(language);

document.getElementById("language_select").addEventListener("change", function() {
    history.replaceState(null, null, "?lang=" + document.getElementById("language_select").language.value);
    load_texts(parse_url_parameter().lang);
});


const checkbox = document.getElementById("checkbox_sample");
checkbox.addEventListener("change", function() {
    let checkbox_status;
    if(checkbox.checked) {
        checkbox_status = "checked!";
    } else {
        checkbox_status = "not checked!";
    }
    document.getElementById("checkbox_result").textContent = checkbox_status;
});

const checkbox2 = document.getElementById("checkbox_sample2");
checkbox2.addEventListener("change", function() {
    let checkbox_status;
    if(checkbox2.checked) {
        checkbox_status = "checked!";
    } else {
        checkbox_status = "not checked!";
    }
    document.getElementById("checkbox_result2").textContent = checkbox_status;
});

document.getElementById("get_text").addEventListener("click", function() {
    document.getElementById("underline_textbox_result").textContent = document.getElementById("underline_textbox_sample").value;
});

new Ripple(".ripple_effect");

new Ripple(".multi_ripple_effect", {
    multi: true
});

const notifier = new Notification();

document.getElementById("notify_button").addEventListener("click", function() {
    notifier.notify({
        message: document.getElementById("notify_content_input").value,
        type: document.getElementById("notification_setting").notification_type.value
    });
});
