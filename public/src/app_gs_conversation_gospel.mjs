import { app_gs_conversation_witness } from "./app_gs_conversation_witness.mjs";
import { app_gs_conversation_gospel_reminder } from "./app_gs_conversation_gospel_reminder.mjs";
import { app_gs_conversation_gospel_convert } from "./app_gs_conversation_gospel_convert.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_gs_conversation_gospel(menu_overlay, npc, map) {
  html_clear(menu_overlay);
  if (npc.christian) {
    app_gs_conversation_gospel_reminder(menu_overlay, npc);
  } else if (npc.objection_count === 0) {
    app_gs_conversation_gospel_convert(menu_overlay, npc);
  } else {
    app_gs_conversation_witness(menu_overlay, npc, map);
  }
}
