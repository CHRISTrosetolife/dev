import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function data_identifiers() {
  let data = await file_read_json(data_path());
  let { identifiers } = data;
  return identifiers;
}
