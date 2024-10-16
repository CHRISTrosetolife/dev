import { function_output_file_args } from "./function_output_file_args.mjs";
export async function function_output_file(function_name) {
  let args = "";
  return await function_output_file_args(args, function_name);
}
