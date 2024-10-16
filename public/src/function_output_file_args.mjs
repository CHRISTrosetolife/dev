import { function_output_file_args_list } from "./function_output_file_args_list.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_output_file_args(function_name, args) {
  let args_list;
  if (args === "") {
    args_list = [];
  } else {
    args_list = string_split_comma(args);
  }
  return await function_output_file_args_list(function_name, args_list);
}
