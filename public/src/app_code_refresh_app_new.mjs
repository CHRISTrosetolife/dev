import { noop } from "./noop.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_invoke } from "./app_code_invoke.mjs";
import { app_code_refresh_function_change } from "./app_code_refresh_function_change.mjs";
import { app_new } from "./app_new.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_code_refresh_app_new(context) {
  let function_this = fn_name("app_code_refresh_app_new");
  let root = app_code_screen_set(context, function_this);
  app_code_button_menu_app(context, root, noop);
  let existing = await app_code_invoke(fn_name("apps_list"));
  let message = "not be the name of an existing app";
  let input_placeholder = "App name";
  let ib = html_input_validated_button(
    root,
    input_placeholder,
    list_concat(html_condition_identifier_fn_part(), [
      html_condition_includes_not(existing, message),
    ]),
    "New app",
    async function on_submit(value) {
      let f_name_new = await app_new(value);
      await app_code_refresh_function_change(context, f_name_new);
    },
  );
  html_focus(object_property_get(ib, "input"));
}
