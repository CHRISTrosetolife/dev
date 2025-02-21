import { app_code_function_action } from "./app_code_function_action.mjs";
import { html_conditions_letters_numbers_underscores_spaces_list_includes_not } from "./html_conditions_letters_numbers_underscores_spaces_list_includes_not.mjs";
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
  app_code_function_action(
    overlay,
    button_text,
    context,
    menu_refresh,
    on_overlay,
    conditions_get,
    input_placeholder,
    on_click,
  );
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
