import { string_replace } from "./string_replace.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
export function date_string_iso_to_file(d) {
  d = string_replace_multiple(d, [":", "."], "_");
  d = string_replace(d, "Z", "");
  return d;
}
