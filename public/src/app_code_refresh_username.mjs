import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { html_input_validated_on_input } from "./html_input_validated_on_input.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { html_input_validated_on_input_lambda } from "./html_input_validated_on_input_lambda.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_refresh_username(context) {
  let root = app_code_screen_set(context, fn_name("app_code_refresh_username"));
  html_p_text_multiple(root, [
    "In order to store data for later, you need a username",
    "If you do not want to store data for later, you may skip this",
    "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
  ]);
  let input_username = html_input_validated(root, "Username", [
    html_condition_empty_not(),
    html_condition_letters_numbers_underscores(),
  ]);
  let button_save = html_button_width_full_text_click(root, "Save", () => {
    let value = html_value_get(input_username);
    storage_local_set(app_code, "username", value);
    next();
  });
  html_input_validated_on_input_lambda(input_username, (valid) => {
    log({});
    html_button_enable_if(button_save, valid);
  });
  html_input_validated_on_input(input_username);
  html_hr(root);
  html_button_width_full_text_click(root, "Skip", () => {
    next();
  });
  async function next() {
    await app_code_refresh_menu(context);
  }
}
