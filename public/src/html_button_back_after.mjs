import { html_button_back_text } from "./html_button_back_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_back_after(parent, after, back_on_click) {
  html_button_width_full_text_click(
    parent,
    string_combine_multiple([html_button_back_text(), " ", after]),
    back_on_click,
  );
}
