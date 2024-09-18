import { js_to_block_generic } from "./js_to_block_generic.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_template_to_function(ast) {
  return js_visit_node(ast, "IfStatement", (v) => {
    let { node } = v;
    let properties = ["consequent", "alternate"];
    js_to_block_generic(node, properties, (type, p) => {
      if (p === "alternate") {
        return type === "IfStatement";
      }
      return false;
    });
  });
}
