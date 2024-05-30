import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { noop } from "./noop.mjs";
import { html_style_alternate_short_span } from "./html_style_alternate_short_span.mjs";
export function html_style_alternate_monospace_short_span(root, message) {
  return html_style_alternate_short_span(
    root,
    [noop, app_learn_code_style_code_colored],
    message,
  );
}
