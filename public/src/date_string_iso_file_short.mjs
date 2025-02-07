import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
export function date_string_iso_file_short() {
  return string_replace_multiple(date_string_iso_file(), ["-", "T", "_"], "");
}
