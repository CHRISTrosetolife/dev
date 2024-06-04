import { visit_log_node } from "./visit_log_node.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_if_to_block(ast) {
  return js_visit_node(ast, "IfStatement", visit_log_node());
  if (0) 1;
}
