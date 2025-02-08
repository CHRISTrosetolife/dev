import { functions_paths } from "./functions_paths.mjs";
import { data_path } from "./data_path.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { data_update_multiple } from "./data_update_multiple.mjs";
export async function data_update() {
  let fps = await functions_paths();
  await file_delete_if_exists(data_path());
  await data_update_multiple(fps);
}
