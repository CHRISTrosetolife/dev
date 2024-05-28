import { file_write } from "./file_write.mjs";
import { json_to } from "./json_to.mjs";
export async function file_overwrite_json(file_path, object) {
  let json = json_to(object);
  await file_write(file_path, json);
}
