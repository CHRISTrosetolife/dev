import { data_update_multiple_transform } from "./data_update_multiple_transform.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
import { data_path } from "./data_path.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function data_update_multiple(fps) {
  await file_delete_if_exists(data_path());
  await file_json_transform_exists(data_path(), lambda);async function lambda(data) {
    await data_update_multiple_transform(fps, data);
  }
}
