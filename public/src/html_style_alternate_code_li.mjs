import {app_learn_code_style_code_colored} from "./app_learn_code_style_code_colored.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import { html_li } from "./html_li.mjs";
export function html_style_alternate_code_li(parent, list) {
    html_style_alternate(parent, html_li, [noop, app_learn_code_style_code_colored], list);
}
