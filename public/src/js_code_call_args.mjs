import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_call_args(function_name, args_code_list) {
  assert_arguments_length(arguments, 2);
  let code = `${function_name}(${list_join_comma_space(args_code_list)})`;
  return code;
}
