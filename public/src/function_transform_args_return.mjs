import { null_is } from "./null_is.mjs";
import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_transform_args_return(
  lambda_names,
  function_name,
  args,
) {
  let args_split = null_is(args) ? [] : string_split_comma(args);
  let r = await function_transform_args_split(
    lambda_names,
    function_name,
    args_split,
  );
  return r;
}
