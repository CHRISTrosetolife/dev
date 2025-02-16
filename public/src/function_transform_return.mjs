import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_transform_args_return } from "./function_transform_args_return.mjs";
export async function function_transform_return(lambda_names, function_name) {
  assert_arguments_length(arguments, 2);
  let v = await function_transform_args_return(
    lambda_names,
    function_name,
    null,
  );
  return v;
}
