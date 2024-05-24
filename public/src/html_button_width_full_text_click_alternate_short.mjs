import { html_style_alternate_short_span } from "./html_style_alternate_short_span.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_alternate_short(
  root,
  on_click,
  patterns,
  message,
) {
  let button = html_button_width_full_text_click(root, "", on_click);
  html_style_alternate_short_span(button, patterns, message);
}
