import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_assign(left, value) {
  let v = string_combine_multiple([left, " = ", value]);
  return v;
}
