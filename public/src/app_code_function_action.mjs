import { app_code_function_menu_overlay } from "./app_code_function_menu_overlay.mjs";
import { html_element_select } from "./html_element_select.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_validated_button_focus } from "./html_input_validated_button_focus.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_function_action(
  context,
  overlay,
  button_text,
  menu_refresh,
  on_overlay,
  conditions_get,
  input_placeholder,
  on_click,
) {
  html_button(overlay, button_text, async function () {
    let d = app_code_function_menu_overlay(
      context,
      overlay,
      menu_refresh,
      button_text,
    );
    let on_overlay_result = on_overlay(d);
    let conditions = await conditions_get();
    let input = html_input_validated_button_focus(
      d,
      input_placeholder,
      conditions,
      button_text,
      on_submit,
    );
    let f = fn_name("app_code_function_action");
    if (object_property_exists(on_overlay_result, f)) {
      let o = object_property_get(on_overlay_result, f);
      let p = "input_value";
      if (object_property_exists(o, p)) {
        let v = object_property_get(o, p);
        html_value_set(input, v);
        html_element_select(input);
      }
    }
    async function on_submit() {
      let after_value = html_value_get(input);
      await on_click(on_overlay_result, after_value);
    }
  });
}
