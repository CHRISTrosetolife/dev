import { app_gs_conversation_root } from "./app_gs_conversation_root.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
export function app_gs_conversation_npc_root(menu_overlay, npc, text, map) {
  app_gs_conversation_npc(menu_overlay, npc, text);
  app_gs_conversation_root(menu_overlay, npc, map);
}
