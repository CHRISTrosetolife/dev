import { function_paths } from "./function_paths.mjs";
import { data_update_single } from "./data_update_single.mjs";
import { data_path } from "./data_path.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function data_update(ast) {
  function_paths;
  await file_json_transform_exists(data_path(), async (data) => {
    data_update_single(ast, data);
  });
}
