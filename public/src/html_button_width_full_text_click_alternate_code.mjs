import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_alternate_code(
  root,
  description,
  on_click,
) {
  let b = html_button_width_full_text_click(root, "", on_click);
  html_style_alternate_monospace_short_span(b, description);
  return b;
}
