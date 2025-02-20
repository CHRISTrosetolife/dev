import { html_focus } from "./html_focus.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_conditions_letters_numbers_underscores_spaces_list_includes_not } from "./html_conditions_letters_numbers_underscores_spaces_list_includes_not.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { html_overlay_container } from "./html_overlay_container.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_rename_generic(
  overlay,
  selection_rename_text,
  menu_refresh,
  on_overlay,
  invalid_list_get,
  input_placeholder,
  error_message,
  on_click,
) {
  html_button(overlay, selection_rename_text, async function () {
    let d = html_overlay_container(overlay, menu_refresh);
    let on_overlay_result = on_overlay(d);
    let invalid = await invalid_list_get();
    let input;
    let after = html_input_validated_button(
      d,
      input_placeholder,
      html_conditions_letters_numbers_underscores_spaces_list_includes_not(
        error_message,
        invalid,
      ),
      selection_rename_text,
      async function () {
        let after_value = html_value_get(input);
        await on_click(on_overlay_result, after_value);
      },
    );
    input = object_property_get(after, "input");
    html_focus(input);
  });
}
