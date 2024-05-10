import { js_visit_node } from "./js_visit_node.mjs";
export function js_visit_identifiers(ast, lambda) {
  js_visit_node(ast, "Identifier", lambda);
}
