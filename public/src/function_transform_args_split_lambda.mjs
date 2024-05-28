import { file_js_transform } from "./file_js_transform.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_transform_args_split_lambda(
  function_name,
  mapped,
  args,
) {
  let file_path = function_name_to_path(function_name);
  return await file_js_transform(mapped, file_path, args);
}
