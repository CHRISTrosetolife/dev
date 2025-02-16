import { date_string_iso_to_file } from "./date_string_iso_to_file.mjs";
import { date_string_iso } from "./date_string_iso.mjs";
export function date_string_iso_file() {
  let d = date_string_iso();
  d = date_string_iso_to_file(d);
  return d;
}
