import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { list_join } from "./list_join.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_new_args(function_name, args) {
  assert_arguments_length(arguments, 2);
  let args_split = string_split_comma(args);
  let args_joined = list_join(args_split, ", ");
  await function_new_generic(
    function_name,
    args_joined,
    "",
    true,
    [],
    false,
    file_write,
  );
}
