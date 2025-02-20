import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_variablize } from "./js_variablize.mjs";
import { list_next } from "./list_next.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { list_find_last } from "./list_find_last.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_variablize(
  overlay,
  visitor,
  ast,
  node,
  ast_change_finish,
  function_selected,
) {
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
