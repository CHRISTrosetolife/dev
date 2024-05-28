import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function data_functions() {
  let data = await file_read_json(data_path());
  let { functions: fs } = data;
  let functions = fs;
  return functions;
}
