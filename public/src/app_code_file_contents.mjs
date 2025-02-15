import { app_code_file_get } from "./app_code_file_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_code_file_contents(path) {
  let file = await app_code_file_get(path);
  let contents = object_property_get(file, "contents");
  return contents;
}
