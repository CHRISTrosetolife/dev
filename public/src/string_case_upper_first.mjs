import { string_skip } from "./string_skip.mjs";
import { string_take } from "./string_take.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function string_case_upper_first(hv_name) {
  return string_combine_multiple([
    string_case_upper(string_take(hv_name, 1)),
    string_skip(hv_name, 1),
  ]);
}
