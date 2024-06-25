import { string_to } from "./string_to.mjs";
import { string_combine } from "./string_combine.mjs";
export function number_to_dvh(value) {
  return string_combine(string_to(value), "dvh");
}
