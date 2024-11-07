import { html_hr } from "./html_hr.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_br(parent, text, lambda) {
  html_button_width_full_text_click(parent, text, lambda);
  html_hr(parent);
}
