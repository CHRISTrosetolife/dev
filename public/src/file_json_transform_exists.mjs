import { file_json_transform } from "./file_json_transform.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_json_transform_exists(file_path, lambda) {
  if (!(await file_exists(file_path))) {
    await file_write_json(file_path, {});
  }
  await file_json_transform(lambda, file_path, []);
}
