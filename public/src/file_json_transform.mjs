import { file_overwrite } from "./file_overwrite.mjs";
import { json_to } from "./json_to.mjs";
import { json_from } from "./json_from.mjs";
import { file_read } from "./file_read.mjs";
export async function file_json_transform(lambda, file_path, args) {
  let json_before = await file_read(file_path);
  let object = json_from(json_before);
  let result = await lambda(object, ...args);
  let json_after = json_to(result);
  await file_overwrite(file_path, json_after);
  return result;
}
