import { file_overwrite_gitignore } from "./file_overwrite_gitignore.mjs";
import { function_output_file } from "./function_output_file.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { string_is } from "./string_is.mjs";
import { function_run } from "./function_run.mjs";
export async function function_output_file_args_list(function_name, args_list) {
  let result = await function_run(function_name, args_list);
  if (!string_is(result)) {
    result = json_format_to(result);
  }
  let fn = function_output_file;
  let output_path = await file_overwrite_gitignore(function_name, fn, result);
  return output_path;
}
