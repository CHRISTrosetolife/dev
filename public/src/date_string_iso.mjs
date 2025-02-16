import { date_now } from "./date_now.mjs";
export function date_string_iso() {
  let d = date_now();
  let v = d.toISOString();
  return v;
}
