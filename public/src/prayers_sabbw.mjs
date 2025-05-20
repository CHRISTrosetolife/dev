import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function prayers_sabbw(a) {
  let v = string_combine_multiple([
    "Save and ",
    string_combine_multiple(["bless beyond words ", a]),
  ]);
  return v;
}
