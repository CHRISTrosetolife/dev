import { js_node_identifier_named } from "./js_node_identifier_named.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_visit_identifiers_named(ast, search, lambda) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let e = js_node_identifier_named(node, search);
    if (e) {
      lambda(node);
    }
  });
}
