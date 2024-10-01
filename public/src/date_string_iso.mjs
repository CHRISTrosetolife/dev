import { date_now } from "./date_now.mjs";
export function date_string_iso() {
  return date_now().toISOString();
}
