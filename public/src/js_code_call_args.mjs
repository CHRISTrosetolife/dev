import { list_join } from "./list_join.mjs";
export function js_code_call_args(function_name, args_code) {
  let code = `${function_name}(${list_join(args_code, ", ")})`;
  return code;
}
