import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { file_read } from "./file_read.mjs";
export async function function_code(function_name_choice) {
  return await file_read(function_name_to_file_name(function_name_choice));
}
