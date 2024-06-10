import { data_path } from "./data_path.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { data_update_multiple } from "./data_update_multiple.mjs";
import { function_paths } from "./function_paths.mjs";
export async function data_update() {
  let fps = await function_paths();
  await file_delete_if_exists(data_path());
  await data_update_multiple(fps);
}
