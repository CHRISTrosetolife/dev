import { window_location } from "./window_location.mjs";
export function html_hostname() {
  let v = window_location().hostname;
  return v;
}
