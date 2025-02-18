import { js_code_destructure } from "./js_code_destructure.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
export function js_code_destructure_assign(params_names, arg_name) {
  let v = js_code_declare_assign(js_code_destructure(params_names), arg_name);
  return v;
}
