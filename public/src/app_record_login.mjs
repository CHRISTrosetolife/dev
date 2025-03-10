import { html_button } from "./html_button.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_button_default_border } from "./html_style_button_default_border.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { firebase_login } from "./firebase_login.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_p } from "./html_p.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
export function app_record_login(parent) {
  html_clear_scroll_top(parent);
  let email = html_input_width_full_focus(parent);
  html_placeholder(email, "Email");
  let password = html_input_width_full_placeholder(parent, "Password");
  html_attribute_set(password, "type", "password");
  let error_message;
  html_button(parent, "login", async () => {
    try {
      await firebase_login(html_value_get(email), html_value_get(password));
    } catch (e) {
      html_inner_set(error_message, e.message);
      html_style_visible(error_message);
    }
  });
  error_message = html_p(parent);
  html_style_hidden(error_message);
  html_style_rounded_padded(error_message);
  html_style(error_message, html_style_button_default_border());
  html_style_wrong(error_message);
}
