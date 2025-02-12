import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_visit_find(identifier) {
  let found = null;
  js_visit(ast, (v) => {
    let node = object_property_get(v, "node");
    if (node === identifier) {
      found = v;
    }
  });
  return found;
}
