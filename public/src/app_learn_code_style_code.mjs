import {html_style_monospace} from "./html_style_monospace.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
export function app_learn_code_style_code(code) {
    app_learn_code_style_rounded_padded(code);
    html_style_monospace(code);
}
