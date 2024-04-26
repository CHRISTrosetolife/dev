import {html_span} from "./html_span.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
export function html_span_text(parent, text) {
    let a = html_span(parent);
    html_inner_set(a, text);
    return a;
}
