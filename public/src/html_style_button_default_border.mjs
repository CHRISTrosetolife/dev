import {html_style_button_default_border_color} from "./html_style_button_default_border_color.mjs";
import {string_combine} from "./string_combine.mjs";
export function html_style_button_default_border() {
    let color = html_style_button_default_border_color();
    return {
        'border': string_combine('solid 0.5vh ', color)
    };
}
