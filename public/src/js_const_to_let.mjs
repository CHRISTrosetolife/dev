import { js_visit_node } from "./js_visit_node.mjs";
export function js_const_to_let(ast) {
  js_visit_node(ast, "VariableDeclaration", (v) => {
    let { node } = v;
  });
}
