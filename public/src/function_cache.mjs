import { file_name_json } from "./file_name_json.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_to } from "./json_to.mjs";
import { path_join } from "./path_join.mjs";
import { folder_gitignore } from "./folder_gitignore.mjs";
import { file_exists } from "./file_exists.mjs";
import { string_encoded_to } from "./string_encoded_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_cache(fn, args) {
  let function_name = fn.name;
  let key = {
    function_name,
    args,
  };
  let key_json = json_to(key);
  let key_encoded = string_encoded_to(key_json);
  let file_name = file_name_json(key_encoded);
  let file_path = path_join([folder_gitignore(), "cache", file_name]);
  let result;
  let object;
  if (await file_exists(file_path)) {
    object = await file_read_json(file_path);
    result = object_property_get(object, "result");
    return result;
  }
  result = await fn(...args);
  object = {
    result,
  };
  await file_write_json(file_path, object);
  return result;
}
