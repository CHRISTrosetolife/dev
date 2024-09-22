import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function js_param_generic(
  ast,
  function_name,
  each_caller,
  lambda_if_match,
) {
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
    each_caller(args);
  }
  let name = js_declaration_single_name(ast);
  if (!equal(name, function_name)) {
    return;
  }
  let declaration = js_declaration_single(ast);
  let params = js_declaration_to_params(declaration);
  lambda_if_match(params);
}
