import { js_node_type_is } from "./js_node_type_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_fn_name(ast) {
  fn_name.name;
  js_visit_node(ast, "MemberExpression", (v) => {
    let { node } = v;
    let r = false;
    if (!js_node_type_is(node, "Identifier")) {
      r = true;
    }
    log(node);
  });
}
