import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function app_record_login(root) {
  let email = html_input_width_full(root);
  let password = html_input_width_full(root);
  html_attribute_set(password, "type", "password");
  html_button_width_full_text_click(root, "login", () => {});
}
