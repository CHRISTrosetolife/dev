import { html_condition_letters_numbers_underscores_spaces } from "./html_condition_letters_numbers_underscores_spaces.mjs";
import { html_input_validated_focus } from "./html_input_validated_focus.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
export function app_code_app_new(context) {
  let root = app_code_screen_set(context, fn_name("app_code_app_new"));
  let st = html_input_validated_focus(root, "Search query", [
    html_condition_letters_numbers_underscores_spaces(),
  ]);
}
