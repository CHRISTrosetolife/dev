import { js_blockify } from "./js_blockify.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_function_expression_simplify(ast) {
  js_visit_node(ast, "FunctionExpression", (v) => {
    let { node } = v;
    let body = object_property_get(node, "body");
    js_blockify(body);
  });
}
