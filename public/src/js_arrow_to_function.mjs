import { object_replace } from "./object_replace.mjs";
import { js_block_statement } from "./js_block_statement.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_arrow_to_function(ast) {
  js_visit_node(ast, "ArrowFunctionExpression", (v) => {
    let { node } = v;
    object_property_set(node, "type", "FunctionExpression");
    let body = object_property_get(node, "body");
    if (!js_node_type_is(body, "BlockStatement")) {
      let wrapped = js_block_statement(body);
      object_replace(body, wrapped);
    }
  });
}
