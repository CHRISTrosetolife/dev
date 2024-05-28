import { data_path } from "./data_path.mjs";
import { data_update } from "./data_update.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function js_data(ast) {
  await file_json_transform_exists(data_path(), (data) =>
    data_update(ast, data),
  );
}
