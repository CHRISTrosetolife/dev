import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
export function html_style_alternate_short_p(parent, patterns, message) {
  let split = html_style_alternate_split(message);
  html_style_alternate_list(parent, html_p, patterns, split);
}
