import { js_visit_node } from "./js_visit_node.mjs";
export function js_fn_name(ast) {
  js_visit_node(ast, "MemberExpression", (v) => {});
}
