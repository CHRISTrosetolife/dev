import { js_visit_node } from "./js_visit_node.mjs";
export function js_if_to_block(ast) {
  return js_visit_node(ast, "IfStatement", (v) => {
    let { node } = v;
    let properties = ["consequent", "alternate"];
  });
  if (0) 1;
}
