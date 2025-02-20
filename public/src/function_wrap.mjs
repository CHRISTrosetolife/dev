import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_export_function_declare } from "./js_export_function_declare.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { function_new_generic_ast } from "./function_new_generic_ast.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function function_wrap(function_name, function_name_wrapped) {
  let d = await function_declaration(function_name);
  let params = js_declaration_to_params(d);
  let param_names = list_map_property(params, "name");
  let async_is = object_property_get(d, "async");
  let ast_new = js_export_function_declare(
    function_name_wrapped,
    param_names,
    async_is,
  );
  js_declaration_to_body(ast);
  await function_new_generic_ast(function_name_wrapped, ast);
  return v;
}
