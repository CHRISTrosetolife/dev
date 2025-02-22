import { object_property_get } from "./object_property_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { app_code_refresh_function_change } from "./app_code_refresh_function_change.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { noop } from "./noop.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
export function app_code_refresh_app_new_generic(
  context,
  function_this,
  input_placeholder,
  conditions,
  button_text,
  on_submit,
) {
  let root = app_code_screen_set(context, function_this);
  app_code_button_menu_app(context, root, noop);
  let ib = html_input_validated_button(
    root,
    input_placeholder,
    conditions,
    button_text,
    async function (value) {
      let f_name_new = await on_submit(value);
      await app_code_refresh_function_change(context, f_name_new);
    },
  );
  html_focus(object_property_get(ib, "input"));
}
