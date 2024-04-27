import {html_style} from "./html_style.mjs";
export function app_learn_code_style_rounded_padded(code) {
    let units = 2;
    html_style(code, {
        'padding': (0.1 * units) + 'rem',
        'border-radius': '0.5rem'
    });
}
