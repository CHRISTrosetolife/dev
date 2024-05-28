import { list_map_async } from "./list_map_async.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_import } from "./function_import.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_transform_args_split(
  lambda_names,
  function_name,
  args,
) {
  let file_path = function_name_to_path(function_name);
  let split = string_split_comma(lambda_names);
  let mapped = await list_map_async(split, function_import);
  return await file_js_transform(mapped, file_path, args);
}
