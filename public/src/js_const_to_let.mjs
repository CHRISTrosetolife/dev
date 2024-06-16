import { js_visit_node } from "./js_visit_node.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_const_to_let(ast) {
  js_visit_node(ast, "VariableDeclaration", (v) => {
    let { node } = v;
    if (list_includes(["const", "var"], node.kind)) {
      node.kind = "let";
    }
  });
}
