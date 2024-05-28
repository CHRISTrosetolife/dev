import { data_update } from "./data_update.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function js_data(ast) {
  let data_path = "data.json";
  await file_json_transform_exists(data_path, (data) => data_update(ast, data));
}
