import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function string_underscore_trail(log_prefix_start) {
  return string_combine_multiple([log_prefix_start, "_"]);
}
