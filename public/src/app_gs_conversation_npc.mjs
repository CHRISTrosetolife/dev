import { html_style_units } from "./html_style_units.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
export function app_gs_conversation_npc(menu_overlay, npc, text) {
  let div_npc = app_gs_overlay_speech(menu_overlay);
  let npc_speaking = html_p_text(div_npc, string_combine(npc.name, " says:"));
  let npc_color = "lightblue";
  html_style_font_color(npc_speaking, npc_color);
  let npc_speech = app_gs_div_rounded_transparent(div_npc, npc_color, 75);
  html_style_rounded_padded(npc_speech);
  html_inner_set(npc_speech, text);
  let spacer_vertical = html_div(menu_overlay);
  html_style(spacer_vertical, {
    height: html_style_units(2),
  });
}
