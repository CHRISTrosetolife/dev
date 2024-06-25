import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_arrow_block_args_async(names, body_string) {
  assert_arguments_length(arguments, 2);
  return string_combine_multiple([
    "(",
    list_join_comma_space(names),
    ")=>{",
    body_string,
    "}",
  ]);
}
