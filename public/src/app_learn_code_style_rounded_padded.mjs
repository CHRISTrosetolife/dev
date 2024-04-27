import {html_style_units} from "./html_style_units.mjs";
import {html_style} from "./html_style.mjs";
export function app_learn_code_style_rounded_padded(code) {
    let units = 2;
    html_style(code, {
        'padding': html_style_units(2),
        'border-radius': html_style_units(5)
    });
}
