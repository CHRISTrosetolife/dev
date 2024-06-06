import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_transform_args(
  lambda_names,
  function_name,
  args,
) {
  let args_split = string_split_comma(args);
  let r = await function_transform_args_split(
    lambda_names,
    function_name,
    args_split,
  );
  let results = r;
}
