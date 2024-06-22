import { app_gs_conversation_npc_opening_text } from "./app_gs_conversation_npc_opening_text.mjs";
import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  map.player.conversation_count++;
  npc.conversation_count++;
  if (map.player.conversation_count < npc.conversation_wait_until) {
  } else {
    let text = app_gs_conversation_npc_opening_text(map, npc);
    app_gs_conversation_npc_opening(menu_overlay, npc, text, map);
  }
}
