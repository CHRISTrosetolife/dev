import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_gs_z_indexes() {
  return global_function_initialize(app_gs_z_indexes, () => [
    "tile",
    "overlay",
    "npc",
    "npc_overlay_blur",
    "npc_overlay",
    "player",
    "clicker",
    "menu",
  ]);
}
