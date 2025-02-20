import { object_property_get } from "./object_property_get.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
export async function app_code_file_get(path) {
  let files = await app_code_files_get();
  if (false) {
  }
  let file = object_property_get(files, path);
  return file;
}
