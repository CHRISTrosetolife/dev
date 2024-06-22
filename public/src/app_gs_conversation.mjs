import { error } from "./error.mjs";
import { app_gs_conversation_npc_root } from "./app_gs_conversation_npc_root.mjs";
import { app_gs_conversation_opening } from "./app_gs_conversation_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  npc.conversation_count++;
  let text = app_gs_conversation_opening(map, npc);
  app_gs_conversation_npc_root(menu_overlay, npc, text, error());
}
