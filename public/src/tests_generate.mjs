import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { function_run } from "./function_run.mjs";
export async function tests_generate() {
  let names = await functions_names();
  let filtered = list_filter(names, (n) => string_includes(n, "_test_"));
  let function_name = "tests";
  let mapped = list_map(filtered, js_code_statement_call);
  let mapped2 = list_map(mapped, js_code_await);
  let body_string = list_join_newline(mapped2);
  await function_new_generic_code(
    function_name,
    "",
    body_string,
    false,
    [],
    true,
    true,
  );
  return await function_run(function_name, []);
}
