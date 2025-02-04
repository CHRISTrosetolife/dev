import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
export function function_name_combine(left, right) {
  let terms = [left, right];
  return function_name_combine_multiple(terms);
}
