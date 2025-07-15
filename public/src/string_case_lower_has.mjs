import { string_case_upper } from "./string_case_upper.mjs";
import { equal_not } from "./equal_not.mjs";
export function string_case_lower_has(s) {
  let v = equal_not(string_case_upper(s), s);
  return v;
}
