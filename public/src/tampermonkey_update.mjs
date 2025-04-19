import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { file_overwrite_open } from "./file_overwrite_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { path_join } from "./path_join.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
export async function tampermonkey_update(name) {
  let id = "tampermonkey";
  let combined = function_name_combine(id, name);
  let functions = await function_dependencies_string(combined);
  let contents = string_combine_multiple([
    js_code_statement_call(combined),
    functions,
  ]);
  let output_path = path_join([id, string_combine_multiple([name, ".js"])]);
  await file_overwrite_open(output_path, functions);
}
