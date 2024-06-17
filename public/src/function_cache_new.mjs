import { function_cache_name } from "./function_cache_name.mjs";
import { function_data } from "./function_data.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { function_cache } from "./function_cache.mjs";
import { file_write } from "./file_write.mjs";
export async function function_cache_new(function_name) {
  let cache_name = function_cache_name(function_name);
  await function_new_generic(
    cache_name,
    "",
    js_code_statement_return(
      js_code_await(
        js_code_call_args(function_cache.name, [
          function_name,
          js_code_brackets(),
        ]),
      ),
    ),
    false,
    [],
    true,
    file_write,
  );
  await function_data(cache_name);
  return {
    cache_name,
  };
}
