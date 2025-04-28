import { window_location } from "./window_location.mjs";
export function html_hash_set(value) {
  window_location().hash = value;
}
