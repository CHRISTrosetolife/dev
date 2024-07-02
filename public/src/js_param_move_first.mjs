import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function js_param_move_first(ast, function_name, param_name) {
  assert_arguments_length(arguments, 3);
  assert(string_is, [param_name]);
  assert(string_is, [default_value_string]);
  let needs_imports_add = false;
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
    let default_value = js_parse_expression(default_value_string);
    list_add(args, default_value);
    needs_imports_add = true;
  }
  if (needs_imports_add) {
    await js_imports_add(ast);
  }
  let name = js_declaration_single_name(ast);
  if (!equal(name, function_name)) {
    return;
  }
  let declaration = js_declaration_single(ast);
  let { params } = declaration;
  let param_new = js_parse_expression(param_name);
  list_add(params, param_new);
}
