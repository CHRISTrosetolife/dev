import { list_clear } from "./list_clear.mjs";
import { each_two } from "./each_two.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { range } from "./range.mjs";
import { js_code_object_properties } from "./js_code_object_properties.mjs";
import { function_calls_params_size_assert_list } from "./function_calls_params_size_assert_list.mjs";
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
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
export async function function_params_objectify(function_name) {
  assert_arguments_length(arguments, 1);
  let params_names_fn;
  await data_identifiers_each_transform_params(
    function_name,
    noop,
    function on_define(params, declaration, ast) {
      params_names_fn = js_identifiers_to_names(params);
      let duplicates = js_identifiers_duplicates(ast);
      let i = list_intersect(params_names_fn, duplicates);
      assert(list_empty_is, [i]);
      let body = js_declaration_to_body(declaration);
      let arg_name = js_name_unique(ast, "arg");
      let destructure_code = js_code_destructure_assign(
        params_names_fn,
        arg_name,
      );
      let destructure = js_parse_first(destructure_code);
      list_add_first(body, destructure);
    },
  );
  params_names_fn = await function_params_names(function_name);
  assert(list_is, [params_names_fn]);
  await function_calls_params_size_assert_list(function_name, params_names_fn);
  await data_identifiers_each_transform_params(
    function_name,
    function on_call(params, declaration, ast) {
      let c = js_code_object_properties(
        params_names_fn,
        list_map(range(list_size(params_names_fn)), function () {
          let v2 = "0";
          return v2;
        }),
      );
      let p = js_parse_expression(c);
      let properties = object_property_get(p, "properties");
      each_two(properties, params, function (property, param) {
        object_property_set(property, "value", param);
      });
      list_clear(params);
      list_add(p);
    },
    noop,
  );
}
