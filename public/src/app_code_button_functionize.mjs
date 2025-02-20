import { app_code_button_rename_generic } from "./app_code_button_rename_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { error } from "./error.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { list_remove_multiple_from } from "./list_remove_multiple_from.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_overlay_container } from "./html_overlay_container.mjs";
import { js_node_type_get } from "./js_node_type_get.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_generic } from "./js_visit_generic.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_map } from "./list_map.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { js_visit_find } from "./js_visit_find.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_refresh_function_selection_removals } from "./app_code_refresh_function_selection_removals.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_identifiers_shadowed_names } from "./js_identifiers_shadowed_names.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_functionize(
  overlay,
  ast,
  selection_result,
  menu_refresh,
  ast_change_finish,
) {
  let selection_rename_text = "Selection functionize";
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
      string_combine_multiple([
        fn_name("js_identifier_rename"),
        " ",
        function_selected,
        ' : "',
        on_overlay_result,
        '" to "',
        after_value,
        '"',
      ]),
    );
  }
  function on_overlay(d) {
    html_p_text_multiple(d, [
      "New function params:",
      list_join_comma_space(param_names),
    ]);
  }
  app_code_button_rename_generic(
    overlay,
    selection_rename_text,
    menu_refresh,
    on_overlay,
    invalid_list_get,
    input_placeholder,
    error_message,
    on_click,
  );
  html_button(overlay, "", async function () {
    let s = js_identifiers_shadowed_names(ast);
    if (list_empty_not_is(s)) {
      alert(
        string_combine_multiple([
          "the same identifier is defined as a shadow: ",
          list_join_comma_space(s),
        ]),
      );
      error();
    }
    let { ancestor_common, low, high, removals } =
      app_code_refresh_function_selection_removals(selection_result);
    let f = list_first(removals);
    let v = js_visit_find(ast, f);
    let inputs_possible = js_identifiers_scoped(v);
    let removed_identifiers_names_lists = list_map(
      removals,
      js_identifiers_names,
    );
    let removed_identifiers_names = list_flatten(
      removed_identifiers_names_lists,
    );
    let intersected = list_intersect(
      inputs_possible,
      removed_identifiers_names,
    );
    let imports_names = js_imports_existing_names(ast);
    let param_names = list_difference(intersected, imports_names);
    log({
      param_names,
      inputs_possible,
    });
    let async_is = false;
    each(removals, function (r) {
      js_visit_generic(
        r,
        function (v) {
          let node2 = object_property_get(v, "node");
          if (js_node_type_is(node2, "AwaitExpression")) {
            async_is = true;
            let v2 = true;
            return v2;
          }
        },
        function (n) {
          let v3 = !js_node_is(n) || !js_function_types_is(js_node_type_get(n));
          return v3;
        },
      );
      if (async_is) {
        let v4 = true;
        return v4;
      }
    });
    log({
      async_is,
    });
    let d = html_overlay_container(overlay, menu_refresh);
    html_p_text_multiple(d, [
      "New function params:",
      list_join_comma_space(param_names),
    ]);
    list_remove_multiple_from(ancestor_common, low, high);
    js_code_export_function_declare();
    return;
    await ast_change_finish(error("todo"));
  });
}
