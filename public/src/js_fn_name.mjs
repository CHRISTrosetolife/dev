import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_fn_name(ast) {
  log({});
  js_visit_node(ast, "MemberExpression", (v) => {
    log({
      v,
    });
  });
}
