import { log } from "./log.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_function_expression_simplify(ast) {
  js_visit_node(ast, "FunctionExpression", (v) => {
    let { node } = v;
    let body = object_property_get(node, "body");
    assert(js_node_type_statement_block_is, [body]);
    let body2 = object_property_get(body, "body");
    log({
      body,
    });
  });
}
