import {html_style_default} from "./html_style_default.mjs";
import {html_style} from "./html_style.mjs";
export function html_element(parent, tag_name) {
    let {element} = parent;
    let result = document.createElement(tag_name);
    html_style(result, html_style_default());
    element.appendChild(result);
    return {
        element: result
    };
}
