import { functions_calls_migrate } from "./functions_calls_migrate.mjs";
import { js_node_identifier_named } from "./js_node_identifier_named.mjs";
import { list_last } from "./list_last.mjs";
import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { assert } from "./assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
export async function function_new_generic_migrate() {
  let f_name = fn_name("function_new_generic_code");
  let v = await functions_calls_migrate(f_name, migrate);
  let param_names = await function_params_names(f_name);
  return v;
  function migrate(params) {
    assert(lists_sizes_equal, [[params, param_names]]);
    let last = list_last(params);
    if (js_node_identifier_named(last, fn_name("file_overwrite"))) {
      object_replace(last, js_parse_expression("true"));
    } else if (js_node_identifier_named(last, fn_name("file_write"))) {
      object_replace(last, js_parse_expression("false"));
    }
  }
}
