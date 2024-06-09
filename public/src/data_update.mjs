import { data_update_multiple } from "./data_update_multiple.mjs";
import { function_paths } from "./function_paths.mjs";
export async function data_update() {
  let fps = await function_paths();
  await data_update_multiple(fps);
}
