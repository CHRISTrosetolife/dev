import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_visit_identifiers_named(ast, search, lambda) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let identifier_is = js_node_is("Identifier");
    let name = object_property_get(node, "name");
    if (equal(name, search)) {
      lambda(node);
    }
  });
}
