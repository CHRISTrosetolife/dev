import {html_style_monospace} from "./html_style_monospace.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
export function html_style_alternate_monospace(parent, list) {
    html_style_alternate(parent, html_p, [noop, html_style_monospace], list);
}
