import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_fn_name(ast) {
  fn_name.name;
  js_visit_node(ast, "MemberExpression", (v) => {
    let { node } = v;
    if (false) {
    }
    log(node);
  });
}
