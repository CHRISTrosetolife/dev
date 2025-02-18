import { js_expression_call_args } from "./js_expression_call_args.mjs";
import { js_code_declare_assign_0 } from "./js_code_declare_assign_0.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { js_body_nested } from "./js_body_nested.mjs";
import { js_variable_declaration_init } from "./js_variable_declaration_init.mjs";
import { js_export_single } from "./js_export_single.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
export async function js_call_append(ast, a) {
  let { function_name, args, result_name } = a;
  let e = js_export_single(ast);
  let { declaration } = e;
  let body = js_body_nested(declaration);
  let mapped = list_map(args, js_parse_expression);
  let call = js_expression_call_args(function_name, mapped);
  let node;
  if (string_empty_is(result_name)) {
    node = {
      type: "ExpressionStatement",
      expression: call,
    };
  } else {
    node = js_code_declare_assign_0(result_name);
    js_variable_declaration_init(node, call);
  }
  list_add(body, node);
  let function_path = function_name_to_path(function_name);
  if (await file_exists(function_path)) {
    js_imports_add_specified(ast, [function_name]);
  }
}
