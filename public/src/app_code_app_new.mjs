import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { html_condition_letters_numbers_underscores_spaces } from "./html_condition_letters_numbers_underscores_spaces.mjs";
import { html_input_validated_focus } from "./html_input_validated_focus.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
export function app_code_app_new(context) {
  let root = app_code_screen_set(context, fn_name("app_code_app_new"));
  let st = html_input_validated_focus(root, "Search query", [
    html_condition_letters_numbers_underscores_spaces(),
  ]);
  html_input_validated_button(
    root,
    "Username",
    [html_condition_empty_not(), html_condition_letters_numbers_underscores()],
    "Save",
    function on_submit(value) {
      storage_local_set(app_code, "username", value);
      next();
    },
  );
}
