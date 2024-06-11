import { html_cycle_short_span } from "./html_cycle_short_span.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_monospace_short_span(root, message) {
  return html_cycle_short_span(root, [noop, html_style_code], message);
}
