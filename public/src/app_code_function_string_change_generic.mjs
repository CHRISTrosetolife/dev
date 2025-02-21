import { list_join_space } from "./list_join_space.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_empty_arrow } from "./list_empty_arrow.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { app_code_function_action } from "./app_code_function_action.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_function_string_change_generic(
  context,
  overlay,
  value_to_node,
  input_value_get,
  button_text,
  menu_refresh,
  input_placeholder,
  node,
  ast_change_finish,
) {
  html_button(overlay, button_text, async function () {
    app_code_function_action(
      context,
      overlay,
      button_text,
      menu_refresh,
      function on_overlay(node) {
        html_p_text_multiple(overlay, ["Old value:", js_unparse(node)]);
        let value_old = input_value_get(node);
        let v4 = {
          [fn_name("app_code_function_action")]: {
            input_value: value_old,
          },
        };
        return v4;
      },
      list_empty_arrow(),
      input_placeholder,
      async function (on_overlay_result, value_new) {
        let node_new = value_to_node(value_new);
        let node_code_old = js_unparse(node);
        object_replace(node, node_new);
        await ast_change_finish(
          list_join_space([node_code_old, "to", js_unparse(node_new)]),
        );
      },
    );
  });
}
