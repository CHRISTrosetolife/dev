import { file_name_json } from "./file_name_json.mjs";
import { path_join } from "./path_join.mjs";
import { uuid } from "./uuid.mjs";
export async function app_code_batch_name_when(when) {
  let id = await uuid();
  let path = path_join(["batch", when, file_name_json(id)]);
  return path;
}
