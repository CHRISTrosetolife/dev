import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { apps_list } from "./apps_list.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_refresh_app_new(context) {
  let root = app_code_screen_set(context, fn_name("app_code_refresh_app_new"));
  let existing = apps_list();
  let message = "not be the name of an existing app";
  let ib = html_input_validated_button(
    root,
    "App name",
    list_concat(html_condition_identifier_fn_part(), [
      html_condition_includes_not(existing, message),
    ]),
    "New app",
    function on_submit(value) {},
  );
  html_focus(object_property_get(ib, "input"));
}
