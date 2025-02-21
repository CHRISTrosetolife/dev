import { html_input_validated_button_focus } from "./html_input_validated_button_focus.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_code_function_selected_get } from "./app_code_function_selected_get.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_conditions_letters_numbers_underscores_spaces_list_includes_not } from "./html_conditions_letters_numbers_underscores_spaces_list_includes_not.mjs";
import { html_overlay_container } from "./html_overlay_container.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_rename_generic(
  context,
  overlay,
  button_text,
  menu_refresh,
  on_overlay,
  invalid_list_get,
  input_placeholder,
  error_message,
  on_click,
) {
  html_button(overlay, button_text, async function () {
    let function_selected = app_code_function_selected_get(context);
    let d = html_overlay_container(overlay, menu_refresh);
    html_p_text(
      d,
      string_combine_multiple([
        "Function: ",
        function_selected,
        " : ",
        button_text,
      ]),
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
    async function on_submit() {
      let after_value = html_value_get(input);
      await on_click(on_overlay_result, after_value);
    }
  });
  async function conditions_get() {
    let invalid = await invalid_list_get();
    let conditions =
      html_conditions_letters_numbers_underscores_spaces_list_includes_not(
        error_message,
        invalid,
      );
    return conditions;
  }
}
