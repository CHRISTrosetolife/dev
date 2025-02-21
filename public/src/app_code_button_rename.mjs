import { string_delimit_double } from "./string_delimit_double.mjs";
import { app_code_button_rename_generic } from "./app_code_button_rename_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_function_selection_one_get } from "./app_code_refresh_function_selection_one_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_button_rename(
  overlay,
  menu_refresh,
  ast_change_finish,
  ast,
  selection_result,
  context,
) {
  let selection_rename_text = "Selection rename";
  let input_placeholder = "Name after";
  let error_message = "Identifier already exists";
  let invalid_list_get = function () {
    let existing = js_identifiers_names(ast);
    let v = existing;
    return v;
  };
  async function on_click(on_overlay_result, after_value) {
    js_identifier_rename(ast, on_overlay_result, after_value);
    await ast_change_finish(
      list_join_space([
        fn_name("js_identifier_rename"),
        string_delimit_double(on_overlay_result),
        "to",
        string_delimit_double(after_value),
      ]),
    );
  }
  function on_overlay(d) {
    let { node } =
      app_code_refresh_function_selection_one_get(selection_result);
    let before = object_property_get(node, "name");
    html_p_text_multiple(d, ["Name before:", before]);
    return before;
  }
  app_code_button_rename_generic(
    context,
    overlay,
    selection_rename_text,
    menu_refresh,
    on_overlay,
    invalid_list_get,
    input_placeholder,
    error_message,
    on_click,
  );
}
