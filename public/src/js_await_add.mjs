import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_await_add(ast) {
  js_visit_node(ast, "CallExpression", (v) => {
    log({
      v,
    });
  });
}
