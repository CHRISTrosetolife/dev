import { error } from "./error.mjs";
import { app_gs_npc_icon_wait } from "./app_gs_npc_icon_wait.mjs";
import { app_gs_npc_conversation_wait } from "./app_gs_npc_conversation_wait.mjs";
import { app_gs_npc_icon_christian } from "./app_gs_npc_icon_christian.mjs";
import { app_gs_npc_icon_unmet } from "./app_gs_npc_icon_unmet.mjs";
export function app_gs_npc_icon_update(map, o, c_blur, c) {
  if (o.conversation_count === 0) {
    app_gs_npc_icon_unmet(c_blur, c);
  } else if (o.christian) {
    app_gs_npc_icon_christian(c_blur, c);
  } else if (app_gs_npc_conversation_wait(map, npc)) {
    app_gs_npc_icon_wait(c_blur, c);
  } else {
    error();
  }
}
