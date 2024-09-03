import { global_function_initialize_async } from "./global_function_initialize_async.mjs";
export async function ceb_definition_wolff_context() {
  return await global_function_initialize_async(
    ceb_definition_wolff_context,
    () => [
      "tile",
      "overlay",
      "npc",
      "npc_overlay_blur",
      "npc_overlay",
      "player",
      "clicker",
      "menu",
    ],
  );
}
