import { file_js_transform_regular } from "./file_js_transform_regular.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_transform(e, lambda) {
  let file_path = function_name_to_path(e);
  await file_js_transform_regular(file_path, lambda);
}
