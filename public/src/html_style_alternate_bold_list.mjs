import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
export function html_style_alternate_bold_list(parent, list) {
  html_style_alternate_list(parent, html_p, [noop, html_style_bold], list);
}
