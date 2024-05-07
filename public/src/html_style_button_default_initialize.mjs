import {html_style_button_default_background_color} from "./html_style_button_default_background_color.mjs";
import {html_style_button_default_border} from "./html_style_button_default_border.mjs";
import {app_learn_code_style_rounded_padded_style} from "./app_learn_code_style_rounded_padded_style.mjs";
import {html_style_button_default} from "./html_style_button_default.mjs";
import {object_merge} from "./object_merge.mjs";
export function html_style_button_default_initialize() {
    object_merge(html_style_button_default(), app_learn_code_style_rounded_padded_style());
    object_merge(html_style_button_default(), html_style_margin_default_value());
    object_merge(html_style_button_default(), {
        'background-color': html_style_button_default_background_color()
    });
    object_merge(html_style_button_default(), html_style_button_default_border());
}
function html_style_margin_default_value() {
    return {
        'margin': '0.5dvh'
    };
}
