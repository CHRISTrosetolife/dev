import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
import { function_data } from "./function_data.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_await } from "./js_code_await.mjs";
export async function function_cache_new(function_name) {
  let param_names = await function_params_names(function_name);
  let joined = list_join_comma_space(param_names);
  let cache_name = function_cache_name(function_name);
  await function_new_generic_code(
    cache_name,
    joined,
    js_code_statement_return(
      js_code_await(
        js_code_call_args(fn_name("function_cache"), [
          function_name,
          js_code_array(param_names),
        ]),
      ),
    ),
    false,
    [],
    true,
    false,
  );
  await function_data(cache_name);
  return {
    cache_name,
  };
}
