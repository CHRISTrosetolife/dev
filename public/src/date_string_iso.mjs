import { date_to_string_iso } from "./date_to_string_iso.mjs";
import { date_now } from "./date_now.mjs";
export function date_string_iso() {
  let d = date_now();
  let v = date_to_string_iso(d);
  return v;
}
