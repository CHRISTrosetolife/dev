import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_transform_return } from "./function_transform_return.mjs";
export async function function_transform_command_line(
  lambda_names,
  function_name,
) {
  return await watch_lock(async function () {
    assert_arguments_length(arguments, 2);
    let r = await function_transform_return(lambda_names, function_name);
    let { results } = r;
    return results;
  });
}
