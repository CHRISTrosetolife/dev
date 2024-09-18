import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_template_to_function(ast) {
  return js_visit_node(ast, "TemplateLiteral", (v) => {
    let { node } = v;
    let { quasis } = node;
    log(node);
  });
}
