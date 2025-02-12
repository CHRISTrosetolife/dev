import { list_last } from "./list_last.mjs";
import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { assert } from "./assert.mjs";
import { log } from "./log.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
export async function function_new_generic_migrate() {
  let f_name = fn_name("function_new_generic");
  let results = await functions_identifier(f_name);
  let param_names = await function_params_names(f_name);
  await each_object_async(results, async (f_name_result) => {
    log({
      f_name_result,
    });
    await function_transform(f_name_result, async (ast) => {
      js_visit_calls(ast, f_name, (params) => {
        assert(lists_sizes_equal, [[params, param_names]]);
        let last = list_last(params);
        if (false) {
        }
      });
    });
  });
  return results;
}
