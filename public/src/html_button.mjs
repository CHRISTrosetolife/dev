import {html_style_button_default} from "./html_style_button_default.mjs";
import {html_style_default} from "./html_style_default.mjs";
import {html_style} from "./html_style.mjs";
import {html_element} from "./html_element.mjs";
export function html_button(root) {
    let result = html_element(root, 'button');
    html_style(result, html_style_button_default());
    return result;
}
