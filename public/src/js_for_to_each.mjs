import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_for_to_each(ast) {
  let v2 = js_visit_node(ast, "ForOfStatement", function (v) {
    let { node } = v;
    log({
      node,
    });
  });
  return v2;
}
