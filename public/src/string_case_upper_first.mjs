import { string_first } from "./string_first.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function string_case_upper_first(hv_name) {
  let v = string_combine_multiple([
    string_case_upper(string_first(hv_name)),
    string_skip(hv_name, 1),
  ]);
  return v;
}
