import { html_style_alternate_monospace_short_span } from "./html_style_alternate_monospace_short_span.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_alternate_code(
  root,
  description,
  on_click,
) {
  let b = html_button_width_full_text_click(root, "", on_click);
  let split = html_style_alternate_split(description);
  html_style_alternate_monospace_short_span(b, split);
  return b;
}
