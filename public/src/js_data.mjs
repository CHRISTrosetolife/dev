import { file_exists } from "./file_exists.mjs";
export async function js_data(ast) {
  let data_path = "data.json";
  if (!(await file_exists(data_path))) {
    file_json_overwrite;
  }
}
