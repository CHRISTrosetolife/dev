import { object_property_get } from "./object_property_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
export function app_code_app_new(context) {
  let root = app_code_screen_set(context, fn_name("app_code_app_new"));
  let ib = html_input_validated_button(
    root,
    "App name",
    [html_condition_empty_not(), html_condition_letters_numbers_underscores()],
    "Save",
    function on_submit(value) {},
  );
  html_focus(object_property_get(ib, "button"));
}
