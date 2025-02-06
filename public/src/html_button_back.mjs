import { html_button_back_text } from "./html_button_back_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_back(parent, back_on_click) {
  let after = "";
  html_button_width_full_text_click(
    parent,
    html_button_back_text(),
    back_on_click,
  );
}
