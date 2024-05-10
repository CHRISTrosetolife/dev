import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call(function_name) {
  let code = js_code_call_args(function_name, []);
  return code;
}
