import {app_learn_code_style_code_colored} from "./app_learn_code_style_code_colored.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_style_alternate_split} from "./html_style_alternate_split.mjs";
export function html_style_alternate_short(parent, message) {
    let split = html_style_alternate_split(message);
    html_style_alternate(parent, html_p, [noop, app_learn_code_style_code_colored], split);
}
