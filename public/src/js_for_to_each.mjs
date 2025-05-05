import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_for_to_each(ast) {
  let v2 = js_visit_node(ast, "ForOfStatement", function (v) {
    let { node } = v;
    let left = object_property_get(node, "left");
    if (false) {
    }
    let right = object_property_get(node, "right");
    let declarations = object_property_get(left, "declarations");
    log({
      node,
    });
  });
  return v2;
}
