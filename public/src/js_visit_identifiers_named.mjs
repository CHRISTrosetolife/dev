import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_visit_identifiers_named(ast, name, lambda) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let name = object_property_get(node, "name");
    if (equal(name, name)) {
      lambda(node);
    }
  });
}
