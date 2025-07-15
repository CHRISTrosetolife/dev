import { equal_not } from "./equal_not.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export function string_case_upper_has(s) {
  let v = equal_not(string_case_lower(s), s);
  return v;
}
