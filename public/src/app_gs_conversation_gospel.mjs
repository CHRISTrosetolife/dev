import { app_gs_conversation_reminder } from "./app_gs_conversation_reminder.mjs";
import { app_gs_conversation_convert } from "./app_gs_conversation_convert.mjs";
import { app_gs_conversation_witness } from "./app_gs_conversation_witness.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function app_gs_conversation_gospel(menu_overlay, npc, map) {
  html_clear(menu_overlay);
  if (npc.christian) {
    app_gs_conversation_reminder(menu_overlay, npc, map);
  } else {
    npc;
    if (list_empty_is(npc.objections)) {
      app_gs_conversation_convert(menu_overlay, npc, map);
    } else {
      await app_gs_conversation_witness(menu_overlay, npc, map);
    }
  }
}
