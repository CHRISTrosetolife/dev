import { js_identifiers_duplicates } from "./js_identifiers_duplicates.mjs";
import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { data_identifiers_each } from "./data_identifiers_each.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { noop } from "./noop.mjs";
export async function function_params_objectify(function_name) {
  assert_arguments_length(arguments, 1);
  await data_identifiers_each(function_name, async function lambda(f_name) {
    await function_transform(f_name, function js_params_objectify(ast) {
      js_param_generic(
        ast,
        function_name,
        noop,
        function (params, declaration) {
          let body = js_declaration_to_body(declaration);
          js_identifiers_duplicates();
          js_identifiers_to_names(params);
        },
      );
    });
  });
}
