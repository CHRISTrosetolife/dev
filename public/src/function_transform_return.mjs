import { list_size } from "./list_size.mjs";
import { function_transform_args_return } from "./function_transform_args_return.mjs";
import { list_to } from "./list_to.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export async function function_transform_return(lambda_names, function_name) {
  let args = list_to(arguments);
  let length = list_size(args);
  assert(equal, [length, 2]);
  return await function_transform_args_return(
    lambda_names,
    function_name,
    null,
  );
}
