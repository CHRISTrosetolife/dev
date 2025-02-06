import { html_button } from "./html_button.mjs";
import { html_br } from "./html_br.mjs";
export function html_button_width_full_text_click_br(parent, text, lambda) {
  let result = html_button(parent, text, lambda);
  html_br(parent);
  return result;
}
