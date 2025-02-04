import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { object_property_set_exists_not } from "./object_property_set_exists_not.mjs";
import { html_input_validated_on_input_lambda } from "./html_input_validated_on_input_lambda.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_refresh_username(context) {
  let root = html_clear_scroll_top_centered_context(context);
  html_p_text_multiple(root, [
    "In order to store data for later, you need a username",
    "If you do not want to store data for later, you may skip this",
    "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
  ]);
  let placeholder = "Username";
  let input_username = html_input_validated(root, placeholder);
  let button_save = html_button_width_full_text_click(root, "Save", () => {
    let value = html_value_get(input_username);
    storage_local_set(app_code, "username", value);
    next();
  });
  object_property_set_exists_not(
    input_username,
    html_input_validated_on_input_lambda(),
    (valid) => {
      html_button_enable_if(button_save, valid);
    },
  );
  object_property_get(input_username, html_input_validated_on_input())();
  html_hr(root);
  html_button_width_full_text_click(root, "Skip", () => {
    next();
  });
  async function next() {
    await app_code_refresh_menu(context);
  }
}
