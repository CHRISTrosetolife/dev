import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function html_style_alternate_bold_short(parent, message) {
  let split = html_style_alternate_split(message);
  html_style_alternate_list(parent, html_p, [noop, html_style_bold], split);
}
