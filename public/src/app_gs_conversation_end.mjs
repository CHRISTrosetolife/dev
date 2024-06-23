import { app_gs_npc_icon_update } from "./app_gs_npc_icon_update.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_gs_conversation_end(div_player, menu_overlay) {
  html_button_width_full_text_click(
    div_player,
    "👋 Politely end the conversation after 🙏 praying",
    () => {
      app_gs_npc_icon_update(map, o, c_blur, c);
      html_remove(menu_overlay);
    },
  );
}
