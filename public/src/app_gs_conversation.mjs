import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { app_gs_conversation_npc_opening_text } from "./app_gs_conversation_npc_opening_text.mjs";
import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  map.player.conversation_count++;
  npc.conversation_count++;
  if (map.player.conversation_count < npc.conversation_wait_until) {
    app_gs_conversation_npc_end(
      menu_overlay,
      npc,
      string_combine_multiple(["I need some time ", "to myself ", "to think"]),
    );
  } else {
    let text = app_gs_conversation_npc_opening_text(map, npc);
    app_gs_conversation_npc_opening(menu_overlay, npc, text, map);
  }
}
