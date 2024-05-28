import { data_update_single } from "./data_update_single.mjs";
import { data_path } from "./data_path.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function js_data(ast) {
  await file_json_transform_exists(data_path(), (data) =>
    data_update_single(ast, data),
  );
}
