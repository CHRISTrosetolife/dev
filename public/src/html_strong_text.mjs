import {html_strong} from "./html_strong.mjs";
import {html_span} from "./html_span.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
export function html_strong_text(parent, text) {
    let a = html_strong(parent);
    html_inner_set(a, text);
    return a;
}
