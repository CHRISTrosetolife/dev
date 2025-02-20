import { html_focus } from "./html_focus.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_conditions_letters_numbers_underscores_spaces_list_includes_not } from "./html_conditions_letters_numbers_underscores_spaces_list_includes_not.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_function_selection_one_get } from "./app_code_refresh_function_selection_one_get.mjs";
import { html_overlay_container } from "./html_overlay_container.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_rename(
  overlay,
  menu_refresh,
  selection_result,
  ast,
  ast_change_finish,
  function_selected,
) {
  let selection_rename_text = "Selection rename";
  html_button(overlay, selection_rename_text, async function () {
    let d = html_overlay_container(overlay, menu_refresh);
    let { node } =
      app_code_refresh_function_selection_one_get(selection_result);
    let before = object_property_get(node, "name");
    html_p_text_multiple(d, ["Name before:", before]);
    let existing = js_identifiers_names(ast);
    let input;
    let message = "Identifier already exists";
    let after = html_input_validated_button(
      d,
      "Name after",
      html_conditions_letters_numbers_underscores_spaces_list_includes_not(
        message,
        existing,
      ),
      selection_rename_text,
      async function () {
        let after_value = html_value_get(input);
        js_identifier_rename(ast, before, after_value);
        await ast_change_finish(
          string_combine_multiple([
            fn_name("js_identifier_rename"),
            " ",
            function_selected,
            ' : "',
            before,
            '" to "',
            after_value,
            '"',
          ]),
        );
      },
    );
    input = object_property_get(after, "input");
    html_focus(input);
  });
}
