import { html_button } from "./html_button.mjs";
import { html_cycle_span } from "./html_cycle_span.mjs";
export function html_button_width_full_text_click_alternate(
  root,
  patterns,
  message,
  on_click,
) {
  let button = html_button(root, "", on_click);
  html_cycle_span(button, patterns, message);
}
