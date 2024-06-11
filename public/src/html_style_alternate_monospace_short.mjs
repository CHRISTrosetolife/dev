import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
export function html_style_alternate_monospace_short(parent, message) {
  let split = html_style_alternate_split(message);
  html_style_alternate_monospace(parent, split);
  html_style_alternate_short_p(parent, html_p, [noop, html_style_code], list);
}
