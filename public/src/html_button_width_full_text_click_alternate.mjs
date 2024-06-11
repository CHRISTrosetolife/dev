import { html_cycle_span } from "./html_cycle_span.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_alternate(
  root,
  patterns,
  message,
  on_click,
) {
  let button = html_button_width_full_text_click(root, "", on_click);
  html_cycle_span(button, patterns, message);
}
