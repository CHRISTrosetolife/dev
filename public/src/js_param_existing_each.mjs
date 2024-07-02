import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function js_param_existing_each(ast, function_name, lambda) {
  let nodes = js_node_type(ast, "CallExpression");
  for (let node of nodes) {
    let { callee } = node;
    let { type } = callee;
    if (!equal(type, "Identifier")) {
      continue;
    }
    let { name } = callee;
    if (!equal(name, function_name)) {
      continue;
    }
    let { arguments: args } = node;
    lambda(args);
  }
}
