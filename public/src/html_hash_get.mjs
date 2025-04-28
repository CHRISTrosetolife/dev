import { window_location } from "./window_location.mjs";
export function html_hash_get() {
  let v = window_location().hash;
  return v;
}
