import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_parenthesis(inside) {
  return string_combine_multiple(["(", inside, ")"]);
}
