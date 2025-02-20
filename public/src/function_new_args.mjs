import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_join } from "./list_join.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_new_args(function_name, args) {
  assert_arguments_length(arguments, 2);
  let args_split = string_split_comma(args);
  let args_joined = list_join(args_split, ", ");
  await function_new_generic_code(
    function_name,
    args_joined,
    "",
    true,
    [],
    false,
    false,
  );
}
