import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { html_button } from "./html_button.mjs";
import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function app_code_refresh_username(context) {
  let root = app_code_screen_set(context, fn_name("app_code_refresh_username"));
  html_p_text_multiple(root, [
    "In order to store data for later, you need a username",
    "If you do not want to store data for later, you may skip this",
    "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
  ]);
  let conditions = [
    html_condition_empty_not(),
    html_condition_letters_numbers_underscores(),
  ];
  let button_text = "Save";
  html_input_validated_button(
    root,
    "Username",
    conditions,
    button_text,
    on_submit,
  );
  html_hr(root);
  html_button(root, "Skip", () => {
    next();
  });
  function on_submit(value) {
    storage_local_set(app_code, "username", value);
    next();
  }
  async function next() {
    await app_code_refresh_menu(context);
  }
}
