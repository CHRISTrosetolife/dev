import { app_gs_npc_icon_update } from "./app_gs_npc_icon_update.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_map_html_at_find_multiple } from "./app_gs_map_html_at_find_multiple.mjs";
export function app_gs_conversation_end(div_player, menu_overlay, npc, map) {
  html_button_width_full_text_click(
    div_player,
    "👋 Politely end the conversation after 🙏 praying",
    () => {
      let npc_c = app_gs_map_html_at_find_multiple(map, npc, [
        "npc_overlay_blur",
      ]);
      app_gs_npc_icon_update(map, npc, c_blur, c);
      html_remove(menu_overlay);
    },
  );
}
