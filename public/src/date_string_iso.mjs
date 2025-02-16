import { date_string_iso_to } from "./date_string_iso_to.mjs";
import { date_now } from "./date_now.mjs";
export function date_string_iso() {
  let d = date_now();
  let v = date_string_iso_to(d);
  return v;
}
