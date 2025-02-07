import { uuid } from "./uuid.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { path_join } from "./path_join.mjs";
export async function app_code_batch_name() {
  let when = date_string_iso_file();
  let id = await uuid();
  let path = path_join(["batch", when, id, ".json"]);
  return {
    path,
    when,
    id,
  };
}
