import {html_li} from "./html_li.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
export function html_li_text(ol, text) {
    let li = html_li(ol);
    html_inner_set(li, text);
    return li;
}
