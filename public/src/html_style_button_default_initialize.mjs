import {html_style_button_default_border} from "./html_style_button_default_border.mjs";
import {app_learn_code_style_rounded_padded_style} from "./app_learn_code_style_rounded_padded_style.mjs";
import {html_style_button_default} from "./html_style_button_default.mjs";
import {object_merge} from "./object_merge.mjs";
export function html_style_button_default_initialize() {
    object_merge(html_style_button_default(), app_learn_code_style_rounded_padded_style());
    object_merge(html_style_button_default(), {
        'margin': '0.5vh',
        'background-color': 'lightblue'
    });
    object_merge(html_style_button_default(), html_style_button_default_border());
}
