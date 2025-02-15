import { js_identifiers_scoped_each } from "./js_identifiers_scoped_each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_identifiers_duplicates(ast) {
  js_visit(ast, function (v) {
    let node = object_property_get(v, "node");
    js_identifiers_scoped_each(v, node);
  });
}
