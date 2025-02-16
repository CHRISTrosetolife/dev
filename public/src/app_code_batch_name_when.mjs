import { date_string_iso_to_file } from "./date_string_iso_to_file.mjs";
import { date_to_string_iso } from "./date_to_string_iso.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { path_join } from "./path_join.mjs";
import { uuid } from "./uuid.mjs";
export async function app_code_batch_name_when(when) {
  let id = await uuid();
  let iso = date_to_string_iso(when);
  let path = path_join([
    "batch",
    date_string_iso_to_file(iso),
    file_name_json(id),
  ]);
  return path;
}
