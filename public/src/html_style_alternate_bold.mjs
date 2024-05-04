import {html_style_bold} from "./html_style_bold.mjs";
import {noop} from "./noop.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
export function html_style_alternate_bold(parent, list) {
    html_style_alternate(parent, html_p, [noop, html_style_bold], list);
}
