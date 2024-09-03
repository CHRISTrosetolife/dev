import { global_function_initialize_async } from "./global_function_initialize_async.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
export async function ceb_definition_wolff_context() {
  return await global_function_initialize_async(app_gs_z_indexes, () => [
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
