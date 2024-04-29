import { string_combine } from "./string_combine.mjs";

export function html_style_button_default_border() {
    return {
        'border': string_combine('solid 0.5vh ', html_style_button_default_border_color())
    };
}
function html_style_button_default_border_color() {
    return 'dodgerblue';
}

