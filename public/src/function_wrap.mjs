import { list_add } from "./list_add.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { js_expression_call_args_await_maybe } from "./js_expression_call_args_await_maybe.mjs";
import { function_unalias } from "./function_unalias.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { js_export_function_declare } from "./js_export_function_declare.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { function_new_generic_ast } from "./function_new_generic_ast.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function function_wrap(function_name, function_name_wrapped) {
  assert_arguments_length(arguments, 2);
  function_name = function_unalias(function_name);
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
  let param_names = list_map_property(params, "name");
  let async_is = object_property_get(d, "async");
  let ast = js_export_function_declare(
    function_name_wrapped,
    param_names,
    async_is,
  );
  let body = js_declaration_single_body(ast);
  let e = js_expression_call_args_await_maybe(
    function_name,
    param_names,
    async_is,
  );
  let r = js_statement_return(e);
  list_add(body, r);
  await function_new_generic_ast(function_name_wrapped, ast, false, true);
}
