import { js_code_await } from "./js_code_await.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_names } from "./function_names.mjs";
import { list_map } from "./list_map.mjs";
import { function_run } from "./function_run.mjs";
import { function_auto } from "./function_auto.mjs";
export async function tests_generate() {
  let names = await function_names();
  let filtered = list_filter(names, (n) => string_includes(n, "_test_"));
  for (let f of filtered) {
    await function_auto(f);
  }
  let function_name = "tests";
  let mapped = list_map(filtered, js_code_statement_call);
  let mapped2 = list_map(mapped, js_code_await);
  let body_string = list_join_newline(mapped2);
  await function_delete_if_exists(function_name);
  await function_new_generic(function_name, "", body_string, false, [], true);
  return await function_run(function_name, []);
}
