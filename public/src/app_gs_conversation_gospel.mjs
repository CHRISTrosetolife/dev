import { app_gs_conversation_reminder } from "./app_gs_conversation_reminder.mjs";
import { app_gs_conversation_convert } from "./app_gs_conversation_convert.mjs";
import { app_gs_conversation_witness } from "./app_gs_conversation_witness.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function app_gs_conversation_gospel(context, menu_overlay, npc) {
  html_clear(menu_overlay);
  if (npc.christian) {
    app_gs_conversation_reminder(context, menu_overlay, npc);
  } else {
    npc.gospel_share = true;
    player.gospel_share_count++;
    if (list_empty_is(npc.objections)) {
      app_gs_conversation_convert(context, menu_overlay, npc);
    } else {
      await app_gs_conversation_witness(context, menu_overlay, npc);
    }
  }
}
