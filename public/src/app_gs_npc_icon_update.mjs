import { app_gs_npc_icon_unconverted } from "./app_gs_npc_icon_unconverted.mjs";
import { app_gs_npc_icon_unknown } from "./app_gs_npc_icon_unknown.mjs";
import { app_gs_npc_icon_wait } from "./app_gs_npc_icon_wait.mjs";
import { app_gs_npc_conversation_wait } from "./app_gs_npc_conversation_wait.mjs";
import { app_gs_npc_icon_christian } from "./app_gs_npc_icon_christian.mjs";
export function app_gs_npc_icon_update(context, npc, c_blur, c) {
  if (app_gs_npc_conversation_wait(map, npc)) {
    app_gs_npc_icon_wait(c_blur, c);
  } else if (npc.christian) {
    app_gs_npc_icon_christian(c_blur, c);
  } else if (npc.conversation_count === 0 || !npc.gospel_share) {
    app_gs_npc_icon_unknown(c_blur, c);
  } else {
    app_gs_npc_icon_unconverted(c_blur, c);
  }
}
