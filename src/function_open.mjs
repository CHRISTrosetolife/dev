import {file_open} from "./file_open.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
export async function function_open(function_name) {
  const file_path = function_name_to_path(function_name);
  await file_open(file_path);
}
