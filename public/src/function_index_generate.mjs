import { list_map } from "./list_map.mjs";
import { function_names } from "./function_names.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { data_path } from "./data_path.mjs";
import { object_properties } from "./object_properties.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export async function function_index_generate() {
  let name = "function_index";
  let d = await file_read_json(data_path());
  let { files } = d;
  let file_names = object_properties(files);
  let function_names = list_map(file_names, function_path_to_name);
  return function_names;
}
