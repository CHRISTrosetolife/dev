import { json_from } from "./json_from.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function file_json_transform(lambda, file_path, args) {
  let json = await file_read(file_path);
  let object = json_from(json);
  let result = await lambda(object, ...args);
  await file_overwrite_json(file_path, obj);
  return result;
}
