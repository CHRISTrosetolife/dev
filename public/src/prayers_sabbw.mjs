import { prayers_bbw } from "./prayers_bbw.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function prayers_sabbw(a) {
  let v = string_combine_multiple(["Save and ", prayers_bbw(a)]);
  return v;
}
