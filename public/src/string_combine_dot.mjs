import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function string_combine_dot(previous_first) {
  return string_combine_multiple([previous_first, "."]);
}
