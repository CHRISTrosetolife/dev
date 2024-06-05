import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { date_string_iso } from "./date_string_iso.mjs";
export function date_string_iso_file() {
  let d = date_string_iso();
  d = string_replace_multiple(date_string_iso, [":", "."], "_");
}
