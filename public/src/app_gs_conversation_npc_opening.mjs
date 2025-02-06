import { html_button } from "./html_button.mjs";
import { app_gs_conversation_end } from "./app_gs_conversation_end.mjs";
import { app_gs_conversation_gospel } from "./app_gs_conversation_gospel.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { app_gs_conversation_npc } from "./app_gs_conversation_npc.mjs";
export function app_gs_conversation_npc_opening(
  context,
  menu_overlay,
  npc,
  text,
) {
  app_gs_conversation_npc(menu_overlay, npc, text);
  let div_player = app_gs_conversation_player_prompt(menu_overlay, "");
  html_button(
    div_player,
    string_combine_multiple([
      "📖 Tell ",
      npc.name,
      " that Jesus ✝️ died, was 🪨 buried and 🤴🏽 rose to life!",
    ]),
    async () => {
      await app_gs_conversation_gospel(context, menu_overlay, npc);
    },
  );
  app_gs_conversation_end(context, div_player, menu_overlay, npc);
}
