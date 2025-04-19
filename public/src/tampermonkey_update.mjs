import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { path_join } from "./path_join.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function tampermonkey_update(name) {
  let id = "tampermonkey";
  let combined = function_name_combine(id, name);
  let contents = await function_dependencies_string(combined);
  let output_path = path_join([id, string_combine_multiple([name, ".js"])]);
  await file_overwrite(output_path, contents);
}
