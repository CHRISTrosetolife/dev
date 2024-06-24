import { app_gs } from "./app_gs.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_gs_save(context) {
  storage_local_set(app_gs, "game", context.game);
}
