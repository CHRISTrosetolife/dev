import { js_code_statement } from "./js_code_statement.mjs";
import { list_join } from "./list_join.mjs";
export function js_code_call_args(function_name, args) {
  let code = js_code_statement(`${function_name}(${list_join(args, ", ")})`);
  return code;
}
