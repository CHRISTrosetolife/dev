import { file_read_json } from "./file_read_json.mjs";
import { data_path } from "./data_path.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_index_generate() {
  let name = "function_index";
  let d = await file_read_json(data_path());
  let { files } = d;
  let file_names = object_properties(files);
}
