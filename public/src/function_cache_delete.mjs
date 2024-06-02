import { function_cache_path } from "./function_cache_path.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_delete } from "./file_delete.mjs";
export async function function_cache_delete(fn, args) {
  let file_path = function_cache_path(fn, args);
  await file_delete(file_path);
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
