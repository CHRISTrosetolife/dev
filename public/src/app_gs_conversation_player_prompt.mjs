import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
export function app_gs_conversation_player_prompt(menu_overlay, additional) {
  let div_player = app_gs_overlay_speech(menu_overlay);
  let prompt = html_p_text(div_player, $s1,"What would you like to do?");
  html_style_font_color(prompt, "lightgreen");
  return div_player;
}
