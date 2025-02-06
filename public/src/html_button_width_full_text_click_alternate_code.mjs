import { html_button } from "./html_button.mjs";
import { html_cycle_code_span } from "./html_cycle_code_span.mjs";
export function html_button_width_full_text_click_alternate_code(
  root,
  description,
  on_click,
) {
  let b = html_button(root, "", on_click);
  html_cycle_code_span(b, description);
  return b;
}
