import { data_identifiers_each_transform } from "./data_identifiers_each_transform.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_code_destructure_assign } from "./js_code_destructure_assign.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { js_identifiers_duplicates } from "./js_identifiers_duplicates.mjs";
import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { noop } from "./noop.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { assert } from "./assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
export async function function_params_objectify(function_name) {
  assert_arguments_length(arguments, 1);
  await data_identifiers_each_transform(
    function_name,
    function js_params_objectify(ast) {
      js_param_generic(ast, function_name, noop, on_define);
    },
  );
  function on_define(params, declaration, ast) {
    let params_names = js_identifiers_to_names(params);
    let duplicates = js_identifiers_duplicates(ast);
    let i = list_intersect(params_names, duplicates);
    assert(list_empty_is, [i]);
    let body = js_declaration_to_body(declaration);
    let arg_name = js_name_unique(ast, "arg");
    let destructure_code = js_code_destructure_assign(params_names, arg_name);
    let destructure = js_parse_first(destructure_code);
    list_add_first(body, destructure);
  }
}
