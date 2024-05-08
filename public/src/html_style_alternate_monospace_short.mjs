import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {string_split} from "./string_split.mjs";
export function html_style_alternate_monospace_short(parent, message) {
    let split = string_split(message, '`');
    html_style_alternate_monospace(parent, split);
}
