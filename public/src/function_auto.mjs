import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { function_auto_return } from "./function_auto_return.mjs";
export async function function_auto(function_name) {
  assert_arguments_length(arguments, 1);
  await function_auto_return(function_name);
}
