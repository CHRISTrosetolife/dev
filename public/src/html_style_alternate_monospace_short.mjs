import {html_style_alternate_split} from "./html_style_alternate_split.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
export function html_style_alternate_monospace_short(parent, message) {
    let split = html_style_alternate_split(message);
    html_style_alternate_monospace(parent, split);
}
