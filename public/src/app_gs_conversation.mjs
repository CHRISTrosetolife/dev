import { html_clear } from "./html_clear.mjs";
import { error } from "./error.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_opening } from "./app_gs_conversation_opening.mjs";
import { html_style_units } from "./html_style_units.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  npc.conversation_count++;
  let text = app_gs_conversation_opening(map, npc);
  let div_npc = app_gs_overlay_speech(menu_overlay);
  let npc_speaking = html_p_text(div_npc, string_combine(npc.name, " says :"));
  let npc_color = "lightblue";
  html_style_font_color(npc_speaking, npc_color);
  let npc_speech = app_gs_div_rounded_transparent(div_npc, npc_color, 75);
  html_style_rounded_padded(npc_speech);
  html_inner_set(npc_speech, text);
  let spacer_vertical = html_div(menu_overlay);
  html_style(spacer_vertical, {
    height: html_style_units(2),
  });
  let div_player = app_gs_overlay_speech(menu_overlay);
  let prompt = html_p_text(div_player, "What would you like to do?");
  html_style_font_color(prompt, "lightgreen");
  html_button_width_full_text_click(
    div_player,
    string_combine_multiple([
      "📖 Tell ",
      npc.name,
      " that Jesus ✝️ died, was 🪨 buried and 🤴🏽 rose to life!",
    ]),
    () => {
      if (npc.objection_count === 0) {
        error();
      } else {
        html_clear(menu_overlay);
        npc.objection_count--;
      }
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
