import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_visit_find(ast, node_target) {
  let found = null;
  js_visit(ast, function (v) {
    let node = object_property_get(v, "node");
    if (node === node_target) {
      found = v;
    }
  });
  return found;
}
