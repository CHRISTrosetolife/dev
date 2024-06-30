import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { firebase_login } from "./firebase_login.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { html_p } from "./html_p.mjs";
export function app_record_login(parent) {
  let email = html_input_width_full(parent);
  let password = html_input_width_full(parent);
  html_attribute_set(password, "type", "password");
  let error_message;
  html_button_width_full_text_click(parent, "login", async () => {
    try {
      let user = await firebase_login(
        html_value_get(email),
        html_value_get(password),
      );
    } catch (e) {}
  });
  error_message = html_p(parent);
  html_style_wrong(error_message);
}
