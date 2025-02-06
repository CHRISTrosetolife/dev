import { html_button } from "./html_button.mjs";
import { html_hr } from "./html_hr.mjs";
export function html_button_width_full_text_click_hr(parent, text, lambda) {
  html_button(parent, text, lambda);
  html_hr(parent);
}
