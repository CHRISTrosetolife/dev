import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_call_args(function_name, args_code_list) {
  let code = `${function_name}(${list_join_comma_space(args_code_list)})`;
  return code;
}
