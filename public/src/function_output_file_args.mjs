import { log } from "./log.mjs";
import { file_overwrite_gitignore } from "./file_overwrite_gitignore.mjs";
import { function_output_file } from "./function_output_file.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { string_is } from "./string_is.mjs";
import { function_run } from "./function_run.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_output_file_args(function_name, args) {
  log({
    args,
  });
  let args_list;
  if (args === "") {
    args_list = [];
  } else {
    args_list = string_split_comma(args);
  }
  let result = await function_run(function_name, args_list);
  if (!string_is(result)) {
    result = json_format_to(result);
  }
  let fn = function_output_file;
  let output_path = await file_overwrite_gitignore(function_name, fn, result);
  return output_path;
}
