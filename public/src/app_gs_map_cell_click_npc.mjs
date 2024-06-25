import { app_gs_conversation } from "./app_gs_conversation.mjs";
import { app_gs_save } from "./app_gs_save.mjs";
import { app_gs_walk_direction } from "./app_gs_walk_direction.mjs";
import { sleep } from "./sleep.mjs";
import { app_gs_sleep_time_face } from "./app_gs_sleep_time_face.mjs";
import { app_gs_map_html_at_find } from "./app_gs_map_html_at_find.mjs";
import { app_gs_walk_path } from "./app_gs_walk_path.mjs";
import { app_gs_map_path } from "./app_gs_map_path.mjs";
import { app_gs_map_neighbors_get } from "./app_gs_map_neighbors_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_gs_overlay_speech_text } from "./app_gs_overlay_speech_text.mjs";
import { list_join } from "./list_join.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_gs_map_cell_click_npc(context, npc) {
  let { player } = context.game;
  let messages = [];
  let needs_prayer = player.pray.conversation !== true;
  if (needs_prayer) {
    let text =
      "❗You remember you have not 🙏 prayed, yet, before your next conversation.";
    list_add(messages, text);
  }
  let needs_energy = player.energy.conversation <= 0;
  if (needs_energy) {
    let text =
      "❗You remember you are too tired to have a conversation, right now, and need to study the 📖 bible, first.";
    list_add(messages, text);
  }
  if (list_empty_not_is(messages)) {
    let menu_overlay = app_gs_menu_overlay(context);
    let text = list_join(messages, "<br><br>");
    let overlay_speech = app_gs_overlay_speech_text(menu_overlay, text);
    html_button_width_full_text_click_back(overlay_speech, () => {
      html_remove(menu_overlay);
    });
  } else {
    player.pray.conversation = false;
    let neighbors = app_gs_map_neighbors_get(context, npc);
    let { path } = app_gs_map_path(context, neighbors);
    await app_gs_walk_path(context, path);
    let npc_c = app_gs_map_html_at_find(context, npc, "npc");
    let sleep_time = app_gs_sleep_time_face();
    await sleep(sleep_time);
    app_gs_walk_direction(context.player_c, player, npc);
    await sleep(sleep_time);
    app_gs_walk_direction(npc_c, npc, player);
    app_gs_save(context);
    app_gs_conversation(context, npc);
  }
}
