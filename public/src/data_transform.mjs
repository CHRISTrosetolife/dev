import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
import { data_path } from "./data_path.mjs";
export async function data_transform(lambda) {
  await file_json_transform_exists(data_path(), lambda);
}
