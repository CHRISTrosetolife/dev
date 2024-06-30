import { html_value_get } from "./html_value_get.mjs";
import { firebase_login } from "./firebase_login.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function app_record_login(root) {
  let email = html_input_width_full(root);
  let password = html_input_width_full(root);
  html_attribute_set(password, "type", "password");
  let error_message;
  html_button_width_full_text_click(root, "login", async () => {
    try {
      let user = await firebase_login(
        html_value_get(email),
        html_value_get(password),
      );
    } catch (e) {}
  });
}
