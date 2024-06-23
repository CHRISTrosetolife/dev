import { error } from "./error.mjs";
import { app_gs_conversation_end } from "./app_gs_conversation_end.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
export function app_gs_conversation_npc_end(menu_overlay, npc, npc_text) {
  app_gs_conversation_npc(menu_overlay, npc, npc_text);
  let div_player = app_gs_conversation_player_prompt(menu_overlay, "");
  app_gs_conversation_end(div_player, menu_overlay, error());
}
