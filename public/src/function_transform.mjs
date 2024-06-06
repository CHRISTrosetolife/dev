import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_transform_return } from "./function_transform_return.mjs";
import { log } from "./log.mjs";
export async function function_transform(lambda_names, function_name) {
  assert_arguments_length(2);
  let r = await function_transform_return(lambda_names, function_name);
  log({
    r,
  });
  let { results } = r;
  return results;
}
