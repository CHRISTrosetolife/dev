import { never } from "./never.mjs";
import { js_to_block_generic } from "./js_to_block_generic.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_for_to_each(ast) {
  return js_visit_node(ast, "WhileStatement", (v) => {
    let { node } = v;
    js_to_block_generic(node, ["body"], never);
  });
}
