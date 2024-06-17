import { js_code_await } from "./js_code_await.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { function_cache } from "./function_cache.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { string_combine } from "./string_combine.mjs";
import { file_write } from "./file_write.mjs";
export async function function_cache_new(function_name) {
  await function_new_generic(
    string_combine(function_name, "_cache"),
    "",
    js_code_await(
      js_code_statement_call_args(function_cache.name, [
        function_name,
        js_code_brackets(),
      ]),
    ),
    false,
    [],
    true,
    file_write,
  );
}
