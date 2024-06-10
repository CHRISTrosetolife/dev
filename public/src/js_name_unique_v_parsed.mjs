import { js_code_declare_assign_0 } from "./js_code_declare_assign_0.mjs";
import { js_name_unique_v } from "./js_name_unique_v.mjs";
export function js_name_unique_v_parsed(ast) {
  let variable_name = js_name_unique_v(ast);
  let parsed = js_code_declare_assign_0(variable_name);
  return {
    parsed,
    variable_name,
  };
}
