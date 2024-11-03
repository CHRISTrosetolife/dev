import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_replace } from "./string_replace.mjs";
export function string_replace_pad(n, dash) {
  return string_replace(n, dash, string_combine_multiple([" ", dash, " "]));
}
