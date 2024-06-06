import { list_to } from "./list_to.mjs";
import { function_transform_args } from "./function_transform_args.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
export async function function_transform_return(lambda_names, function_name) {
  let args = list_to(arguments);
  let length = list_length();
  assert(equal, [length, 2]);
  return await function_transform_args(lambda_names, function_name, "a");
}
