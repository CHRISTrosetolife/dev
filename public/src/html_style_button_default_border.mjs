import {html_style_button_default_border_color} from "./html_style_button_default_border_color.mjs";
import {string_combine} from "./string_combine.mjs";
export function html_style_button_default_border() {
    return {
        'border': string_combine('solid 0.5vh ', html_style_button_default_border_color())
    };
}
