import { app_gs } from "./app_gs.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
export function app_gs_game_delete() {
  storage_local_remove(app_gs, "game");
}
