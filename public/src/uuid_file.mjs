import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { uuid } from "./uuid.mjs";
export async function uuid_file(lambda) {
  let u = await uuid();
  let file_path = file_name_json(u);
  try {
    await lambda(file_path);
  } finally {
    await file_delete_if_exists(file_path);
  }
}
