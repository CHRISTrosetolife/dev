import { html_remove } from "./html_remove.mjs";
import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
export function app_gs_conversation_root(menu_overlay, npc) {
  let div_player = app_gs_conversation_player_prompt(menu_overlay);
  html_button_width_full_text_click(
    div_player,
    string_combine_multiple([
      "📖 Tell ",
      npc.name,
      " that Jesus ✝️ died, was 🪨 buried and 🤴🏽 rose to life!",
    ]),
    () => {
      app_gs_conversation_gospel(menu_overlay, npc);
    },
  );
  html_button_width_full_text_click(
    div_player,
    "👋 Politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
