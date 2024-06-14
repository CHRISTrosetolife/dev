import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { file_copy } from "./file_copy.mjs";
import { function_copy_generic } from "./function_copy_generic.mjs";
export async function function_copy(fn_name_from, fn_name_to) {
  assert_arguments_length(arguments, 2);
  let lambda = file_copy;
  await function_copy_generic(lambda, fn_name_from, fn_name_to);
}
