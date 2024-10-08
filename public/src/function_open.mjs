import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { file_open_unawait } from "./file_open_unawait.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_open(function_name) {
  assert_arguments_length(arguments, 1);
  let file_path = function_name_to_path(function_name);
  file_open_unawait(file_path);
}
