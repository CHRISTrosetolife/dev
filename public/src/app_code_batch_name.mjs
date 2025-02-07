import { uuid } from "./uuid.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
export async function app_code_batch_name() {
  let v = path_join(["batch", date_string_iso_file(), await uuid(), ".json"]);
  return v;
}
