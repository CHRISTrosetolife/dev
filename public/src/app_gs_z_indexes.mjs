import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_gs_z_indexes() {
  let g = global_function_initialize(app_gs_z_indexes, () => [
    "tile",
    "overlay",
    "player",
    "clicker",
    "menu",
  ]);
}
