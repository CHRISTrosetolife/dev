import { function_new_generic } from "./function_new_generic.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { function_cache } from "./function_cache.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
export async function function_cache_new(function_name) {
  js_code_statement_call_args(function_cache.name, [
    function_name,
    js_code_brackets(),
  ]);
  await function_new_generic();
}
