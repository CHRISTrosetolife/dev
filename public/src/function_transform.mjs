import { function_transform_args } from "./function_transform_args.mjs";
import { list_length } from "./list_length.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export async function function_transform(lambda_name, function_name) {
  let args = arguments;
  let length = list_length(args);
  assert(equal, [length, 2]);
  return function_transform_args(lambda_name, function_name, "a");
}
