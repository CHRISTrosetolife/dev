import { html_cycle_short_p } from "./html_cycle_short_p.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_monospace_short(parent, message) {
  html_cycle_short_p(parent, [noop, html_style_code], message);
}
