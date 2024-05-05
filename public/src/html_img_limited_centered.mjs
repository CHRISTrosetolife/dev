import {html_style} from "./html_style.mjs";
import {html_img} from "./html_img.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {html_div} from "./html_div.mjs";
export function html_img_limited_centered(parent, img_src) {
    let container = html_div(parent);
    html_style_centered(container);
    let i1 = html_img(container, img_src);
    html_style(i1, {
        'max-height': '50dvh',
        'max-width': '100%'
    });
}
