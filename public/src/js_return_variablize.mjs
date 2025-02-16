import { js_return_argument_type } from "./js_return_argument_type.mjs";
import { js_variablize } from "./js_variablize.mjs";
import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
export function js_return_variablize(ast) {
  let return_statements = js_node_type_visitor(ast, "ReturnStatement");
  for (let v of return_statements) {
    let { node } = v;
    if (js_return_argument_type(node) === "Identifier") {
      continue;
    }
    let { parent } = v;
    let init = node.argument;
    let parsed2 = js_variablize(ast, parent, node, init);
    node.argument = parsed2;
  }
}
