import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
export function html_style_alternate_short_span(parent, patterns, message) {
  let split = html_style_alternate_split(message);
  html_style_alternate_list(parent, html_span, patterns, split);
}
