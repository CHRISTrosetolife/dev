import { file_delete } from "./file_delete.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { uuid } from "./uuid.mjs";
export async function uuid_file(lambda) {
  let u = await uuid();
  let file_path = file_name_json(u);
  await lambda(file_path);
  await file_delete(file_path);
}
