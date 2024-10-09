import { string_combine_dot } from "./string_combine_dot.mjs";
import { string_first } from "./string_first.mjs";
export function string_first_combine_dot(previous) {
  let previous_first = string_first(previous);
  let abbreviation = string_combine_dot(previous_first);
  return abbreviation;
}
