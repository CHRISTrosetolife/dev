import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { html_condition_includes_not } from "./html_condition_includes_not.mjs";
import { html_condition_identifier_fn } from "./html_condition_identifier_fn.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { app_code_function_menu_overlay } from "./app_code_function_menu_overlay.mjs";
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
import { js_identifiers_names } from "./js_identifiers_names.mjs";
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
      await ast_change_finish(
        fn_name("app_code_refresh_function_selection_remove"),
      );
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
    } else if (js_node_type_literal_string_is(node)) {
      app_code_function_string_change_generic(
        context,
        overlay,
        js_string,
        object_property_get_curry("value"),
        menu_refresh,
        ast_change_finish,
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
      ast_change_finish,
      "Expression value change",
      "New expression value",
      node,
    );
    app_code_button_variablize(overlay, visitor, ast, node, ast_change_finish);
  } else {
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
        html_condition_identifier_fn(),
        html_condition_includes_not(
          existing,
          string_combine_multiple([
            "not be an existing identifier in ",
            function_selected,
          ]),
        ),
      ]);
      let input_value_initial = html_input_validated(
        d,
        "Initial value for calling functions",
        [
          html_condition_empty_not(),
          {
            message: function (value) {
              let v4 = "be valid a JavaScript expression";
              return v4;
            },
            condition: function (value) {
              try {
                js_parse_expression(value);
              } catch (e) {
                let v5 = false;
                return v5;
              }
              let v6 = true;
              return v6;
            },
          },
        ],
      );
    });
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
      overlay_remove,
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
      overlay_remove,
    );
  }
  let imports_fix = "Imports fix";
  html_button(overlay, imports_fix, async function () {
    await ast_change_finish(imports_fix);
  });
  app_code_button_menu_app(context, overlay, overlay_remove);
  function overlay_remove() {
    html_remove(overlay);
  }
  async function ast_change_finish(batch_message) {
    assert(string_is, [batch_message]);
    let before = await file_read(path);
    await js_imports_fix(ast);
    await file_js_unparse_code(ast, path, before);
    await ast_change_finish_outside(batch_message);
    refresh();
    overlay_remove();
  }
  async function ast_change_finish_change(
    batch_message,
    function_name_change_to,
  ) {
    await ast_change_finish_outside(batch_message);
    await app_code_refresh_function_change(function_name_change_to);
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
