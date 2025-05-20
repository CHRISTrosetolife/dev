import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
export function prayers_sabbwe(s) {
  let v = prayers_sabbw(string_combine_multiple(["every ", s]));
  return v;
}
