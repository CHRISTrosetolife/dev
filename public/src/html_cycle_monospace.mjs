import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_monospace(parent, message) {
  html_cycle_p(parent, [noop, html_style_code], message);
}
