import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_arrow_to_function(ast) {
  js_visit_node(ast, "ArrowFunctionExpression", (v) => {
    let { node } = v;
    object_property_set(node, "type", "FunctionExpression");
    let body = object_property_get(node, "body");
    if (false) {
    }
    log({
      node,
    });
  });
}
