import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
export async function function_code(function_name_choice) {
  return await file_read(function_name_to_path(function_name_choice));
}
