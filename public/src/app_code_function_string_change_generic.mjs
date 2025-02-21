import { list_join_space } from "./list_join_space.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_empty_arrow } from "./list_empty_arrow.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { app_code_function_action } from "./app_code_function_action.mjs";
export function app_code_function_string_change_generic(
  context,
  overlay,
  input_value_to_node,
  node_to_input_value,
  menu_refresh,
  ast_change_finish,
  button_text,
  input_placeholder,
  node,
  ast,
) {
  app_code_function_action(
    context,
    overlay,
    button_text,
    menu_refresh,
    function on_overlay(d) {
      html_p_text_multiple(d, ["Old value:", js_unparse(node)]);
      let value_old = node_to_input_value(node);
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
      let node_new = input_value_to_node(value_new);
      let node_code_old = js_unparse(node);
      object_replace(node, node_new);
      await ast_change_finish(
        list_join_space([node_code_old, "to", js_unparse(node_new)]),
      );
    },
  );
}
