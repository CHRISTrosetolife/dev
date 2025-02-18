import { list_size_equal } from "./list_size_equal.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { noop } from "./noop.mjs";
import { data_identifiers_each_transform_params } from "./data_identifiers_each_transform_params.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_code_destructure_assign } from "./js_code_destructure_assign.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { js_identifiers_duplicates } from "./js_identifiers_duplicates.mjs";
import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { assert } from "./assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";
export async function function_params_objectify(function_name) {
  assert_arguments_length(arguments, 1);
  let params_names;
  await data_identifiers_each_transform_params(
    function_name,
    noop,
    function on_define(params, declaration, ast) {
      params_names = js_identifiers_to_names(params);
      let duplicates = js_identifiers_duplicates(ast);
      let i = list_intersect(params_names, duplicates);
      assert(list_empty_is, [i]);
      let body = js_declaration_to_body(declaration);
      let arg_name = js_name_unique(ast, "arg");
      let destructure_code = js_code_destructure_assign(params_names, arg_name);
      let destructure = js_parse_first(destructure_code);
      list_add_first(body, destructure);
    },
  );
  assert(list_is, [params_names]);
  await data_identifiers_each_transform_params(
    function_name,
    function on_call(params) {
      assert(list_size_equal, [params, list_size(params_names)]);
    },
    noop,
  );
  await data_identifiers_each_transform_params(
    function_name,
    function on_call(params, declaration, ast) {
      assert(list_size_is, [params, list_size(params_names)]);
      list_map_index();
      let params_names = js_identifiers_to_names(params);
      let duplicates = js_identifiers_duplicates(ast);
      let i = list_intersect(params_names, duplicates);
      assert(list_empty_is, [i]);
      let body = js_declaration_to_body(declaration);
      let arg_name = js_name_unique(ast, "arg");
      let destructure_code = js_code_destructure_assign(params_names, arg_name);
      let destructure = js_parse_first(destructure_code);
      list_add_first(body, destructure);
    },
    noop,
  );
}
