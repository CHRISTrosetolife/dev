import { function_transform_args } from "./function_transform_args.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
export async function function_transform_return(
  args,
  lambda_names,
  function_name,
) {
  let length = list_length(args);
  assert(equal, [length, 2]);
  await function_transform_args(lambda_names, function_name, "a");
}
