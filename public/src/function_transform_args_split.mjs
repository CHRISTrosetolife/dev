import { function_transform_args_split_split } from "./function_transform_args_split_split.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_transform_args_split(
  lambda_names,
  function_name,
  args,
) {
  let split = string_split_comma(lambda_names);
  return await function_transform_args_split_split(split, function_name, args);
}
