import {html_style} from "./html_style.mjs";
export function html_style_pre_wrap(code) {
    html_style(code, {
        'white-space': 'pre-wrap'
    });
}
