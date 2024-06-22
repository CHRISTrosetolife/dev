import { app_gs_conversation_end } from "./app_gs_conversation_end.mjs";
import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
export function app_gs_conversation_npc_opening(menu_overlay, npc, text, map) {
  app_gs_conversation_npc(menu_overlay, npc, text);
  let div_player = app_gs_conversation_player_prompt(menu_overlay, "");
  html_button_width_full_text_click(
    div_player,
    string_combine_multiple([
      "📖 Tell ",
      npc.name,
      " that Jesus ✝️ died, was 🪨 buried and 🤴🏽 rose to life!",
    ]),
    () => {
      app_gs_conversation_gospel(menu_overlay, npc, map);
    },
  );
  app_gs_conversation_end(div_player, menu_overlay);
}
