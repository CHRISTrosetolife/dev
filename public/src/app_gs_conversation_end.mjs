import { app_gs_map_html_at_find } from "./app_gs_map_html_at_find.mjs";
import { app_gs_npc_icon_update } from "./app_gs_npc_icon_update.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_gs_conversation_end(
  context,
  div_player,
  menu_overlay,
  npc,
) {
  html_button_width_full_text_click(
    div_player,
    "👋 Politely end the conversation after 🙏 praying",
    () => {
      let c_blur = app_gs_map_html_at_find(context, npc, "npc_overlay_blur");
      let c = app_gs_map_html_at_find(context, npc, "npc_overlay");
      app_gs_npc_icon_update(context, npc, c_blur, c);
      html_remove(menu_overlay);
    },
  );
}
