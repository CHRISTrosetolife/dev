import { file_read } from "./file_read.mjs";
import { file_js_unparse_code } from "./file_js_unparse_code.mjs";
import { app_code_user_upload_batch } from "./app_code_user_upload_batch.mjs";
import { app_code_function_selected_get } from "./app_code_function_selected_get.mjs";
import { app_code_button_variablize } from "./app_code_button_variablize.mjs";
import { app_code_button_functionize } from "./app_code_button_functionize.mjs";
import { app_code_button_rename } from "./app_code_button_rename.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_identifier_is } from "./js_node_type_identifier_is.mjs";
import { app_code_refresh_function_selection_one_get } from "./app_code_refresh_function_selection_one_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_refresh_function_selection_remove } from "./app_code_refresh_function_selection_remove.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code_refresh_function_selection } from "./app_code_refresh_function_selection.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_code_refresh_function_menu(arg) {
  let { overlay, args, ast, context, path, refresh } = arg;
  let menu_refresh = function () {
    let v2 = app_code_refresh_function_menu(arg);
    return v2;
  };
  let function_selected = app_code_function_selected_get(context);
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
    app_code_button_functionize(
      overlay,
      ast,
      selection_result,
      menu_refresh,
      ast_change_finish,
      context,
    );
  } else if (object_property_exists(selection_result, "one")) {
    let { visitor, node } =
      app_code_refresh_function_selection_one_get(selection_result);
    if (js_node_type_identifier_is(node)) {
      app_code_button_rename(
        overlay,
        menu_refresh,
        ast_change_finish,
        ast,
        selection_result,
        context,
      );
    }
    app_code_button_variablize(overlay, visitor, ast, node, ast_change_finish);
  } else {
    html_button(overlay, "Function copy", async function () {
      app_code_refresh_function_selection_remove(selection_result);
      ast_change_finish(fn_name("app_code_refresh_function_selection_remove"));
    });
  }
  app_code_button_menu_app(context, overlay, overlay_remove);
  function overlay_remove() {
    html_remove(overlay);
  }
  async function ast_change_finish(batch_message) {
    assert(string_is, [batch_message]);
    let before = await file_read(path);
    await file_js_unparse_code(ast, path, before);
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
    let upload = true;
    if (upload) {
      await app_code_user_upload_batch(context, files, batch_message);
    }
    refresh();
    overlay_remove();
  }
}
