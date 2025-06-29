import { object_property_get } from "./object_property_get.mjs";
import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function data_get(property_name) {
  let data = await file_read_json(data_path());
  let result = object_property_get(data, property_name);
  return result;
}
