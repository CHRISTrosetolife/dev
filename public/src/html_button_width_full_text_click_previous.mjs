import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_previous(root, on_click) {
  return html_button_width_full_text_click(
    root,
    html_button_previous_text(),
    on_click,
  );
}
