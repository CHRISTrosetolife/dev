import { file_json_transform } from "./file_json_transform.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_json_transform_exists(data_path, lambda) {
  if (!(await file_exists(data_path))) {
    await file_write_json(data_path, {});
  }
  await file_json_transform(lambda, data_path, []);
}
