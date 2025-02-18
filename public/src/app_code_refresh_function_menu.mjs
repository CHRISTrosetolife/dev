import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { html_condition_letters_numbers_underscores_spaces } from "./html_condition_letters_numbers_underscores_spaces.mjs";
import { html_input_validated_focus } from "./html_input_validated_focus.mjs";
import { app_code_latest_object } from "./app_code_latest_object.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_user_upload } from "./app_code_user_upload.mjs";
import { app_code_batch_name_when } from "./app_code_batch_name_when.mjs";
import { date_now } from "./date_now.mjs";
import { app_code_property_message } from "./app_code_property_message.mjs";
import { app_code_batch_path_get } from "./app_code_batch_path_get.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_variablize } from "./js_variablize.mjs";
import { list_next } from "./list_next.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { list_find_last } from "./list_find_last.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_identifier_is } from "./js_node_type_identifier_is.mjs";
import { app_code_refresh_function_selection_one_get } from "./app_code_refresh_function_selection_one_get.mjs";
import { error } from "./error.mjs";
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
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_identifiers_shadowed_names } from "./js_identifiers_shadowed_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_refresh_function_selection_remove } from "./app_code_refresh_function_selection_remove.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_code_refresh_function_menu(arg) {
  let { overlay, function_selected, args, ast, context, path, refresh } = arg;
  html_clear(overlay);
  html_button_back_after(
    overlay,
    string_combine_multiple(["to function: ", function_selected]),
    overlay_remove,
  );
  let selection_result = app_code_refresh_function_selection(args);
  if (object_property_exists(selection_result, "two")) {
    html_button(overlay, "Selection remove", async function () {
      app_code_refresh_function_selection_remove(selection_result);
      ast_change_finish(fn_name("app_code_refresh_function_selection_remove"));
    });
    html_button(overlay, "Selection functionize", async function () {
      let s = js_identifiers_shadowed_names(ast);
      if (list_empty_not_is(s)) {
        alert(
          string_combine_multiple([
            "the same identifier is defined as a shadow: ",
            list_join_comma_space(s),
          ]),
        );
        return;
      }
      let { removals } =
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
      await ast_change_finish(error("todo"));
    });
  } else if (object_property_exists(selection_result, "one")) {
    let { visitor, node } =
      app_code_refresh_function_selection_one_get(selection_result);
    if (js_node_type_identifier_is(node)) {
      html_button(overlay, "Selection rename", async function () {
        html_clear(overlay);
        let { node } =
          app_code_refresh_function_selection_one_get(selection_result);
        let name = object_property_get(node, "name");
        html_p_text(overlay, "Name before:");
        html_p_text(overlay, name);
        html_input_validated_focus(root, "Search query");
        html_input_validated_button(
          overlay,
          "Name after",
          [html_condition_letters_numbers_underscores_spaces()],
          "Rename",
          function () {},
        );
        js_identifier_rename(ast, name, error());
      });
    }
    html_button(overlay, "Selection variablize", async function () {
      let stack2 = object_property_get(visitor, "stack");
      let b = list_find_last(stack2, js_node_type_statement_block_is);
      let list = list_next(stack2, b);
      let list_item = list_next(stack2, list);
      let p = js_variablize(ast, list, list_item, node);
      let node2_code = js_unparse(node);
      object_replace(node, p);
      await ast_change_finish(
        string_combine_multiple([
          fn_name("js_variablize"),
          " ",
          function_selected,
          ' : "',
          node2_code,
          '" to "',
          js_unparse(p),
          '"',
        ]),
      );
    });
  }
  app_code_button_menu_app(context, overlay, overlay_remove);
  function overlay_remove() {
    html_remove(overlay);
  }
  async function ast_change_finish(message) {
    assert(string_is, [message]);
    await file_js_unparse(path, ast);
    let fcs = global_file_changes();
    let files = {};
    each(fcs, function (fc) {
      let path2 = object_property_get(fc, "path");
      object_property_set(
        files,
        path2,
        object_properties_new(fc, [app_code_property_contents()]),
      );
    });
    let batch_path_previous = await app_code_batch_path_get();
    let batch_new = {
      files,
      batch_path_previous,
      [app_code_property_message()]: message,
    };
    let when = date_now();
    let batch_name = await app_code_batch_name_when(when);
    let batch_path = await app_code_user_upload(context, batch_name, batch_new);
    await app_code_user_upload(
      context,
      app_code_file_name_latest(),
      app_code_latest_object(batch_path, when),
    );
    refresh();
    overlay_remove();
  }
}
