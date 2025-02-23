import { html_conditions_identifier_fn } from "./html_conditions_identifier_fn.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_inputs_validated_button } from "./html_inputs_validated_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_condition_js_expression_valid } from "./html_condition_js_expression_valid.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { html_focus } from "./html_focus.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { app_code_function_menu_overlay } from "./app_code_function_menu_overlay.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_param_new(
  overlay,
  context,
  menu_refresh,
  ast,
  function_selected,
  ast_change_finish,
) {
  let button_text = "Param new";
  html_button(overlay, button_text, async function () {
    let d = app_code_function_menu_overlay(
      context,
      overlay,
      menu_refresh,
      button_text,
    );
    let existing = js_identifiers_names(ast);
    let input_param_name = html_input_validated(d, "Param name", [
      html_conditions_identifier_fn(),
      html_condition_includes_not(
        existing,
        string_combine_multiple([
          "not be an existing identifier in ",
          function_selected,
        ]),
      ),
    ]);
    html_focus(input_param_name);
    let input_value_default = html_input_validated(
      d,
      "Default value for calling functions",
      [html_condition_empty_not(), html_condition_js_expression_valid()],
    );
    html_value_set(input_value_default, js_code_call(fn_name("error")));
    let button = html_inputs_validated_button(
      d,
      [input_param_name, input_value_default],
      button_text,
      async function () {
        let param_name = html_value_get(input_param_name);
        let value_default = html_value_get(input_value_default);
        await function_param_new(function_selected, param_name, value_default);
        await ast_change_finish(
          list_join_space(
            fn_name("function_param_new"),
            function_selected,
            param_name,
            value_default,
          ),
          after_value,
        );
        overlay_remove();
      },
    );
  });
}
