import { date_parts } from "./date_parts.mjs";
import { date_now } from "./date_now.mjs";
export function date_now_parts() {
  let now = date_now();
  return date_parts(now);
}
