import {html_p} from "./html_p.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_element} from "./html_element.mjs";
export function html_p_text(parent, text) {
    let p = html_p(parent);
    html_inner_set(p, text);
    return p;
}
