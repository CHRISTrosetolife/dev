import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {html_style} from "./html_style.mjs";
export function app_learn_code_style_code(code) {
    app_learn_code_style_rounded_padded(code);
    html_style(code, {
        'padding': '0.5rem',
        'border-radius': '0.5rem',
        'font-family': 'monospace'
    });
}
