import { html_style_code } from "./html_style_code.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_span } from "./html_style_alternate_short_span.mjs";
export function html_style_alternate_monospace_short_span(root, message) {
  return html_style_alternate_short_span(
    root,
    [noop, html_style_code],
    message,
  );
}
