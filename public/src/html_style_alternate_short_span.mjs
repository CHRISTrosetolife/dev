import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
export function html_style_alternate_short_span(parent, patterns, message) {
  let split = html_style_alternate_split(message);
  html_style_alternate(parent, html_p, patterns, split);
}
