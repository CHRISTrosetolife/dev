import { error } from "./error.mjs";
import { assert } from "./assert.mjs";
import { app_code_property_message } from "./app_code_property_message.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { app_code_batch_name_when } from "./app_code_batch_name_when.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { app_code_latest_object } from "./app_code_latest_object.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_user_upload } from "./app_code_user_upload.mjs";
import { app_code_file_get } from "./app_code_file_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
import { app_code_batch_path_get } from "./app_code_batch_path_get.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_next } from "./list_next.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { list_find_last } from "./list_find_last.mjs";
import { js_variablize } from "./js_variablize.mjs";
import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { app_code_refresh_function_selection_removals } from "./app_code_refresh_function_selection_removals.mjs";
import { log } from "./log.mjs";
import { js_identifiers_shadowed_names } from "./js_identifiers_shadowed_names.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_map } from "./list_map.mjs";
import { js_visit_find } from "./js_visit_find.mjs";
import { list_first } from "./list_first.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { app_code_refresh_function_selection_remove } from "./app_code_refresh_function_selection_remove.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_black } from "./html_style_background_color_black.mjs";
import { html_style } from "./html_style.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { storage_local_recent_add } from "./storage_local_recent_add.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { js_parse } from "./js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { html_div } from "./html_div.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { string_is } from "./string_is.mjs";
export async function app_code_refresh_function(context) {
  await html_load(async function () {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    html_style_left(root);
    let function_selected = storage_local_get_context(
      context,
      "function_selected",
    );
    let path = function_name_to_path(function_selected);
    let contents = await app_code_file_get(path);
    let ast = js_parse(contents);
    let args = {
      ast,
    };
    let button_menu = html_button(root, "Function menu", function () {
      let overlay = html_overlay(fn_name("app_code_refresh_function"));
      html_button_back_after(
        overlay,
        string_combine_multiple(["to function: ", function_selected]),
        overlay_remove,
      );
      let selection_result = app_code_refresh_function_selection(args);
      if (object_property_exists(selection_result, "two")) {
        html_button(overlay, "Selection remove", async function () {
          app_code_refresh_function_selection_remove(selection_result);
          ast_change_finish(
            fn_name("app_code_refresh_function_selection_remove"),
          );
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
        html_button(overlay, "Selection variablize", async function () {
          let one = object_property_get(selection_result, "one");
          let visitor = object_property_get(one, "visitor");
          let node2 = object_property_get(visitor, "node");
          let stack2 = object_property_get(visitor, "stack");
          let b = list_find_last(stack2, js_node_type_statement_block_is);
          let list = list_next(stack2, b);
          let list_item = list_next(stack2, list);
          let p = js_variablize(ast, list, list_item, node2);
          object_replace(node2, p);
          await ast_change_finish(
            string_combine_multiple([
              fn_name("js_variablize"),
              " ",
              function_selected,
              ' : "',
              js_unparse(node2),
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
        let when = date_string_iso_file();
        let batch_name = await app_code_batch_name_when(when);
        let batch_path = await app_code_user_upload(
          context,
          batch_name,
          batch_new,
        );
        await app_code_user_upload(
          context,
          app_code_file_name_latest(),
          app_code_latest_object(batch_path, when),
        );
        refresh();
        overlay_remove();
      }
    });
    html_style(button_menu, {
      top: 0,
      position: "sticky",
    });
    let functions_recent_limit = 15;
    storage_local_recent_add(
      context,
      "functions_recent",
      function_selected,
      functions_recent_limit,
    );
    let container = html_div(root);
    html_style_background_color_black(container);
    html_style_rounded_padded(container);
    html_style_monospace(container);
    refresh();
    function refresh() {
      html_clear(container);
      app_code_refresh_function_node(
        object_merge_strict(args, {
          data: {},
          parent: container,
          node: ast,
        }),
      );
    }
  });
}
