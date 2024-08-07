import { html_cycle_span } from "./html_cycle_span.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_code_span(root, message) {
  return html_cycle_span(root, [noop, html_style_code], message);
}
