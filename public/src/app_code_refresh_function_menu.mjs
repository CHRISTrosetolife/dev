import { app_code_button_param_new } from "./app_code_button_param_new.mjs";
import { app_code_batch_upload } from "./app_code_batch_upload.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { object_property_get_curry } from "./object_property_get_curry.mjs";
import { app_code_function_string_change_generic } from "./app_code_function_string_change_generic.mjs";
import { js_node_type_literal_string_is } from "./js_node_type_literal_string_is.mjs";
import { js_string } from "./js_string.mjs";
import { app_code_refresh_function_change } from "./app_code_refresh_function_change.mjs";
import { app_code_button_copy_generic } from "./app_code_button_copy_generic.mjs";
import { file_read } from "./file_read.mjs";
import { file_js_unparse_code } from "./file_js_unparse_code.mjs";
import { app_code_function_selected_get } from "./app_code_function_selected_get.mjs";
import { app_code_button_variablize } from "./app_code_button_variablize.mjs";
import { app_code_button_functionize } from "./app_code_button_functionize.mjs";
import { app_code_button_rename } from "./app_code_button_rename.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
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
import { list_join_space } from "./list_join_space.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
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
      await finish(fn_name("app_code_refresh_function_selection_remove"));
    });
    app_code_button_functionize(
      overlay,
      ast,
      selection_result,
      menu_refresh,
      finish,
      context,
    );
  } else if (object_property_exists(selection_result, "one")) {
    let { visitor, node } =
      app_code_refresh_function_selection_one_get(selection_result);
    if (js_node_type_identifier_is(node)) {
      app_code_button_rename(
        overlay,
        menu_refresh,
        finish,
        ast,
        selection_result,
        context,
      );
    } else if (js_node_type_literal_string_is(node)) {
      app_code_function_string_change_generic(
        context,
        overlay,
        js_string,
        object_property_get_curry("value"),
        menu_refresh,
        finish,
        "String value change",
        "New string value",
        node,
      );
    }
    app_code_function_string_change_generic(
      context,
      overlay,
      js_parse_expression,
      js_unparse,
      menu_refresh,
      finish,
      "Expression value change",
      "New expression value",
      node,
    );
    app_code_button_variablize(overlay, visitor, ast, node, finish);
  } else {
    app_code_button_copy_generic(
      context,
      overlay,
      "Function rename",
      menu_refresh,
      fn_name("function_rename"),
      function (after_value) {
        let v = [function_selected, after_value];
        return v;
      },
      ast_change_finish_change,
    );
    app_code_button_copy_generic(
      context,
      overlay,
      "Function copy",
      menu_refresh,
      fn_name("function_copy"),
      function (after_value) {
        let v3 = [function_selected, after_value];
        return v3;
      },
      ast_change_finish_change,
    );
    app_code_button_param_new(
      overlay,
      context,
      menu_refresh,
      ast,
      function_selected,
      ast_change_finish_change_self,
    );
  }
  let imports_fix = "Imports fix";
  html_button(overlay, imports_fix, async function () {
    await finish(imports_fix);
  });
  app_code_button_menu_app(context, overlay, overlay_remove);
  function overlay_remove() {
    html_remove(overlay);
  }
  async function finish(batch_message) {
    assert(string_is, [batch_message]);
    let before = await file_read(path);
    await js_imports_fix(ast);
    await file_js_unparse_code(ast, path, before);
    await finish(batch_message);
  }
  async function finish(batch_message) {
    await ast_change_finish_outside(batch_message);
    refresh();
    overlay_remove();
  }
  async function ast_change_finish_change_self(batch_message) {
    await ast_change_finish_change(batch_message, function_selected);
  }
  async function ast_change_finish_change(
    batch_message,
    function_name_change_to,
  ) {
    await ast_change_finish_outside(batch_message);
    await app_code_refresh_function_change(context, function_name_change_to);
    overlay_remove();
  }
  async function ast_change_finish_outside(batch_message_part) {
    let batch_message = list_join_space([
      function_selected,
      batch_message_part,
    ]);
    await app_code_batch_upload(context, batch_message);
  }
}
