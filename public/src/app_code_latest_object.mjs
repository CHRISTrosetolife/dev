import { date_to_string_iso } from "./date_to_string_iso.mjs";
export function app_code_latest_object(batch_path, when) {
  let iso = date_to_string_iso(when);
  let v = {
    batch_path,
    when: iso,
  };
  return v;
}
