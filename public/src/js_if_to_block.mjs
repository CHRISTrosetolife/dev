import { js_to_block_generic } from "./js_to_block_generic.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_if_to_block(ast) {
  return js_visit_node(ast, "IfStatement", (v) => {
    let { node } = v;
    let properties = ["consequent", "alternate"];
    js_to_block_generic(node, properties, (type, p) => {
      if (p === "consequent") {
        if (type === "IfStatement") {
          return true;
        }
      }
    });
  });
}
